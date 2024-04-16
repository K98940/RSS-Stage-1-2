import { Dispatch } from '../../../../../../../types/types';
import { Component } from '../../../../../component/component';

export class ButtonDelete extends Component {
  private id: string;

  constructor(id: string, dispatch: Dispatch) {
    super({
      tag: 'button',
      textContent: `delete`,
      classNames: ['footer_btn'],
      callback: () => dispatch({ type: 'message-delete', payload: { id: this.id } }),
    });
    this.id = id;
  }
}
