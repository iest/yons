import { css, lastChild, firstChild } from 'glamor';

/*
  BORDERS

  Base:
    b = border

  Modifiers:
    a = all
    t = top
    r = right
    b = bottom
    l = left
    n = none
*/

const rules = {
  ba: css({ borderStyle:       'solid', borderWidth:       '2px' }),
  bt: css({ borderTopStyle:    'solid', borderTopWidth:    '1px' }),
  br: css({ borderRightStyle:  'solid', borderRightWidth:  '1px' }),
  bb: css({ borderBottomStyle: 'solid', borderBottomWidth: '1px' }),
  bl: css({ borderLeftStyle:   'solid', borderLeftWidth:   '1px' }),
  bn: css({ borderStyle:       'none',  borderWidth:       0 }),

  bn_fc: firstChild({ borderStyle: 'none', borderWidth: 0 }),
  bn_lc: lastChild({ borderStyle:  'none', borderWidth: 0 }),
};

export default rules;
