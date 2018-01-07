import { css, media } from 'glamor';
import { ns } from './_util';

/*
  TEXT ALIGN
*/

const rules = {
  alignc: css({ textAlign: 'center' }),
  alignl: css({ textAlign: 'left' }),
  alignr: css({ textAlign: 'right' }),

  alignc_ns: media(ns, { textAlign: 'center' }),
  alignl_ns: media(ns, { textAlign: 'left' }),
  alignr_ns: media(ns, { textAlign: 'right' }),
};

export default rules;
