import { Actions } from '../../types/types';
import { MyElement } from '../app/Element/my-element';

type SelectProps = {
  id: string;
  name: string;
  text: string;
  options: [string, string][];
};

export class Select extends MyElement {
  constructor(props: SelectProps) {
    super({ tag: 'form' });
    this.config(props);
  }

  config(param: SelectProps) {
    const label = new MyElement({
      tag: 'label',
      textContent: param.text,
      attributes: [['for', param.id]],
    });
    const select = new MyElement({
      tag: 'select',
      classNames: ['select'],
      attributes: [
        ['name', param.name],
        ['id', param.id],
      ],
    });
    select.setCallback((e) => {
      const target = e.target;
      if (!(target instanceof HTMLSelectElement)) return;

      document.dispatchEvent(
        new CustomEvent(Actions.changeLevel, {
          detail: {
            id: param.id,
            value: target.value,
          },
        }),
      );

      document.dispatchEvent(
        new CustomEvent(Actions.lineNotComplete, {
          detail: { id: param.id, value: target.value },
        }),
      );
    }, 'change');
    this.appendNodes(label, select);
    this.updateOptions(param.options);
  }

  public updateValue(value: string | number): void {
    const selector = this.getNode().children[1];
    const val = value.toString();
    if (selector instanceof HTMLSelectElement) selector.value = val;
  }

  public getValue(): string | undefined {
    const selector = this.getNode().children[1];
    if (selector instanceof HTMLSelectElement) return selector.value;
  }

  public updateOptions(options: [string, string][]) {
    const selector = this.getNode().children[1];
    if (!(selector instanceof HTMLSelectElement)) return;
    selector.innerHTML = '';
    options.forEach(([value, text]) => {
      const option = new MyElement({
        tag: 'option',
        textContent: text,
        classNames: ['selectors-options'],
        attributes: [['value', value]],
      });
      selector.appendChild(option.getNode());
    });
  }
}
