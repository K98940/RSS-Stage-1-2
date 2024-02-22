type SourceType = {
  id: string;
  name: string;
};

export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceType;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ISources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface INews {
  articles: Articles[];
  status: string;
  totalResults: number;
}

export function isDocumentFragment(node: Node): node is DocumentFragment {
  if (!(node instanceof DocumentFragment)) {
    console.warn('node instance of ', node.constructor.name);
    throw Error(node + 'is not instanceof DocumentFragment');
  }
  return node instanceof DocumentFragment;
}

export function getHTMLElement(node: Node, query: string): HTMLElement {
  if (!(node instanceof DocumentFragment)) {
    console.warn('node instance of ', node.constructor.name);
    throw Error(node + 'is not instanceof DocumentFragment');
  }
  const elem: HTMLElement | null = node.querySelector(query);
  if (!elem) throw Error(`${query} not found`);
  return elem;
}
