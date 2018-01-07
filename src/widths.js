import { css, media } from 'glamor';
import { m, ns } from './_util';

/*
  WIDTHS

  _ns - not small
  _m - medium
  _l - large
*/

const w1 = '1rem';
const w2 = '2rem';
const w3 = '4rem';
const w4 = '8rem';
const w5 = '16rem';

export const rules = {
  wa: css({  width: 'auto' }),
  w100: css({ width: '100%' }),

  w1: css({ width: w1 }),
  w2: css({ width: w2 }),
  w3: css({ width: w3 }),
  w4: css({ width: w4 }),
  w5: css({ width: w5 }),

  mw1: css({ maxWidth: '20em' }),
  mw2: css({ maxWidth: '40em' }),
  mw3: css({ maxWidth: '60em' }),
  mw4: css({ maxWidth: '80em' }),
  mw100: css({ maxWidth: '100%' }),

  w1_min: css( { minWidth: w1 }),
  w2_min: css( { minWidth: w2 }),
  w3_min: css( { minWidth: w3 }),
  w4_min: css( { minWidth: w4 }),
  w5_min: css( { minWidth: w5 }),

  w1_max: css( { maxWidth: w1 }),
  w2_max: css( { maxWidth: w2 }),
  w3_max: css( { maxWidth: w3 }),
  w4_max: css( { maxWidth: w4 }),
  w5_max: css( { maxWidth: w5 }),

  w25v: css({  width:  '25vw' }),
  w50v: css({  width:  '50vw' }),
  w75v: css({  width:  '75vw' }),
  w100v: css({ width:  '100vw' }),

  mw2_m: media(m, { maxWidth: '40em' }),
  mw3_m: media(m, { maxWidth: '60em' }),
  mw4_m: media(m, { maxWidth: '80em' }),

  w5_max_ns: media(ns, { maxWidth: w5 }),
};

export default rules;
