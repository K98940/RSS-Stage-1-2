import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
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
