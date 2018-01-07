import { css } from 'glamor';

/*
   BORDER RADIUS
*/

const rules = {
  br0: css({ borderRadius:    '0px' }),
  br1: css({ borderRadius:    '2px' }),
  br2: css({ borderRadius:    '4px' }),
  br3: css({ borderRadius:    '6px' }),
  br4: css({ borderRadius:    '8px' }),
  brPill: css({ borderRadius: '9999px' }),

  br_t: css({
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  }),
  br_b: css({
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  }),
  br_r: css({
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  }),
  br_l: css({
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  }),
};

export default rules;
