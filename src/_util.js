import b from './breakpoints';

export const rem = (n) => `${n}rem`;
export const neg = (n) => `-${n}`;
export const ns = `screen and (min-width: ${b.twoCol})`;
export const m = `screen and (min-width: ${b.threeCol})`;
export const s = `screen and (max-width: ${b.twoCol})`;
