import { TypeSources } from './../../../types/types';
import './sources.css';
import { Source } from '../../../types/types';
// import { isDocumentFragment } from '../../../utils/assertions';
// import { getHTMLElement, cteateHTMLElement } from '../../../utils/dom';
import { cteateHTMLElement } from '../../../utils/dom';

class Sources implements TypeSources {
  draw(data: Source[]): void {
    // const fragment = document.createDocumentFragment();
    // const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    // if (!sourceItemTemp) {
    //   console.error('error #sourceItemTemp');
    //   return;
    // }

    const maxLength = 35;
    const container = cteateHTMLElement({ class: 'sources-container' });
    const select = cteateHTMLElement({ tag: 'select', class: 'sources__select' });
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
      // const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
      // if (!isDocumentFragment(sourceClone)) throw Error();
      // getHTMLElement(sourceClone, '.source__item-name').textContent = item.name;
      // getHTMLElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);
      // fragment.append(sourceClone);

      const text = item.name.length > maxLength ? item.name.slice(0, maxLength) : item.name;
      const option = cteateHTMLElement({
        tag: 'option',
        text: text,
        class: 'sources__option',
        attributes: [['value', item.id]],
      });
      select.append(option);
    });

    // document.querySelector('.sources')?.append(fragment);

    container.append(select);
    document.querySelector('.sources')?.append(container);
  }
}

export default Sources;
