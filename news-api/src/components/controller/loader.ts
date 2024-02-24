import { Endpoint, SourceOptions, Param, TypeLoader } from './../../types/types';
class Loader implements TypeLoader {
  baseLink: string;
  options: object;

  constructor(baseLink: string, options: object) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: Param,
    callback: () => void = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl({ endpoint, options = {} }: Param): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof SourceOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: Endpoint, callback: (data: Response) => void, options: SourceOptions): void {
    fetch(this.makeUrl({ options, endpoint }), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: Response) => callback(data))
      .catch((err: ErrorEvent) => console.error(err));
  }
}

export default Loader;
