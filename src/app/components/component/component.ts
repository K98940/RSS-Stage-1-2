import { Callback, HTML, HTMLAttributes } from './../../../types/types';

export type Props = {
  tag?: keyof HTMLElementTagNameMap;
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback<unknown> | null;
};

export class Component {
  protected kids: Component[];

  protected node: HTML;

  constructor(prop: Props) {
    this.kids = [];
    this.node = document.createElement(prop.tag || 'div');
    if (prop.classNames) this.setClasses(prop.classNames);
    if (prop.attributes) this.setAttributes(prop.attributes);
    if (prop.textContent) this.setTextContent(prop.textContent);
    if (prop.callback) this.setCallback(prop.callback);
  }

  public render(context: HTML): void {
    context.innerHTML = '';
    context.append(this.node);
  }

  public getNode(): HTML {
    return this.node;
  }

  public getChildren(): Component[] {
    return this.kids;
  }

  public appendNodes(...elements: HTML[] | Component[]) {
    elements.forEach((element) => {
      if (element instanceof Component) {
        this.node.append(element.getNode());
        this.kids.push(element);
      } else this.node.append(element);
    });
  }

  public preppendNodes(...elements: HTML[] | Component[]) {
    elements.forEach((element) => {
      if (element instanceof Component) {
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

  public getTextContent(): string | null {
    return this.node.textContent;
  }

  public setAttributes(attributes: HTMLAttributes[]) {
    attributes.forEach((attribute) => {
      const [attr, value] = attribute;
      this.getNode().setAttribute(attr, value);
    });
  }

  public setCallback(calback: Callback<Event>, eventtype?: string) {
    const event = this.constructor.name === 'Input' ? 'keyup' : 'click';
    if (typeof calback === 'function') {
      this.getNode().addEventListener(eventtype || event, calback);
    }
  }

  public value(value?: string) {
    if (!(this.node instanceof HTMLInputElement)) {
      console.warn(this.node, ' is not instance of HTMLInputElement!');
      return;
    }
    if (value !== undefined) {
      this.node.value = value;
    } else return this.node.value;
  }

  // public remove(): void {
  //   this.node.remove();
  // }
}
