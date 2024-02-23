export function isDocumentFragment(node: Node): node is DocumentFragment {
  if (!(node instanceof DocumentFragment)) {
    console.warn('node instance of ', node.constructor.name);
    throw Error(node + 'is not instanceof DocumentFragment');
  }
  return node instanceof DocumentFragment;
}
