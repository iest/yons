import { css, media } from 'glamor';
import { ns, m } from './_util';

/*
  POSITION
*/

export const rules = {
  pr: css({ position: 'relative' }),
  pa: css({ position: 'absolute' }),
  pf: css({ position: 'fixed' }),
  ps: css({ position: 'static' }),

  pr_ns: media(ns, { position: 'relative' }),
  pa_ns: media(ns, { position: 'absolute' }),
  pf_ns: media(ns, { position: 'fixed' }),
  ps_ns: media(ns, { position: 'static' }),

  pr_m: media(m, { position: 'relative' }),
  pa_m: media(m, { position: 'absolute' }),
  pf_m: media(m, { position: 'fixed' }),
  ps_m: media(m, { position: 'static' }),
};

export default rules;
