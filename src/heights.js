import { css } from 'glamor';

/*
  HEIGHTS
*/

const rules = {
  h1: css({ height: '1rem' }),
  h2: css({ height: '2rem' }),
  h3: css({ height: '4rem' }),
  h4: css({ height: '8rem' }),
  h5: css({ height: '16rem' }),

  h25: css({  height:  '25%' }),
  h50: css({  height:  '50%' }),
  h75: css({  height:  '75%' }),
  h100: css({ height: '100%' }),

  h100_min: css({ minHeight: '100%' }),
  h100_max: css({ maxHeight: '100%' }),

  h25v: css({  height:  '25vh' }),
  h50v: css({  height:  '50vh' }),
  h75v: css({  height:  '75vh' }),
  h100v: css({ height: '100vh' }),

  h100v_min: css({ minHeight: '100vh' }),
  h100v_max: css({ maxHeight: '100vh' }),

  ha: css({  height: 'auto' }),
  hi: css({  height: 'inherit' }),
};

export default rules;
