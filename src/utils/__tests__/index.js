/* eslint-disable indent */
import { mod, isKey } from '..';

describe('mod', () => {
  it.each`
    a     | b    | result
    ${5}  | ${2} | ${1}
    ${4}  | ${2} | ${0}
    ${-4} | ${2} | ${0}
    ${-5} | ${2} | ${1}
  `('$a modulo $b should return $result', ({ a, b, result }) => {
    expect(mod(a, b)).toEqual(result);
  });
});

describe('isKey', () => {
  it('should properly true if the the passed key matches the pressed one', () => {
    expect(isKey('ArrowUp')({ key: 'ArrowUp' })).toEqual(true);
    expect(isKey('Enter')({ keyCode: 13 })).toEqual(true);
  });

  it('should properly true if the the passed key matches the pressed one', () => {
    expect(isKey('ArrowLeft')({ key: 'ArrowRight' })).toEqual(false);
    expect(isKey('Escape')({ keyCode: 55 })).toEqual(false);
  });
});
