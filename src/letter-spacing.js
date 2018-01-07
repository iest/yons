import { css } from 'glamor';

/*
  TRACKING
*/
const rules = {
  tracked_loose: css({ letterSpacing: '0.05em' }),
  tracked:       css({ letterSpacing: '0.015em' }),
  tracked_tight: css({ letterSpacing: '-0.005em' }),
};

export default rules;
