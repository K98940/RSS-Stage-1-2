import './btn-audio-hint.css';
import { Actions } from '../../../types/types';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { HintAudio } from '../../../components/hint-audio/hint-audio';

export class BtnAudioHint extends MyElement {
  state: State;

  audio;

  constructor() {
    super({
      tag: 'button',
      classNames: ['visibility_hidden', 'btn_audio-hint', 'btn-group-1'],
    });
    this.setCallback(this.handleClick.bind(this), 'click');
    this.state = new State();
    this.state.subscribe(this);
    this.audio = new HintAudio();
    this.audio.subscribe(
      this.handleCanPlay.bind(this),
      this.handleEnded.bind(this),
    );
  }

  public update(): void {
    const { process } = this.state.getState();
    switch (process) {
      case 'game':
        this.removeClass('visibility_hidden');
        break;
      default:
        break;
    }
  }

  private handleClick(): void {
    this.setClasses(['audio-hint_wait']);
    document.dispatchEvent(new CustomEvent(Actions.playHint));
  }

  private handleCanPlay() {
    this.removeClass('audio-hint_wait');
    this.setClasses(['audio-hint_play']);
  }

  private handleEnded() {
    this.removeClass('audio-hint_play');
  }
}
