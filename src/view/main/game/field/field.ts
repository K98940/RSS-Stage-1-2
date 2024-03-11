import { MyElement } from '../../../../components/app/Element/my-element';
import { getRandom } from '../../../../components/app/utils/random';
import { Cell, Html, PageCollection } from '../../../../types/types';
import './field.css';

let CURRENT_LINE = 0;

export class Field extends MyElement {
  parent;

  source: Cell[][] | null;

  destination: Cell[][] | null;

  containerDestination: MyElement;

  containerSource: MyElement;

  constructor(parent: MyElement) {
    super({});
    this.parent = parent;
    this.source = null;
    this.destination = null;
    this.containerDestination = new MyElement({
      classNames: ['container-destination'],
    });
    this.containerSource = new MyElement({
      classNames: ['container-source'],
    });
  }

  public render() {
    if (!this.source) return;
    this.getNode().innerHTML = '';
    this.containerDestination.getNode().innerHTML = '';
    this.containerSource.getNode().innerHTML = '';

    if (this.destination)
      this.destination.forEach((sentence) => {
        const row = this.createCellsRow(sentence, true);
        this.containerDestination.appendNodes(row);
      });
    this.appendNodes(this.containerDestination);

    this.source.forEach((sentence, line) => {
      if (line === CURRENT_LINE) {
        const row = this.createCellsRow(sentence);
        this.containerSource.appendNodes(row);
      }
    });
    this.appendNodes(this.containerSource);
    this.parent.appendNodes(this.containerDestination, this.containerSource);
  }

  private createCellsRow(cells: Cell[], wrapContainer?: boolean): MyElement {
    const row = new MyElement({ classNames: ['field__row'] });
    cells.forEach((cell, i) => {
      if (wrapContainer && i === 0) return;
      row.appendNodes(cell.node);
    });
    if (wrapContainer) {
      const rowContainer = new MyElement({ classNames: ['row-container'] });
      rowContainer.appendNodes(cells[0].node);
      rowContainer.appendNodes(row);
      return rowContainer;
    }
    return row;
  }

  public createMatrix(data: PageCollection) {
    CURRENT_LINE = 0;
    this.source = data.words.map((sentence) => {
      const words = sentence.textExample.split(' ');
      const randomWords = this.randomizeArray(words);
      const cellsRow: Cell[] = randomWords.map((word) => {
        const node = new MyElement({
          textContent: word,
          classNames: ['field__word'],
          attributes: [['place', 'source']],
          callback: this.handleWordClick,
        });

        return { text: word, node: node.getNode() };
      });

      return cellsRow;
    });

    this.destination = this.source.map((_, line) => {
      const lineNumber = new MyElement({
        textContent: `${line + 1}`,
        classNames: ['line-number'],
      });
      return [{ text: `${line + 1}`, node: lineNumber.getNode() }];
    });
    this.render();
  }

  private handleWordClick = (e: Event) => {
    const target = e?.target;

    if (target instanceof HTMLElement) {
      const place = target.getAttribute('place');
      const line = target.getAttribute('line');

      if (this.source && place === 'source') {
        // if clicked to Source block
        const index = this.source[CURRENT_LINE]?.findIndex((word) => {
          return target === word.node;
        });
        const cell = this.source[CURRENT_LINE].splice(index, 1)[0];
        cell.node.setAttribute('place', 'destination');
        cell.node.setAttribute('line', `${CURRENT_LINE}`);

        if (!this.destination) this.destination = [];
        while (this.destination.length <= CURRENT_LINE)
          this.destination.push([]);

        this.destination[CURRENT_LINE].push(cell);

        if (this.source[CURRENT_LINE].length === 0)
          this.lineComplete(cell.node);

        this.render();
      }

      if (
        this.destination &&
        place === 'destination' &&
        line === CURRENT_LINE.toString()
      ) {
        // if clicked to Destination block
        const index = this.destination[CURRENT_LINE]?.findIndex((word) => {
          return target === word.node;
        });
        const cell = this.destination[CURRENT_LINE].splice(index, 1)[0];
        cell.node.setAttribute('place', 'source');

        if (!this.source) this.source = [];
        while (this.source.length <= CURRENT_LINE) this.source.push([]);

        this.source[CURRENT_LINE].push(cell);
        this.render();
      }
    }
  };

  private randomizeArray = (array: string[]): string[] => {
    const source = [...array];
    const result = [];
    while (source.length > 0) {
      const element = source.splice(getRandom(0, source.length - 1), 1)[0];
      result.push(element);
    }
    return result;
  };

  private lineComplete(node: Html) {
    if (this.source) {
      CURRENT_LINE += 1;
      node.setAttribute('complete', '');
    }
  }
}
