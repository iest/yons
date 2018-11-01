import { css, hover } from 'glamor';

import './normalize';

import borderColors from './border-colors';
import borderRadius from './border-radius';
import borderWidths from './border-widths';
import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import coordinates from './coordinates';
import cursor from './cursor';
import display from './display';
import flexbox from './flexbox';
import fontFamily from './font-family';
import fontWeight from './font-weight';
import heights from './heights';
import index from './index';
import letterSpacing from './letter-spacing';
import lineHeight from './line-height';
import lists from './lists';
import normalize from './normalize';
import overflow from './overflow';
import pointerEvents from './pointer-events';
import position from './position';
import quotes from './quotes';
import skin from './skin';
import spacing from './spacing';
import textAlign from './text-align';
import textDecoration from './text-decoration';
import textStyle from './text-style';
import transforms from './transforms';
import typography from './typography';
import userSelect from './user-select';
import verticalAlign from './vertical-align';
import whiteSpace from './white-space';
import widths from './widths';
import wordBreak from './word-break';
import zindex from './zindex';

const yons = {
  ...normalize,
  ...borderColors,
  ...borderRadius,
  ...borderWidths,
  ...borders,
  ...breakpoints,
  ...colors,
  ...coordinates,
  ...cursor,
  ...display,
  ...flexbox,
  ...fontFamily,
  ...fontWeight,
  ...heights,
  ...index,
  ...letterSpacing,
  ...lineHeight,
  ...lists,
  ...overflow,
  ...pointerEvents,
  ...position,
  ...quotes,
  ...skin,
  ...spacing,
  ...textAlign,
  ...textDecoration,
  ...textStyle,
  ...transforms,
  ...typography,
  ...userSelect,
  ...verticalAlign,
  ...whiteSpace,
  ...widths,
  ...wordBreak,
  ...zindex,
};

const toStringArray = (acc, name) => {
  if (Array.isArray(name)) {
    return [...acc, ...name];
  }
  if (typeof name === 'string') {
    if (name.split(' ').length) {
      return [...acc, ...name.split(' ')];
    }

    return [...acc, name];
  }

  throw new Error(
    `yons: Unsupported argument. You passed "${JSON.stringify(name)}"`
  );
};

const toYons = name => {
  if (!name) return;
  if (name && !yons[name]) {
    throw new Error(`yons: No rule exists for "${name}"`);
  }
  return yons[name].toString();
};

const uniq = (set, name, i, arr) => {
  set.add(name);
  if (i === arr.length - 1) {
    return Array.from(set);
  }
  return set;
};

export const defineColor = (key, color) => {
  [
    [`fg_${key}`, css({ color: color })],
    [`hover_fg_${key}`, hover({ color: color })],
    [`bg_${key}`, css({ backgroundColor: color })],
    [`hover_bg_${key}`, hover({ backgroundColor: color })],
    [`b_${key}`, css({ borderColor: color }])
  ].forEach((k, v) => {
    yons[k] = v;
  })
}

// y('mla mra mda', x ? 123, ['123','456', x ? 'y'])
// Support non-defined
export const yon = (...classnames) =>
  classnames
    .reduce(toStringArray, [])
    .map(toYons)
    .reduce(uniq, new Set())
    .join(' ');

