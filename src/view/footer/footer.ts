import { State } from './../../components/app/State/state';
import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import { BtnCheck } from './btn-check/btn-check';
import { BtnAutoComplete } from './btn-auto-complete/btn-auto-complete';
import { BtnShowTranslate } from './btn-translate/btn-translate';
import { BtnAudioHint } from './btn-audio-hint/btn-audio-hint';

export default class Footer extends MyElement {
  static instance: Footer | undefined;

  state;

  constructor() {
    const prop: MyElementProps = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(prop);
    if (Footer.instance) {
      return Footer.instance;
    }
    Footer.instance = this;
    this.state = new State();
    this.state.subscribe(this);

    this.appendNodes(
      new BtnAudioHint(),
      new BtnShowTranslate(),
      new BtnCheck(),
      new BtnAutoComplete(),
    );
  }

  public updateValue(): void {
    if (!this.state) return;
    const { process } = this.state.getState();
    switch (process) {
      case 'start':
        this.setClasses(['visibility_hidden']);
        break;
      case 'login':
        this.setClasses(['visibility_hidden']);
        break;
      case 'game':
        this.removeClass('visibility_hidden');
        break;
      default:
        break;
    }
  }
}
