import News from './news/news';
import Sources from './sources/sources';
import { ResponseNews, ResponseSources, TypeAppView } from '../../types/types';

export class AppView implements TypeAppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: ResponseNews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ResponseSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
