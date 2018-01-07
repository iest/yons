import { css } from 'glamor';

/*
  WORD BREAK
*/

export const rules = {
  word_normal: css({ wordBreak: 'normal' }),
  word_wrap: css({   wordBreak: 'break-all' }),
  word_nowrap: css({ wordBreak: 'keep-all' }),
};

export default rules;
