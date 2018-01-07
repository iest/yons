import { css } from 'glamor';

/*
  FONT-FAMILY
*/

const rules = {
  system: css({
    fontFamily: `'-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', 'sans-serif'`,
  }),
  helvetica: css({
    fontFamily: `'Helvetica', 'Helvetica Neue', 'Arial', 'sans-serif'`,
  }),
  monospace: css({
    fontFamily: `'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'`,
  }),
};

export default rules;
