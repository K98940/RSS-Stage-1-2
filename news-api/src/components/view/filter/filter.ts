import { cteateHTMLElement } from '../../../utils/dom';
import { TypeFilter } from '../../../types/types';
import './filter.css';

export class Filter implements TypeFilter {
  draw(data: string[]): void {
    const fieldset = cteateHTMLElement({ class: 'filter-container' });
    const select = cteateHTMLElement({ tag: 'select', class: 'select lang__select' });
    select.append(
      cteateHTMLElement({
        tag: 'option',
        text: 'language',
        class: 'lang__option',
        attributes: [
          ['disabled', ''],
          ['selected', ''],
        ],
      })
    );
    select.append(
      cteateHTMLElement({
        tag: 'option',
        text: 'all',
        class: 'lang__option',
        attributes: [['value', 'all']],
      })
    );

    data.forEach((lang) => {
      const option = cteateHTMLElement({
        tag: 'option',
        text: lang,
        class: 'lang__option',
        attributes: [['value', lang]],
      });
      select.append(option);
    });

    fieldset.append(select);
    document.querySelector('.sources')?.append(fieldset);
  }
}
