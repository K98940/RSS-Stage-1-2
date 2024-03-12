import { MyElement } from '../../../../components/app/Element/my-element';
import { autoComplete } from '../../../../components/app/utils/auto-complete';
import { check } from '../../../../components/app/utils/check';
import { randomizeArray } from '../../../../components/app/utils/randomize-array';
import { Actions, Cell, PageCollection } from '../../../../types/types';
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
    document.addEventListener(Actions.continue, () => this.clickBtnContinue());
    document.addEventListener(Actions.check, () => this.clickBtnCheck());
    document.addEventListener(Actions.autoComplete, () => {
      if (this.source) autoComplete(this.source[currentLine], ANIMATION_DELAY);
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
      const cellsRow: Cell[] = words.map((word, id) => {
        const node = new MyElement({
          textContent: word,
          classNames: ['field__word'],
          attributes: [['place', 'source']],
          callback: this.handleWordClick,
        });

        return { id, text: word, node: node.getNode() };
      });

      const randomWords = randomizeArray(cellsRow);
      return randomWords;
    });

    this.destination = this.source.map((_, line) => {
      const lineNumber = new MyElement({
        textContent: `${line + 1}`,
        classNames: ['line-number'],
      });
      return [
        { id: line + 1, text: `${line + 1}`, node: lineNumber.getNode() },
      ];
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
        this.clearCheckClasses(this.destination[currentLine]);
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

        if (this.source[currentLine].length !== 0) {
          document.dispatchEvent(new CustomEvent(Actions.lineNotComplete));
        }
        this.render();
      }
    }
  };

  private lineComplete(): void {
    if (this.destination) {
      const restWords = this.source?.flat().length;
      const textButton = restWords ? 'Continue' : 'Next Page';
      const completedSentence = this.destination[currentLine];

      if (this.isCorrectSequence(completedSentence)) {
        document.dispatchEvent(
          new CustomEvent(Actions.correctSequence, {
            detail: { textButton },
          }),
        );
      } else document.dispatchEvent(new CustomEvent(Actions.wrongSequence));
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

  private clickBtnContinue(): void {
    if (this.destination) {
      const lastWord = this.destination[currentLine].length - 1;
      this.destination[currentLine][lastWord].node.setAttribute('complete', '');
      currentLine += 1;
      this.render();
      const restWords = this.source?.flat().length;
      if (restWords === 0) {
        document.dispatchEvent(new CustomEvent(Actions.newLevel));
      }
    }
  }

  private clickBtnCheck(): void {
    if (this.destination)
      check(this.destination[currentLine], this.correctAnswers[currentLine]);
  }

  private clearCheckClasses(sentence: Cell[]): void {
    sentence.forEach((word, i) => {
      if (i === 0) return;
      word.node.classList.remove('word_correct');
      word.node.classList.remove('word_wrong');
    });
  }
}
