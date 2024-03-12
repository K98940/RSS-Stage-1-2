import { MyElement } from '../../../../components/app/Element/my-element';
import { getRandom } from '../../../../components/app/utils/random';
import { Cell, Html, PageCollection } from '../../../../types/types';
import './field.css';

let currentLine = 0;
const ANIMATION_DELAY = 300;

export class Field extends MyElement {
  parent;

  source: Cell[][] | null;

  destination: Cell[][] | null;

  containerDestination: MyElement;

  containerSource: MyElement;

  correctAnswers: string[];

  constructor(parent: MyElement) {
    super({});
    this.parent = parent;
    this.source = null;
    this.destination = null;
    this.correctAnswers = [];
    this.containerDestination = new MyElement({
      classNames: ['container-destination'],
    });
    this.containerSource = new MyElement({
      classNames: ['container-source'],
    });
    document.addEventListener('continue', () => {
      if (this.destination) {
        const lastWord = this.destination[currentLine].length - 1;
        this.destination[currentLine][lastWord].node.setAttribute(
          'complete',
          '',
        );
        currentLine += 1;
        this.render();
        const restWords = this.source?.flat().length;
        if (restWords === 0) {
          document.dispatchEvent(new CustomEvent('new-level'));
        }
      }
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
      if (line === currentLine) {
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

      if (cell.x && cell.y) {
        setTimeout(() => {
          const coord = cell.node.getBoundingClientRect();
          cell.xOffset = (cell.x || 0) - Math.round(coord.x);
          cell.yOffset = (cell.y || 0) - Math.round(coord.y);
          cell.y = 0;
          cell.x = 0;

          cell.node.style.setProperty(
            '--x-coord',
            cell.xOffset.toString() + 'px',
          );
          cell.node.style.setProperty(
            '--y-coord',
            cell.yOffset.toString() + 'px',
          );
          cell.node.setAttribute('go-away', '');
          setTimeout(() => {
            cell.node.removeAttribute('go-away');
          }, ANIMATION_DELAY);
        }, 0);
      }

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
    currentLine = 0;
    this.correctAnswers.length = 0;
    this.source = data.words.map((sentence) => {
      this.correctAnswers.push(sentence.textExample);
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
        const index = this.source[currentLine]?.findIndex((word) => {
          return target === word.node;
        });
        const cell = this.source[currentLine].splice(index, 1)[0];
        cell.node.setAttribute('place', 'destination');
        cell.node.setAttribute('line', `${currentLine}`);

        // ============== go-away word
        const coord = cell.node.getBoundingClientRect();
        cell.x = Math.round(coord.x);
        cell.y = Math.round(coord.y);

        if (!this.destination) this.destination = [];
        while (this.destination.length <= currentLine)
          this.destination.push([]);

        this.destination[currentLine].push(cell);

        if (this.source[currentLine].length === 0) this.lineComplete();
        this.render();
      }

      if (
        this.destination &&
        place === 'destination' &&
        line === currentLine.toString()
      ) {
        // if clicked to Destination block
        const index = this.destination[currentLine]?.findIndex((word) => {
          return target === word.node;
        });
        const cell = this.destination[currentLine].splice(index, 1)[0];
        cell.node.setAttribute('place', 'source');

        // ============== go-away word
        const coord = cell.node.getBoundingClientRect();
        cell.x = Math.round(coord.x);
        cell.y = Math.round(coord.y);

        if (!this.source) this.source = [];
        while (this.source.length <= currentLine) this.source.push([]);

        this.source[currentLine].push(cell);

        if (this.source[currentLine].length !== 0)
          document.dispatchEvent(new CustomEvent('line-not-complete'));
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

  private lineComplete() {
    if (this.destination) {
      const restWords = this.source?.flat().length;
      const textButton = restWords ? 'Continue' : 'Next Page';

      const completedSentence = this.destination[currentLine];
      if (this.isCorrectSequence(completedSentence)) {
        document.dispatchEvent(
          new CustomEvent('line', {
            detail: { textButton },
          }),
        );
      }
    }
  }

  private isCorrectSequence(sentence: Cell[]): boolean {
    const result = sentence
      .map((word, i) => (i === 0 ? '' : word.text))
      .join(' ')
      .trim();
    const answer = this.correctAnswers[currentLine];
    return result === answer;
  }
}
