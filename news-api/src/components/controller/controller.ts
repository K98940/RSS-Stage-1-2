import { ResponseSources, ResponseNews, Endpoint } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data?: ResponseSources) => void) {
    super.getResp(
      {
        endpoint: Endpoint.sources,
      },
      callback
    );
  }

  getNews(e: Event, callback: (data?: ResponseNews) => void) {
    // let target = e.target as Element;
    // const newsContainer = e.currentTarget as Element;

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

    // while (target !== newsContainer) {
    //   if (target?.classList.contains('source__item')) {
    //     const sourceId = target.getAttribute('data-source-id');
    //     if (newsContainer.getAttribute('data-source') !== sourceId) {
    //       if (!sourceId) break;
    //       newsContainer.setAttribute('data-source', sourceId);
    //       super.getResp(
    //         {
    //           endpoint: 'everything',
    //           options: {
    //             sources: sourceId,
    //           },
    //         },
    //         callback
    //       );
    //     }
    //     return;
    //   }
    //   target = target.parentNode as Element;
    // }
  }
}

export default AppController;
