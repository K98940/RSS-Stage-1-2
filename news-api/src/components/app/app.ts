import { TypeApp } from '../../types/types';
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
    // const sources = document.querySelector('.sources');
    // sources &&
    //   sources.addEventListener('click', (e) =>
    //     this.controller.getNews(e, (data) => {
    //       data && this.view.drawNews(data);
    //     })
    //   );

    this.controller.getSources((data) => {
      if (data) {
        this.view.drawSources(data);
        const select = document.querySelector('.sources__select');
        select &&
          select.addEventListener('change', (e) =>
            this.controller.getNews(e, (data) => {
              data && this.view.drawNews(data);
            })
          );
      }
    });
  }
}

export default App;
