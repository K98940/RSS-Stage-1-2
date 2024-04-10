import state from '../../../../../state/state';
import { Callback } from '../../../../../types/types';
import { Component } from '../../../component/component';

interface Props {
  login: string;
  isLogined: boolean;
  callback: Callback<string>;
}

export class ListItem extends Component {
  login;

  isLogined;

  constructor(props: Props) {
    super({
      tag: 'li',
      textContent: props.login,
      attributes: [[props.isLogined ? 'active' : 'inactive', '']],
      callback: () => props.callback(this.login),
    });
    if (props.login === state.currentUser) this.setAttributes([['selected', '']]);
    this.login = props.login;
    this.isLogined = props.isLogined;
  }
}
