import { css, media } from 'glamor';
import { ns, m } from './_util';

/* Display */
const rules = {
  dn: css({  display: 'none' }),
  di: css({  display: 'inline' }),
  dib: css({ display: 'inline-block' }),
  db: css({  display: 'block' }),
  dt: css({  display: 'table' }),
  dtc: css({ display: 'table-cell' }),
  df: css({  display: 'flex' }),
  dif: css({ display: 'inline-flex' }),

  dn_ns: media(ns, {  display: 'none' }),
  di_ns: media(ns, {  display: 'inline' }),
  dib_ns: media(ns, { display: 'inline-block' }),
  db_ns: media(ns, {  display: 'block' }),
  dt_ns: media(ns, {  display: 'table' }),
  dtc_ns: media(ns, { display: 'table-cell' }),
  df_ns: media(ns, {  display: 'flex' }),
  dif_ns: media(ns, { display: 'inline-flex' }),

  dn_m: media(m, {  display: 'none' }),
  di_m: media(m, {  display: 'inline' }),
  dib_m: media(m, { display: 'inline-block' }),
  db_m: media(m, {  display: 'block' }),
  dt_m: media(m, {  display: 'table' }),
  dtc_m: media(m, { display: 'table-cell' }),
  df_m: media(m, {  display: 'flex' }),
  dif_m: media(m, { display: 'inline-flex' }),
};

export default rules;

