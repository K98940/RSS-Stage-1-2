import './btn-audio-hint.css';
import { Actions } from '../../../types/types';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';

export class BtnAudioHint extends MyElement {
  state: State;

  constructor() {
    super({
      tag: 'button',
      textContent: '🕫',
      classNames: ['visibility_hidden', 'btn_audio-hint', 'btn-group-1'],
    });
    this.setCallback(this.handleClick.bind(this), 'click');
    this.state = new State();
    this.state.subscribe(this);
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
    document.dispatchEvent(new CustomEvent(Actions.playHint));
  }
}
