import { InputProps, Html } from './../../types/types';
import './login.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Input from './input/input';
import Button from '../../components/app/tags/button/button';
import Label from '../../components/app/tags/label/label';
import { State } from '../../components/app/State/state';
import { LocalStorage } from '../../LocalStorage/local-storage';

const ID = {
  firstName: 'first-name-input',
  surname: 'surname-input',
};

const inputs: InputProps[] = [
  {
    id: ID.firstName,
    labelText: 'First Name',
    attributes: [
      ['id', ID.firstName],
      ['placeholder', 'First Name'],
      ['required', ''],
      ['autofocus', ''],
    ],
  },
  {
    id: ID.surname,
    labelText: 'Surname',
    attributes: [
      ['id', ID.surname],
      ['placeholder', 'Surname'],
      ['required', ''],
    ],
  },
];

const propsConstructor: MyElementProps = {
  tag: 'section',
  classNames: ['login'],
  textContent: undefined,
  callback: null,
};

export default class LoginForm extends MyElement {
  inputs: Html[];

  button: Button | null;

  state: State;

  localstorage: LocalStorage;

  constructor() {
    super(propsConstructor);
    this.state = new State();
    this.localstorage = new LocalStorage();
    this.inputs = [];
    this.button = null;
    this.state.subscribe(this);
    this.config();
  }

  private config() {
    this.state.setState({ process: 'login' });
    const form = new MyElement({ tag: 'form', classNames: ['login_form'] });
    const container = new MyElement({ classNames: ['form_container'] });

    inputs.forEach((input) => {
      const label = new Label({
        id: input.id,
        text: input.labelText || '',
        classNames: ['login_label'],
      });
      const field = new Input({
        ...input,
        callback: this.handleInput.bind(this),
      });
      container.appendNodes(label);
      container.appendNodes(field);
      this.inputs.push(field.getNode());
    });

    const button = new Button({
      text: 'Login',
      classNames: ['login__button'],
      callback: this.handleButtonClick.bind(this),
    });
    this.button = button;
    container.appendNodes(button);
    form.appendNodes(container);
    this.appendNodes(form);

    const { firstName, surname } = this.state.getState();
    if (firstName && surname) {
      this.state.setState({ process: 'start' });
      this.localstorage.save(this.state.getState());
      this.hide();
    }
  }

  private handleButtonClick(e: Event): void {
    if (!this.isCorrectForm()) return;

    e.preventDefault();
    this.updateState();
    this.localstorage.save(this.state.getState());
    this.hide();
  }

  private handleInput(e: Event): void {
    const input = e?.target;
    if (input instanceof HTMLInputElement) {
      input.setCustomValidity('');
      if (this.isCorrectForm()) {
        this.button?.setClasses(['login__button_active']);
      } else {
        this.button?.removeClass('login__button_active');
      }
    }
  }

  private isCorrectForm() {
    let isCorrect = true;
    let errorMsg = '';
    const regex = /[a-zA-Z-]/g;

    this.inputs.forEach((input, i) => {
      if (input instanceof HTMLInputElement) {
        const value = input.value.trim();
        if (input.value === '') {
          errorMsg += ' \n◾ The empty string.';
          isCorrect = false;
        }
        if (value !== input.value) {
          errorMsg += '\n◾ There is space either before or after a string.';
          isCorrect = false;
        }
        if (value[0] && value[0] !== value[0].toLocaleUpperCase()) {
          errorMsg += ' \n◾ The first letter must be capitalized.';
          isCorrect = false;
        }
        if (value !== '' && value.length < i + 3) {
          errorMsg += ` \n◾ The length of the string is less than ${i + 3} characters.`;
          isCorrect = false;
        }
        let wrongText = value.replace(regex, '').split('');
        wrongText = wrongText.map((char) =>
          char === ' ' ? '"пробел"' : `"${char}"`,
        );
        if (wrongText.length !== 0) {
          errorMsg += ` \n◾ The string contains illegal characters:\n${wrongText}`;
          isCorrect = false;
        }

        if (!isCorrect) {
          input.setCustomValidity(errorMsg);
        }
      }
    });

    return isCorrect;
  }

  private updateState() {
    if (
      this.inputs[0] instanceof HTMLInputElement &&
      this.inputs[1] instanceof HTMLInputElement
    ) {
      this.state.setState({
        ...this.state.getState(),
        firstName: this.inputs[0].value,
        surname: this.inputs[1].value,
        process: 'start',
      });
      this.localstorage.save(this.state.getState());
    }
  }

  private show() {
    document.body.append(this.getNode());
  }

  private hide() {
    this.inputs.forEach((input) => {
      if (input instanceof HTMLInputElement) {
        input.value = '';
      }
    });

    this.getNode().remove();
  }

  updateValue(): void {
    const { firstName, surname, DOM } = this.state.getState();
    if (firstName && surname) {
      this.hide();
    } else {
      if (DOM?.main) {
        DOM.main.innerHTML = '';
      }
      this.show();
      setTimeout(() => {
        this.inputs[0].focus();
      }, 0);
    }
  }
}
