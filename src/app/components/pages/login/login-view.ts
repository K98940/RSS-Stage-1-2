import './login.css';
import { Page } from '../../component/page';
import { HTML } from '../../../../types/types';
import { LoginForm } from './login-form/login-form';
import { Component } from '../../component/component';

export class PageLogin extends Page {
  private form;

  private constructor() {
    super();
    this.node = new Component({ tag: 'article', classNames: ['login-page', 'login-page_flex'] });
    this.form = new LoginForm();
    this.form.render(this.node.getNode());
  }

  public static getInstance(): Page {
    if (!PageLogin.instance) PageLogin.instance = new PageLogin();
    return PageLogin.instance;
  }

  public render(context: HTML): void {
    this.node?.render(context);
  }
}
