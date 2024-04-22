import './users-list.css';
import { ListItem } from './list-item';
import { Dispatch } from '../../../../../types/types';
import { Component } from '../../../component/component';
import { UsersController } from './users-list-controller';

type Props = {
  login: string;
  isLogined: boolean;
  countNewMessages: number;
};

export class Users {
  container;

  dispatch;

  constructor(container: Component, dispatch: Dispatch) {
    this.container = container;
    const controller = new UsersController();
    this.dispatch = dispatch;
    controller.getUsers((props) => this.render(props));
  }

  public render(props: Props[]): void {
    this.container.getNode().innerHTML = '';
    props.forEach(({ login, isLogined, countNewMessages }) => {
      this.container.appendNodes(new ListItem({ login: login, isLogined, dispatch: this.dispatch, countNewMessages }));
    });
  }
}
