import { State } from './../../../../components/app/State/state';
import { HintAudio } from './../../../../components/hint-audio/hint-audio';
import { HintTranslate } from './../../../../components/hint-translate/hint-translate';
import { MyElement } from '../../../../components/app/Element/my-element';
import {
  autoComplete,
  resetCurrentLevel,
} from '../../../../components/app/utils/auto-complete';
import { check } from '../../../../components/app/utils/check';
import {
  randomizeArray,
  setCardsWidth,
} from '../../../../components/app/utils/randomize-array';
import { Actions, Cell, PageCollection, Place } from '../../../../types/types';
import './field.css';
import dragImage from './drag-image.webp';
import { Puzzle } from '../../../../components/puzzle/puzzle';
import { getTarget } from '../../../../components/app/utils/getTarget';

const ANIMATION_DELAY = 300;
const imgDrag = new Image();
imgDrag.src = dragImage;
imgDrag.classList.add('drag-image');

export class Field extends MyElement {
  parent;

  state: State;

  source: Cell[][] | null;

  destination: Cell[][] | null;

  containerDestination: MyElement;

  containerSource: MyElement;

  correctAnswers: string[];

  hintTranslate: HintTranslate;

  HintAudio: HintAudio;

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
    this.hintTranslate = new HintTranslate();
    this.HintAudio = new HintAudio();
    this.state = new State();
    document.addEventListener(Actions.continue, () => this.clickBtnContinue());
    document.addEventListener(Actions.check, () => this.clickBtnCheck());
    document.addEventListener(Actions.lineComplete, () => this.lineComplete());

