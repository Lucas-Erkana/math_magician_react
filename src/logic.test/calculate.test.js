import calculate from '../logic/calculate';

const object = {
  total: null, next: null, operation: null,
};

describe('testing all buttons', () => {
  test('clearing all button data reset to null', () => {
    expect(calculate(object, 'AC')).toEqual(object);
  });
  test('zero button return an empty object', () => {
    const obj = { ...object, next: '0' };
    expect(
      calculate(obj, '0'),
    ).toEqual({});
  });
  test('testing if there is an operation, to update next', () => {
    const obj = { ...object, next: '3', operation: '+' };
    expect(calculate(obj, '9')).toEqual({ ...obj, next: `${obj.next}9` });
  });
  test('Test if there is no operation, update next and clear the value', () => {
    const obj = { ...object };
    expect(calculate(obj, '2')).toEqual({ next: '2', total: null });
  });
  test('Test if the button name is .', () => {
    const obj = { ...object, next: '0.367' };
    expect(calculate(obj, '.')).toEqual({ ...obj });
  });
  test('Test if  operation is =', () => {
    const obj = {
      ...object, next: '88', total: '8', operation: '-',
    };
    expect(calculate(obj, '=')).toEqual({
      ...obj, total: '-80', next: null, operation: null,
    });
  });
  test('Test if one of obj.next or obj.operation are missing, nothing to do', () => {
    const obj = {
      ...object, next: '88', total: '8', operation: null,
    };
    expect(calculate(obj, '=')).toEqual({});
  });
  test("Test User pressed an operation after pressing '='", () => {
    const obj = { ...object, total: '50' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
});

describe('Test if pressed an operation button there is an existing operation', () => {
  test('if obj.total and obj.next is false', () => {
    const obj = { ...object, total: '50', operation: '-' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
  test('if obj.total and obj.next is false', () => {
    const obj = { ...object, total: '0', operation: '-' };
    expect(calculate(obj, 'x')).toEqual({ ...obj, total: '0', operation: 'x' });
  });

  test('Testing if obj.total is false', () => {
    const obj = { ...object, total: '0', operation: '+' };
    expect(calculate(obj, '+')).toEqual({ ...obj });
  });
  test("The user hasn't typed a number yet", () => {
    const obj = { ...object };
    expect(calculate(obj, '+')).toEqual({ operation: '+' });
  });
});
