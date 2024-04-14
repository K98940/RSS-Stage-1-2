import state from '../../../../../state/state';
import { Dispatch } from '../../../../../types/types';
import { Component } from '../../../component/component';

interface Props {
  login: string;
  isLogined: boolean;
  dispatch: Dispatch;
}

export class ListItem extends Component {
  login;

  isLogined;

  constructor(props: Props) {
    super({
      tag: 'li',
      textContent: props.login,
      attributes: [[props.isLogined ? 'active' : 'inactive', '']],
      callback: () => props.dispatch({ type: 'select-user', payload: { login: this.login } }),
    });
    if (props.login === state.currentUser) this.setAttributes([['selected', '']]);
    this.login = props.login;
    this.isLogined = props.isLogined;
  }
}
