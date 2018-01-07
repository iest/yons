import { css } from 'glamor';

/*
  USER SELECT
*/

export const rules = {
  noSelect: css({
    userSelect: 'none',
    ' *': { userSelect: 'none' },
  }),
};
export default rules;
