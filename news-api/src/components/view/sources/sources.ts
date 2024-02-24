import { TypeSources, Source } from './../../../types/types';
import './sources.css';
import { cteateHTMLElement } from '../../../utils/dom';

class Sources implements TypeSources {
  draw(data: Source[]): void {
    const maxLength = 35;
    const select = cteateHTMLElement({ tag: 'select', class: 'select sources__select' });
    const option = cteateHTMLElement({
      tag: 'option',
      text: 'select source',
      class: 'sources__option',
      attributes: [
        ['disabled', ''],
        ['selected', ''],
      ],
    });
    select.append(option);

    data.forEach((item) => {
      const text = item.name.length > maxLength ? item.name.slice(0, maxLength) : item.name;
      const option = cteateHTMLElement({
        tag: 'option',
        text: text,
        class: 'sources__option',
        attributes: [['value', item.id]],
      });
      select.append(option);
    });

    let container: HTMLElement | null = document.querySelector('.sources-container');
    if (!container) {
      container = cteateHTMLElement({ class: 'sources-container' });
      container.append(select);
      document.querySelector('.sources')?.append(container);
    } else {
      container.innerHTML = '';
      container.append(select);
    }
  }
}

export default Sources;
