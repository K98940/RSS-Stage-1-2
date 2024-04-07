import { Validation } from '../types/types';

interface Rule {
  (target: Validation): Validation;
}

export const isNotEmpty: Rule = (target) => {
  const result = { ...target };
  if (result.subject.length === 0) {
    result.errors.push('should not be empty');
    result.validate = false;
    return result;
  }
  return result;
};
// BUG trim пробелы
export const isToShort3: Rule = (target) => {
  const result = { ...target };
  if (result.subject.length < 3) {
    result.errors.push('must be longer than 2 characters');
    result.validate = false;
    return result;
  }
  return result;
};

export const isToLong20: Rule = (target) => {
  const result = { ...target };
  if (result.subject.length > 20) {
    result.errors.push('must be less than 20 characters long');
    result.validate = false;
    return result;
  }
  return result;
};

export const isNotEmptyAfterTrim: Rule = (target) => {
  const result = { ...target };
  if (result.subject.trim().length === 0) {
    result.errors.push('contain only spaces');
    result.validate = false;
    return result;
  }
  return result;
};

export function compose(...fns: Rule[]) {
  return (arg: Validation) => fns.reduceRight((acc, fn) => fn(acc), arg);
}
