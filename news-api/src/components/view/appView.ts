import News from './news/news';
import Sources from './sources/sources';
import { ResponseNews, ResponseSources, TypeAppView } from '../../types/types';
import { Filter } from './filter/filter';

export class AppView implements TypeAppView {
  private news: News;
  private sources: Sources;
  private filter: Filter;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.filter = new Filter();
  }

  drawNews(data: ResponseNews): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ResponseSources): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }

  drawFilter(data: ResponseSources): void {
    const values = data.sources.map((source) => source.language);
    const langs = Array.from(new Set(values));
    this.filter.draw(langs);
  }
}

export default AppView;
