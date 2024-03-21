import { HTMLAttributes, Callback, Html } from './../../types/types';

export type Props = {
  tag?: keyof HTMLElementTagNameMap;
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback | null;
};

export class BaseComponent {
  protected children: BaseComponent[];

  protected node: Html;

  constructor(prop: Props) {
    this.children = [];
    this.node = document.createElement(prop.tag || 'div');
    if (prop.classNames) this.setClasses(prop.classNames);
    if (prop.attributes) this.setAttributes(prop.attributes);
    if (prop.textContent) this.setTextContent(prop.textContent);
    if (prop.callback) this.setCallback(prop.callback);
  }

  public getNode(): Html {
    return this.node;
  }

  public getChildren(): BaseComponent[] {
    return this.children;
  }

  public appendNodes(...elements: Html[] | BaseComponent[]) {
    elements.forEach((element) => {
      if (element instanceof BaseComponent) {
        this.node.append(element.getNode());
        this.children.push(element);
      } else this.node.append(element);
    });
  }

  public preppendNodes(...elements: Html[] | BaseComponent[]) {
    elements.forEach((element) => {
      if (element instanceof BaseComponent) {
        this.node.prepend(element.getNode());
      } else this.node.prepend(element);
    });
  }

  public setClasses(classes: (string | null)[]) {
    classes.forEach((className) => {
      if (className) this.node.classList.add(className);
    });
  }

  public removeClass(cls: string) {
    this.node.classList.remove(cls);
  }

  public setTextContent(text: string) {
    this.node.textContent = text;
  }

  public setAttributes(attributes: HTMLAttributes[]) {
    attributes.forEach((attribute) => {
      const [attr, value] = attribute;
      this.getNode().setAttribute(attr, value);
    });
  }

  public setCallback(calback: Callback, eventtype?: string) {
    const event = this.constructor.name === 'Input' ? 'keyup' : 'click';
    if (typeof calback === 'function') {
      this.getNode().addEventListener(eventtype || event, calback);
    }
  }

  public value() {
    if (this.node instanceof HTMLInputElement) return this.node.value;
  }

  update(value?: string | number) {}
}
