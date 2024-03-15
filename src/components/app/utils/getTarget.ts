export const getTarget = (e: DragEvent, className: string): Element | null => {
  const target = e.target;
  if (!(target instanceof Element)) return null;

  if (target.classList.contains(className)) return target;

  const element = target.closest('.field__word');
  if (element) return element;

  const row = target.closest('.field__row');
  return row || null;
};
