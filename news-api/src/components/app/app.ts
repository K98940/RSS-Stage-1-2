import { Source, TypeApp } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App implements TypeApp {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    this.controller.getSources((data) => {
      if (data) {
        this.view.drawFilter(data);
        const filter = document.querySelector('.lang__select');
        filter && filter.addEventListener('change', (e) => this.handleFilter(e, data.sources));

        this.view.drawSources(data);
        this.updateSource();
      }
    });
  }

  updateSource(): void {
    const select = document.querySelector('.sources__select');
    select &&
      select.addEventListener('change', (e) =>
        this.controller.getNews(e, (data) => {
          data && this.view.drawNews(data);
        })
      );
  }

  handleFilter(e: Event, data: Source[]): void {
    const target = e.currentTarget as HTMLInputElement;
    const value = target.value;
    if (!value) return;
    const sources = value === 'all' ? data : [...data].filter((s) => s.language === value);
    this.view.drawSources({ sources: sources });
    this.updateSource();
  }
}

export default App;
