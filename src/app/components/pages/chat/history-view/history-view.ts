import './history-view.css';
import { Component } from '../../../component/component';
import state, { subscribe } from '../../../../../state/state';
import { Color, l } from '../../../../../utils/utils';

export class HistoryView extends Component {
  constructor() {
    super({ classNames: ['history'] });
    subscribe('chat', () => this.render());
  }

  public render(): void {
    l('state chat ', state.chat, Color.blue);
    const user = state.currentUser;
    const chat = state.chat[user];

    this.node.innerHTML = '';
    chat.forEach((message) => {
      this.appendNodes(new Component({ tag: 'p', textContent: `- ${message.text}, from: ${message.from}` }));
    });
  }
}
