import './app.css';
import Footer from '../../view/footer/footer';
import Header from '../../view/header/header';
import Main from '../../view/main/main';
import LoginForm from '../../view/login/login';
import { State } from './State/state';
import { LocalStorage } from '../../LocalStorage/local-storage';

export default class App {
  private localstorage;

  private state: State;

  constructor() {
    this.state = new State();
    this.localstorage = new LocalStorage();

    const header = new Header();
    const main = new Main();
    const footer = new Footer();
    document.body.append(header.getNode(), main.getNode(), footer.getNode());
    this.start();
    new LoginForm();
  }

  private start() {
    this.loadLocalStorage();
  }

  private loadLocalStorage() {
    const data = this.localstorage.load();
    const state = this.state.getState();
    this.state.setState({
      ...state,
      ...data,
    });
  }
}
