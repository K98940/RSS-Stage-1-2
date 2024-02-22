import './sources.css';
import { ISources, isDocumentFragment } from '../../../types/types';

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
      if (!isDocumentFragment(sourceClone)) {
        console.error('error sourceClone', sourceClone);
        return;
      }

      const itemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
      itemName && (itemName.textContent = item.name);
      sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
