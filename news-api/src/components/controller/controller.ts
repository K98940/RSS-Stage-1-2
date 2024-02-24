import { ResponseSources, ResponseNews, Endpoint } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data?: ResponseSources) => void): void {
    super.getResp(
      {
        endpoint: Endpoint.sources,
      },
      callback
    );
  }

  getNews(e: Event, callback: (data?: ResponseNews) => void): void {
    const id = e.currentTarget as HTMLInputElement;
    super.getResp(
      {
        endpoint: Endpoint.everything,
        options: {
          sources: id.value,
        },
      },
      callback
    );
  }
}

export default AppController;
