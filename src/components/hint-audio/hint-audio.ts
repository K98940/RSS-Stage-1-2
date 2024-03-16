import { Actions } from '../../types/types';
import { State } from '../app/State/state';
const BASE_URL =
  'https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/';

export class HintAudio {
  urls: string[];

  state: State;

  constructor() {
    this.urls = [];
    this.state = new State();
    document.addEventListener(Actions.playHint, this.playHint.bind(this));
  }

  public clearHints(): void {
    this.urls.length = 0;
  }

  public addHint(url: string): void {
    this.urls.push(url);
  }

  public playHint(): void {
    const url = this.urls[this.state.level];
    if (!url) return;

    const audio = new Audio(BASE_URL + url);
    audio.play();
  }
}
