import { Button } from '../../../component/button';
import { Component } from '../../../component/component';

export class AboutForm extends Component {
  constructor() {
    super({ tag: 'form', classNames: ['about__form', 'login-page_flex'] });
    const buttonOK = new Button({ textContent: 'OK' });
    buttonOK.setCallback((e) => this.handleClick(e), 'click');
    this.appendNodes(
      new Component({ tag: 'h1', textContent: 'FUN-CHAT', classNames: ['about__h1'] }),
      new Component({ tag: 'p', textContent: 'Developer: K98940', classNames: ['about__developer'] }),
      buttonOK,
    );
  }

  private handleClick(e: Event | undefined) {
    if (e) e.preventDefault();
    window.location.hash = 'chat';
  }
}
