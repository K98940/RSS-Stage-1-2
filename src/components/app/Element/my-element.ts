import { Callback, HTMLAttributes, Html } from './../../../types/types';

export type MyElementProps = {
  tag?: keyof HTMLElementTagNameMap;
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback | null;
};

export class MyElement {
  // protected children: MyElement[];

  protected node: Html;

  constructor(prop: MyElementProps) {
    // this.children = [];
    this.node = document.createElement(prop.tag || 'div');
    if (prop.classNames) this.setClasses(prop.classNames);
    if (prop.attributes) this.setAttributes(prop.attributes);
    if (prop.textContent) this.setTextContent(prop.textContent);
    if (prop.callback) this.setCallback(prop.callback);
  }

  public getNode(): Html {
    return this.node;
  }

  // public getChildren(): MyElement[] {
  //   return this.children;
  // }

  public appendNodes(...elements: Html[] | MyElement[]) {
    elements.forEach((element) => {
      if (element instanceof MyElement) {
        this.node.append(element.getNode());
        // this.children.push(element);
      } else this.node.append(element);
    });
  }

  public preppendNodes(...elements: Html[] | MyElement[]) {
    elements.forEach((element) => {
      if (element instanceof MyElement) {
        this.node.prepend(element.getNode());
      } else this.node.prepend(element);
    });
  }

  public setClasses(classes: string[]) {
    classes.forEach((className) => {
      this.node.classList.add(className);
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

  protected setCallback(calback: Callback) {
    const event = this.constructor.name === 'Input' ? 'keyup' : 'click';
    if (typeof calback === 'function') {
      this.getNode().addEventListener(event, calback);
    }
  }

  update() {}
}
