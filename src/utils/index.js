export const mod = (x, n) => ((x % n) + n) % n;

const keyCodesToKey = {
  13: 'Enter',
  27: 'Escape',
  32: ' ',
  38: 'ArrowUp',
  40: 'ArrowDown',
};

const isKey = key => (event) => {
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
