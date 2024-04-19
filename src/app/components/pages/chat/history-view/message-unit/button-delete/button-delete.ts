import { Button } from '../../../../../component/button';
import { Dispatch } from '../../../../../../../types/types';

export class ButtonDelete extends Button {
  private id: string;

  constructor(id: string, dispatch: Dispatch) {
    super({
      textContent: `delete`,
      classNames: ['footer_btn', 'btn__delete'],
      callback: () => dispatch({ type: 'message-delete', payload: { id: this.id } }),
    });
    this.id = id;
  }
}
