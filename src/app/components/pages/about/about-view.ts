import './about.css';
import { Page } from '../../component/page';
import { HTML } from '../../../../types/types';
import { AboutForm } from './about-form/about-form';
import { Component } from '../../component/component';

export class PageAbout extends Page {
  private form;

  private constructor() {
    super();
    this.node = new Component({ tag: 'article', classNames: ['login-page', 'login-page_flex'] });
    this.form = new AboutForm();
    this.form.render(this.node.getNode());
  }

  public static getInstance(): Page {
    if (!PageAbout.instance) PageAbout.instance = new PageAbout();
    return PageAbout.instance;
  }

  public render(context: HTML): void {
    this.node?.render(context);
  }
}
