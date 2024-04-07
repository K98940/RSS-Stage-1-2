import { compose, isNotEmpty, isNotEmptyAfterTrim, isToLong20, isToShort3 } from '../validation-rules';

const testGood = {
  subject: 'test string',
  validate: true,
  errors: [],
};

const testEmpty = {
  subject: '',
  validate: true,
  errors: [],
};

const testSpaces = {
  subject: '                         ',
  validate: true,
  errors: [],
};

const testShort = {
  subject: 'te',
  validate: true,
  errors: [],
};

const testLong = {
  subject: 'test test test test test test test test test test test test test test ',
  validate: true,
  errors: [],
};

describe('Validation rules', () => {
  it('isNotEmpty - validate good string', () => {
    const result = isNotEmpty(testGood);
    expect(result.validate).toBe(true);
  });
  it('isNotEmpty - validate empty string', () => {
    const result = isNotEmpty(testEmpty);
    expect(result.validate).toBe(false);
  });
  it('isNotEmptyAfterTrim - validate good string', () => {
    const result = isNotEmptyAfterTrim(testGood);
    expect(result.validate).toBe(true);
  });
  it('isNotEmptyAfterTrim - validate empty string', () => {
    const result = isNotEmptyAfterTrim(testSpaces);
    expect(result.validate).toBe(false);
  });
  it('isToShort - validate good string', () => {
    const result = isToShort3(testGood);
    expect(result.validate).toBe(true);
  });
  it('isToShort -validate too short string', () => {
    const result = isToShort3(testShort);
    expect(result.validate).toBe(false);
  });
  it('isToLong - validate too long string', () => {
    const result = isToLong20(testLong);
    expect(result.validate).toBe(false);
  });
  it('isToLong - validate good string', () => {
    const result = isToLong20(testGood);
    expect(result.validate).toBe(true);
  });
});

describe('compose rules', () => {
  const cValidate = compose(isNotEmpty, isToLong20, isToShort3, isNotEmptyAfterTrim);

  it('compose - validate good string', () => {
    const result = cValidate(testGood);
    expect(result.validate).toBe(true);
  });
  it('compose - validate empty string', () => {
    const result = cValidate(testEmpty);
    expect(result.validate).toBe(false);
  });
  it('compose - empty string contain error "should not be empty"', () => {
    const result = cValidate(testEmpty);
    expect(result.errors.includes('should not be empty')).toBe(true);
  });
  it('compose - empty string contain error "must be longer than 2 characters"', () => {
    const result = cValidate(testEmpty);
    expect(result.errors.includes('must be longer than 2 characters')).toBe(true);
  });
});
