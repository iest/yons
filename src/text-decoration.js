import { css, hover } from 'glamor';

/*
  TEXT DECORATION
*/

const rules = {
  strike:          css({ textDecoration: 'line-through' }),
  underline:       css({ textDecoration: 'underline' }),
  nunderline:      css({ textDecoration: 'none' }),
  hover_underline: hover({ textDecoration: 'underline' }),
  tdinherit:       css({ textDecoration: 'inherit' }),
};
export default rules;
