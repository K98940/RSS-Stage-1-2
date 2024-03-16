import { Actions } from '../../types/types';
import { State } from '../app/State/state';
const BASE_URL =
  'https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/';

type Subscriber = { (): void };
const subscribersPlay: Subscriber[] = [];
const subscribersEnded: Subscriber[] = [];

export class HintAudio {
  private urls: string[];

  private state: State;

  private audio;

  constructor() {
    this.urls = [];
    this.state = new State();
    this.audio = new Audio();
    this.audio.addEventListener('ended', this.handlerEnded.bind(this));
    this.audio.addEventListener('play', this.handlerPlay.bind(this));
    this.audio.addEventListener('canplay', this.handleCanPlay.bind(this));
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

    this.audio.src = BASE_URL + url;
  }

  public subscribe(fooStart: Subscriber, fooEnd: Subscriber): void {
    subscribersPlay.push(fooStart);
    subscribersEnded.push(fooEnd);
  }

  private handleCanPlay() {
    this.audio.play();
  }

  private handlerPlay() {
    subscribersPlay.forEach((foo) => foo());
  }

  private handlerEnded() {
    subscribersEnded.forEach((foo) => foo());
  }
}
