import './footer.css';
import { Component } from '../../../component/component';
import logo from './assets/img/logo-rsschool3.webp';

const RS_LINK = 'https://app.rs.school/';
const AUTHOR_LINK = 'https://github.com/K98940';
const AUTHOR_NAME = 'K98940';
const REL = 'noopener noreferrer';
const TARGET = '_blank';
const YEAR_MAKE = '2024';

export class Footer extends Component {
  constructor() {
    super({ tag: 'footer', classNames: ['footer'] });

    const logoLink = new Component({
      tag: 'a',
      attributes: [
        ['href', RS_LINK],
        ['target', TARGET],
        ['rel', REL],
      ],
      classNames: ['footer-link'],
    });
    const logoImg = new Component({ tag: 'img', attributes: [['src', logo]], classNames: ['footer-logo'] });
    logoLink.appendNodes(logoImg);

    const spanYear = new Component({ tag: 'span', textContent: YEAR_MAKE, classNames: ['footer-year'] });

    const authorLink = new Component({
      tag: 'a',
      attributes: [
        ['href', AUTHOR_LINK],
        ['target', TARGET],
        ['rel', REL],
      ],
      classNames: ['footer-link'],
    });
    const authorName = new Component({ tag: 'span', textContent: AUTHOR_NAME, classNames: ['footer__author-name'] });
    authorLink.appendNodes(authorName);

    this.appendNodes(logoLink, spanYear, authorLink);
  }
}
