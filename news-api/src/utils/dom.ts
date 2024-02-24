import { NewHTMLElement } from './../types/types';
export function getHTMLElement(node: Node, query: string): HTMLElement {
  // if (!(node instanceof Document)) {
  if (!(node instanceof DocumentFragment || node instanceof Document)) {
    console.warn('node instance of ', node.constructor.name);
    throw Error(node + 'is not instanceof DocumentFragment');
  }
  const elem: HTMLElement | null = node.querySelector(query);
  if (!elem) throw Error(`${query} not found`);
  return elem;
}

export function cteateHTMLElement(options: NewHTMLElement): HTMLElement {
  options.tag ??= 'div';
  options.class ??= '';
  options.text ??= '';
  options.attributes ??= [];

  const element = document.createElement(options.tag);
  options.class && (element.className = options.class);
  options.text && (element.textContent = options.text);
  options.attributes.forEach((attr) => element.setAttribute(attr[0], attr[1]));
  return element;
}
