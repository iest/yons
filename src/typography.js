import { css, media } from 'glamor';
import { rem, ns, m } from './_util';

/*
  TYPOGRAPHY
 */

const sizes = {
  s1: 3,
  s2: 2.375,
  s3: 1.5,
  s4: 1.25,
  s5: 1,
  s6: 0.875,
  s7: 0.75,
};

const fontSizes = {
  f1: css({ fontSize: rem(sizes.s1) }),
  f2: css({ fontSize: rem(sizes.s2) }),
  f3: css({ fontSize: rem(sizes.s3) }),
  f4: css({ fontSize: rem(sizes.s4) }),
  f5: css({ fontSize: rem(sizes.s5) }),
  f6: css({ fontSize: rem(sizes.s6) }),
  f7: css({ fontSize: rem(sizes.s7) }),
};

const notSmalls = {
  f1_ns: media(ns, { fontSize: rem(sizes.s1) }),
  f2_ns: media(ns, { fontSize: rem(sizes.s2) }),
  f3_ns: media(ns, { fontSize: rem(sizes.s3) }),
  f4_ns: media(ns, { fontSize: rem(sizes.s4) }),
  f5_ns: media(ns, { fontSize: rem(sizes.s5) }),
  f6_ns: media(ns, { fontSize: rem(sizes.s6) }),
  f7_ns: media(ns, { fontSize: rem(sizes.s7) }),
};

const mediums = {
  f1_m: media(m, { fontSize: rem(sizes.s1) }),
  f2_m: media(m, { fontSize: rem(sizes.s2) }),
  f3_m: media(m, { fontSize: rem(sizes.s3) }),
  f4_m: media(m, { fontSize: rem(sizes.s4) }),
  f5_m: media(m, { fontSize: rem(sizes.s5) }),
  f6_m: media(m, { fontSize: rem(sizes.s6) }),
  f7_m: media(m, { fontSize: rem(sizes.s7) }),
};

// This should be somewhere else maybe
const truncate = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const rules = {
  ...fontSizes,
  ...notSmalls,
  ...mediums,
  truncate,
};

export default rules;