    document.addEventListener(Actions.autoComplete, () => {
      if (this.source && this.destination) {
        this.clearCheckClasses(this.destination[this.state.currentLine]);
        resetCurrentLevel(
          this.source[this.state.currentLine],
          this.destination[this.state.currentLine],
          this.containerSource.getNode().children[this.state.currentLine],
          this.containerDestination.getNode().children[this.state.currentLine],
        );
        autoComplete(this.source[this.state.currentLine], ANIMATION_DELAY);
      }
    });
  }

  public render() {
    if (!this.source) return;
    this.getNode().innerHTML = '';
    this.containerDestination.getNode().innerHTML = '';
    this.containerSource.getNode().innerHTML = '';
    document.documentElement.style.setProperty('--trantition-duration', `0`);
    document.dispatchEvent(new CustomEvent(Actions.setTranslate));

    if (this.destination)
      this.destination.forEach((sentence) => {
        const row = this.createCellsRow(sentence, true);
        this.containerDestination.appendNodes(row);
      });
    this.appendNodes(this.containerDestination);

    this.source.forEach((sentence, line) => {
      if (line === this.state.currentLine) {
        const row = this.createCellsRow(sentence);
        this.containerSource.appendNodes(row);
      }
    });
    setCardsWidth(this.containerSource);
    this.appendNodes(this.containerSource);
    this.parent.appendNodes(
      this.containerDestination,
      this.hintTranslate,
      this.containerSource,
    );
  }

  private createCellsRow(cells: Cell[], wrapContainer?: boolean): MyElement {
    const row = new MyElement({
      classNames: ['field__row'],
      attributes: wrapContainer ? undefined : [['source', Place.source]],
    });
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
    if (!data) return;

    this.state.currentLine = 0;
    this.correctAnswers.length = 0;
    this.hintTranslate.clearHints();
    this.HintAudio.clearHints();

    this.source = data.words.map((sentence, i) => {
      this.correctAnswers.push(sentence.textExample);
      this.hintTranslate.addHint(sentence.textExampleTranslate);
      this.HintAudio.addHint(sentence.audioExample);
      const words = sentence.textExample.split(' ');
      const cellsRow: Cell[] = words.map((word, id) => {
        const classFirstElement = id === 0 ? '' : 'puzzle-element_mask';
        const node = new Puzzle({
          textContent: word,
          classNames: ['field__word', classFirstElement],
          attributes: [
            ['id', `word-${i}-${id}`],
            ['place', Place.source],
            ['draggable', 'true'],
          ],
          design: 'middle',
          callback: this.handleWordClick,
        });
        node.setCallback(this.dragstartHandler.bind(this), 'dragstart');

        return { id, text: word, node: node.getNode() };
      });

      const lastCell = cellsRow[cellsRow.length - 1].node;
      lastCell.classList.add('puzzle-element_last');
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
    const target = e?.currentTarget;

    if (target instanceof HTMLElement) {
      const place = target.getAttribute('place');
      const line = target.getAttribute('line');

      if (this.source && place === Place.source) {
        // if clicked to Source block
        const index = this.source[this.state.currentLine]?.findIndex((word) => {
          return target === word.node;
        });
        const cell = this.source[this.state.currentLine].splice(index, 1)[0];
        cell.node.setAttribute('place', Place.destination);
        cell.node.setAttribute('line', `${this.state.currentLine}`);

        // ============== go-away word
        const coord = cell.node.getBoundingClientRect();
        cell.x = Math.round(coord.x);
        cell.y = Math.round(coord.y);

        if (!this.destination) this.destination = [];
        while (this.destination.length <= this.state.currentLine)
          this.destination.push([]);

        this.destination[this.state.currentLine].push(cell);

        if (this.source[this.state.currentLine].length === 0)
          this.lineComplete();
        this.render();
      }

      if (
        this.destination &&
        place === Place.destination &&
        line === this.state.currentLine.toString()
      ) {
        // if clicked to Destination block
        this.clearCheckClasses(this.destination[this.state.currentLine]);
        const index = this.destination[this.state.currentLine]?.findIndex(
          (word) => {
            return target === word.node;
          },
        );
        const cell = this.destination[this.state.currentLine].splice(
          index,
          1,
        )[0];
        cell.node.setAttribute('place', Place.source);

        // ============== go-away word
        const coord = cell.node.getBoundingClientRect();
        cell.x = Math.round(coord.x);
        cell.y = Math.round(coord.y);

        if (!this.source) this.source = [];
        while (this.source.length <= this.state.currentLine)
          this.source.push([]);

        this.source[this.state.currentLine].push(cell);

        if (this.source[this.state.currentLine].length !== 0) {
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
      const completedSentence = this.destination[this.state.currentLine];

      this.clearCheckClasses(this.destination[this.state.currentLine]);
      if (this.isCorrectSequence(completedSentence)) {
        document.dispatchEvent(new CustomEvent(Actions.showTranslate));
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
    const answer = this.correctAnswers[this.state.currentLine];
    return result === answer;
  }

  private clickBtnContinue(): void {
    const resetCardsWidth = () => {
      if (this.destination) {
        const cards = this.destination[this.state.currentLine];
        cards.forEach((card) => {
          card.node.style.width = '';
        });
      }
    };

    if (this.destination) {
      const lastWord = this.destination[this.state.currentLine].length - 1;
      this.destination[this.state.currentLine][lastWord].node.setAttribute(
        'complete',
        '',
      );
      resetCardsWidth();
      this.state.currentLine += 1;
      this.render();
      const restWords = this.source?.flat().length;
      if (restWords === 0) {
        document.dispatchEvent(new CustomEvent(Actions.newLevel));
      }
    }
  }

  private clickBtnCheck(): void {
    if (this.destination)
      check(
        this.destination[this.state.currentLine],
        this.correctAnswers[this.state.currentLine],
      );
  }

  private clearCheckClasses(sentence: Cell[]): void {
    sentence.forEach((word, i) => {
      if (i === 0) return;
      word.node.classList.remove('word_correct');
      word.node.classList.remove('word_wrong');
    });
  }

  private dragstartHandler(e: Event | DragEvent): void {
    if (!(e instanceof DragEvent && e.target instanceof HTMLElement)) return;
    if (!e.dataTransfer) return;
    if (!this.source || !this.destination) return;

    e.dataTransfer.setDragImage(imgDrag, imgDrag.width / 2, imgDrag.height / 2);
    const puzzle = e.currentTarget;
    if (puzzle instanceof HTMLElement) {
      const currentPlace = puzzle.getAttribute('place');
      e.dataTransfer.setData('text/plain', `${puzzle?.id};${currentPlace}`);
    }
    const destElement =
      this.containerDestination.getNode().children[this.state.currentLine]
        .children[1];
    const sourceElemet = this.containerSource.getNode().children[0];
    const sourceLine = this.source[this.state.currentLine];
    const destinationLine = this.destination[this.state.currentLine];

    sourceElemet.addEventListener(
      'drop',
      this.dropHandler.bind({
        ...this,
        sourceLine,
        destinationLine,
      }),
      { once: true },
    );
    sourceElemet.addEventListener('dragover', this.dragoverHandler);
    sourceElemet.addEventListener('dragleave', this.dragleaveHandler);

    destElement.addEventListener(
      'drop',
      this.dropHandler.bind({
        ...this,
        sourceLine,
        destinationLine,
      }),
      { once: true },
    );
    destElement.addEventListener(
      'dragover',
      this.dragoverHandler.bind({
        ...this,
        sourceLine,
        destinationLine,
      }),
    );
    destElement.addEventListener('dragleave', this.dragleaveHandler);
    e.target.addEventListener(
      'dragend',
      () => {
        function clearElement(element: Element): void {
          [...element.children].forEach((children) =>
            children.classList.remove('ghost-element'),
          );
          element.removeAttribute('droppable');
        }

        clearElement(destElement);
        clearElement(sourceElemet);
      },
      { once: true },
    );
    destElement.setAttribute('droppable', '');
    sourceElemet.setAttribute('droppable', '');
  }

  private dropHandler(e: Event | DragEvent): void {
    const selectSourceAndDestination = (
      transferElementID: string,
      dragFrom: Place | string,
      target: Element,
    ) => {
      const dropedToSource = target
        ?.closest('.field__row')
        ?.getAttribute('source');

      if (dragFrom === Place.source) {
        const transferElementNode = this.containerSource
          .getNode()
          .querySelector(`#${transferElementID}`);
        transferElementNode?.setAttribute(
          'place',
          dropedToSource ? Place.source : Place.destination,
        );
        transferElementNode?.setAttribute('line', `${this.state.currentLine}`);
        if (this.source)
          return {
            source: this.source[this.state.currentLine],
            destination: dropedToSource ? this.source : this.destination,
            transferElementNode,
          };
      }
      const transferElementNode = this.containerDestination
        .getNode()
        .querySelector(`#${transferElementID}`);
      transferElementNode?.setAttribute(
        'place',
        dropedToSource ? Place.source : Place.destination,
      );
      transferElementNode?.setAttribute('line', `${this.state.currentLine}`);
      if (!this.destination)
        return {
          source: null,
          transferElementNode,
          destination: dropedToSource ? this.source : this.destination,
        };
      return {
        source: this.destination[this.state.currentLine],
        transferElementNode,
        destination: dropedToSource ? this.source : this.destination,
      };
    };

    e.preventDefault();
    if (this instanceof HTMLElement) this.removeAttribute('droppable');
    if (!(e instanceof DragEvent && e.dataTransfer)) return;
    if (!(e.target instanceof Element)) return;

    const [transferElementID, from] = e.dataTransfer
      .getData('text/plain')
      .split(';');
    const destinationNode = e.target.closest('.field__row');
    const target = getTarget(e, 'field__word');
    if (!target) return;

    const { source, destination, transferElementNode } =
      selectSourceAndDestination(transferElementID, from, target);
    if (!transferElementNode || !destinationNode || !source) return;
    if (!destination || !source || !this.source) return;

    const indexSource = source.findIndex(
      (cell) => cell.node.id === transferElementID,
    );
    // insert mode
    const childrens = [...destinationNode.children];
    const indexDestination =
      childrens.indexOf(target) === -1
        ? destination[this.state.currentLine].length
        : childrens.indexOf(target);
    const insertMethod =
      childrens.indexOf(target) === -1 ? 'beforeend' : 'beforebegin';
    const transferElement = source.splice(indexSource, 1);
    destination[this.state.currentLine].splice(
      indexDestination + 1,
      0,
      ...transferElement,
    );
    target.insertAdjacentElement(insertMethod, transferElementNode);

    if (this.source[this.state.currentLine].length === 0) {
      // here exactly this.source
      document.dispatchEvent(new CustomEvent(Actions.lineComplete));
    } else document.dispatchEvent(new CustomEvent(Actions.lineNotComplete));
  }

  private dragoverHandler(e: Event | DragEvent): void {
    e.preventDefault();
    if (!(e instanceof DragEvent && e.dataTransfer)) return;
    e.dataTransfer.dropEffect = 'move';
    const targetNode = e.target;
    if (!(targetNode instanceof Element)) return;

    if (targetNode.id) {
      targetNode.classList.add('ghost-element');
      return;
    }

    const puzzle = targetNode.closest('.field__word');
    puzzle?.classList.add('ghost-element');
  }

  private dragleaveHandler(e: Event | DragEvent): void {
    e.preventDefault();
    if (!(e instanceof DragEvent && e.dataTransfer)) return;
    const targetNode = e.target;
    if (!(targetNode instanceof Element)) return;

    if (targetNode.id) {
      targetNode.classList.remove('ghost-element');
      return;
    }

    const puzzle = targetNode.closest('.field__word');
    puzzle?.classList.remove('ghost-element');
  }
}
