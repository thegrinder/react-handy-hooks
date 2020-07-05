export const mod = (x, n) => ((x % n) + n) % n;

const keyCodesToKey = {
  13: 'Enter',
  27: 'Escape',
  32: ' ',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
};

export const isKey = (key) => (event) => {
  const eventKey = event.key || keyCodesToKey[event.keyCode];
  return key === eventKey;
};

export const isArrowDown = isKey('ArrowDown');
export const isArrowUp = isKey('ArrowUp');
export const isArrowLeft = isKey('ArrowLeft');
export const isArrowRight = isKey('ArrowRight');
export const isEnter = isKey('Enter');
export const isEscape = isKey('Escape');
export const isSpace = isKey(' ');

export const filterOut = (obj, prop) =>
  Object.keys(obj)
    .filter((key) => key !== prop)
    .reduce(
      (acc, next) => ({
        ...acc,
        [next]: obj[next],
      }),
      {}
    );
