export type TypeAppView = {
  drawNews(data: ResponseNews): void;
  drawSources(data: ResponseSources): void;
};

export type TypeSources = {
  draw(data: Source[]): void;
};

export type TypeLoader = {
  getResp({ endpoint, options }: Param, callback: () => void): void;
  errorHandler(res: Response): Response;
  makeUrl({ endpoint, options }: Param): string;
  load(method: string, endpoint: Endpoint, callback: (data: Response) => void, options: SourceOptions): void;
};

export type TypeApp = {
  start(): void;
};

export type TypeNews = {
  draw(data: Article[]): void;
};

export type NewHTMLElement = {
  tag?: string;
  class?: string;
  text?: string;
  attributes?: Attributes[];
};

export interface ResponseSources {
  sources: Source[];
  status: string;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourcePreview;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Source {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ResponseNews {
  articles: Article[];
  status: string;
  totalResults: number;
}

export enum Endpoint {
  sources = 'sources',
  everything = 'everything',
}

// export type getRespOption = {
//   endpoint: Endpoint;
// };

export type Param = {
  endpoint: Endpoint;
  options?: SourceOptions;
};

export type SourceOptions = {
  apiKey?: string;
  sources?: string;
};

type Attributes = [name: string, value: string];
type SourcePreview = Pick<Source, 'id' | 'name'>;
export type Templates = HTMLTemplateElement | null;
export type Div = HTMLDivElement | null;
