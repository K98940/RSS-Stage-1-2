import { HTMLAttributes, Callback, Place } from './../../types/types';
import { MyElement, MyElementProps } from '../app/Element/my-element';
import './puzzle.css';

type PuzzleProps = {
  design: 'first' | 'middle' | 'last';
  textContent: string;
  classNames?: string[];
  attributes: HTMLAttributes[];
  callback?: Callback;
};

export class Puzzle extends MyElement {
  constructor(props: PuzzleProps) {
    const prop: MyElementProps = {
      classNames: props.classNames?.concat(['puzzle-element']),
      attributes: props.attributes,
      callback: props.callback,
    };
    const cfg: PuzzleProps = {
      design: props.design,
      textContent: props.textContent,
      attributes: props.attributes,
    };

    super(prop);
    this.config(cfg);
  }

  config(cfg: PuzzleProps) {
    const puzzleCore = new MyElement({
      textContent: cfg.textContent,
      classNames: ['puzzle-core'],
      attributes: [
        ['place', Place.source],
        ['draggable', 'true'],
      ],
    });
    const puzzleRight = new MyElement({
      classNames: ['puzzle-right-part'],
      attributes: [
        ['place', Place.source],
        ['draggable', 'true'],
      ],
    });
    this.appendNodes(puzzleCore, puzzleRight);
  }
}
