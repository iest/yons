import { css } from 'glamor';

/*
  OVERFLOW
*/
const rules = {
  oh: css({ overflow: 'hidden' }),
  ov: css({ overflow: 'visible' }),
  oa: css({
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  }),
};

export default rules;
