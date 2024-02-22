import './sources.css';
import { ISources, getHTMLElement, isDocumentFragment } from '../../../types/types';

class Sources {
  draw(data: ISources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    if (!sourceItemTemp) {
      console.error('error #sourceItemTemp');
      return;
    }

    data.forEach((item) => {
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
      if (!isDocumentFragment(sourceClone)) throw Error();
      getHTMLElement(sourceClone, '.source__item-name').textContent = item.name;
      getHTMLElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);
      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
