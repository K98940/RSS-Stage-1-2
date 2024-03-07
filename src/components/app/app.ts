import './app.css';
import Footer from '../../view/footer/footer';
import Header from '../../view/header/header';
import Main from '../../view/main/main';
import LoginForm from '../../view/login/login';

export default class App {
  constructor() {
    const login = new LoginForm();
    const header = new Header();
    const main = new Main();
    const footer = new Footer();
    document.body.append(
      login.getNode(),
      header.getNode(),
      main.getNode(),
      footer.getNode(),
    );
  }
}
