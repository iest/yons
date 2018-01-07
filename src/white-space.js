import { css, media } from 'glamor';
import { ns } from './_util';

/*
  WHITE SPACE
*/

export const rules = {
  nowrap: css({ whiteSpace: 'nowrap' }),
  preline: css({ whiteSpace: 'pre-line' }),

  preline_ns: media(ns, { whiteSpace: 'pre-line' }),
};

export default rules;
