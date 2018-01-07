import { css } from 'glamor';

/*
  COORDINATES

  Use in combo with the position module.
*/
const rules = {
  top0:    css({ top:    0 }),
  right0:  css({ right:  0 }),
  bottom0: css({ bottom: 0 }),
  left0:   css({ left:   0 }),

  abscenter: css({
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }),
  topcenter: css({
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  leftcenter: css({
    left: '50%',
    transform: 'translateX(-50%)',
  }),
};

export default rules;

