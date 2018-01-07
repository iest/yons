import { css, media } from 'glamor';
import { rem, neg, ns, m } from './_util';

/*
  SPACING

  Base:
    p = padding
    m = margin

  Modifers:
    a = all
    t = top
    l = left
    r = right
    b = bottom

    0 = 0
    xs = extra small
    s = small
    m = medium
    l = large
    xl = extra large
    a = auto

*/

const s = {
  xsmall: rem(0.25),
  small:  rem(0.5),
  msmall: rem(0.75),
  medium: rem(1),
  base:   rem(1.125),
  large:  rem(1.5),
  larger: rem(2),
};

const padding = {
  pt0: css({ paddingTop:  0 }),
  ptxs: css({ paddingTop: s.xsmall }),
  pts: css({ paddingTop:  s.small }),
  ptms: css({ paddingTop: s.msmall }),
  ptm: css({ paddingTop:  s.medium }),
  ptl: css({ paddingTop:  s.large }),
  ptxl: css({ paddingTop: s.larger }),

  pl0: css({ paddingLeft:  0 }),
  plxs: css({ paddingLeft: s.xsmall }),
  pls: css({ paddingLeft:  s.small }),
  plms: css({ paddingLeft: s.msmall }),
  plm: css({ paddingLeft:  s.medium }),
  pll: css({ paddingLeft:  s.large }),
  plxl: css({ paddingLeft: s.larger }),

  pb0: css({ paddingBottom:  0 }),
  pbxs: css({ paddingBottom: s.xsmall }),
  pbs: css({ paddingBottom:  s.small }),
  pbms: css({ paddingBottom: s.msmall }),
  pbm: css({ paddingBottom:  s.medium }),
  pbl: css({ paddingBottom:  s.large }),
  pbxl: css({ paddingBottom: s.larger }),

  pr0: css({ paddingRight:  0 }),
  prxs: css({ paddingRight: s.xsmall }),
  prs: css({ paddingRight:  s.small }),
  prms: css({ paddingRight: s.msmall }),
  prm: css({ paddingRight:  s.medium }),
  prl: css({ paddingRight:  s.large }),
  prxl: css({ paddingRight: s.larger }),

  p0 : css({ padding:  0 }),
  pa0 : css({ padding: 0 }),
  paxs: css({ padding: s.xsmall }),
  pas: css({ padding:  s.small }),
  pams: css({ padding: s.msmall }),
  pam: css({ padding:  s.medium }),
  pal: css({ padding:  s.large }),
  paxl: css({ padding: s.larger }),

  /* Padding for Aspect Ratio */
  pb_1by1: css({ paddingBottom:  '100%' }),
  pb_2by3: css({ paddingBottom:  '66.6%' }),
  pb_3by4: css({ paddingBottom:  '75%' }),
  pb_2by1: css({ paddingBottom:  '50%' }),
  pb_16by9: css({ paddingBottom: '56.25%' }),
};

const margin = {
  mt0: css({ marginTop:  0 }),
  mtxs: css({ marginTop:  s.xsmall }),
  mts: css({ marginTop:  s.small }),
  mtms: css({ marginTop: s.msmall }),
  mtm: css({ marginTop:  s.medium }),
  mtl: css({ marginTop:  s.large }),
  mtxl: css({ marginTop: s.larger }),

  ml0: css({ marginLeft:   0 }),
  mlxs: css({ marginLeft:  s.xsmall }),
  mls: css({ marginLeft:   s.small }),
  mlms: css({ marginLeft:  s.msmall }),
  mlm: css({ marginLeft:   s.medium }),
  mll: css({ marginLeft:   s.large }),
  mlxl: css({ marginLeft:  s.larger }),

  n_mlxs: css({ marginLeft: neg(s.xsmall) }),
  n_mls: css({ marginLeft:  neg(s.small) }),

  mb0: css({ marginBottom:  0 }),
  mbxs: css({ marginBottom: s.xsmall }),
  mbs: css({ marginBottom:  s.small }),
  mbms: css({ marginBottom: s.msmall }),
  mbm: css({ marginBottom:  s.medium }),
  mbl: css({ marginBottom:  s.large }),
  mbxl: css({ marginBottom: s.larger }),

  mr0: css({ marginRight:   0 }),
  mrxs: css({ marginRight:  s.xsmall }),
  mrs: css({ marginRight:   s.small }),
  mrms: css({ marginRight:  s.msmall }),
  mrm: css({ marginRight:   s.medium }),
  mrl: css({ marginRight:   s.large }),
  mrxl: css({ marginRight:  s.larger }),

  m0 : css({ margin:  0 }),
  ma0 : css({ margin: 0 }),
  maxs: css({ margin: s.xsmall }),
  mas: css({ margin:  s.small }),
  mams: css({ margin: s.msmall }),
  mam: css({ margin:  s.medium }),
  mal: css({ margin:  s.large }),
  maxl: css({ margin: s.larger }),

  mra: css({ marginRight:  'auto' }),
  mla: css({ marginLeft:   'auto' }),
  mta: css({ marginTop:    'auto' }),
  mba: css({ marginBottom: 'auto' }),
  maa: css({ margin:       'auto' }),
};

const notSmallPadding = {
  pt0_ns: media(ns, { paddingTop:  0 }),
  ptxs_ns: media(ns, { paddingTop: s.xsmall }),
  pts_ns: media(ns, { paddingTop:  s.small }),
  ptms_ns: media(ns, { paddingTop: s.msmall }),
  ptm_ns: media(ns, { paddingTop:  s.medium }),
  ptl_ns: media(ns, { paddingTop:  s.large }),
  ptxl_ns: media(ns, { paddingTop: s.larger }),

  pl0_ns: media(ns, { paddingLeft:  0 }),
  plxs_ns: media(ns, { paddingLeft: s.xsmall }),
  pls_ns: media(ns, { paddingLeft:  s.small }),
  plms_ns: media(ns, { paddingLeft: s.msmall }),
  plm_ns: media(ns, { paddingLeft:  s.medium }),
  pll_ns: media(ns, { paddingLeft:  s.large }),
  plxl_ns: media(ns, { paddingLeft: s.larger }),

  pb0_ns: media(ns, { paddingBottom:  0 }),
  pbxs_ns: media(ns, { paddingBottom: s.xsmall }),
  pbs_ns: media(ns, { paddingBottom:  s.small }),
  pbms_ns: media(ns, { paddingBottom: s.msmall }),
  pbm_ns: media(ns, { paddingBottom:  s.medium }),
  pbl_ns: media(ns, { paddingBottom:  s.large }),
  pbxl_ns: media(ns, { paddingBottom: s.larger }),

  pr0_ns: media(ns, { paddingRight:  0 }),
  prxs_ns: media(ns, { paddingRight: s.xsmall }),
  prs_ns: media(ns, { paddingRight:  s.small }),
  prms_ns: media(ns, { paddingRight: s.msmall }),
  prm_ns: media(ns, { paddingRight:  s.medium }),
  prl_ns: media(ns, { paddingRight:  s.large }),
  prxl_ns: media(ns, { paddingRight: s.larger }),

  p0_ns: media(ns, { padding:  0 }),
  pa0_ns: media(ns, { padding: 0 }),
  paxs_ns: media(ns, { padding: s.xsmall }),
  pas_ns: media(ns, { padding:  s.small }),
  pams_ns: media(ns, { padding: s.msmall }),
  pam_ns: media(ns, { padding:  s.medium }),
  pal_ns: media(ns, { padding:  s.large }),
  paxl_ns: media(ns, { padding: s.larger }),

  /* Padding for Aspect Ratio */
  pb_1by1_ns: media(ns, { paddingBottom: '100%' }),
  pb_2by3_ns: media(ns, { paddingBottom: '66.6%' }),
  pb_3by4_ns: media(ns, { paddingBottom: '75%' }),
  pb_2by1_ns: media(ns, { paddingBottom: '50%' }),
};

const notSmallMargin = {
  mt0_ns: media(ns, { marginTop:  0 }),
  mtxs_ns: media(ns, { marginTop: s.xsmall }),
  mts_ns: media(ns, { marginTop:  s.small }),
  mtms_ns: media(ns, { marginTop: s.msmall }),
  mtm_ns: media(ns, { marginTop:  s.medium }),
  mtl_ns: media(ns, { marginTop:  s.large }),
  mtxl_ns: media(ns, { marginTop: s.larger }),

  ml0_ns: media(ns, { marginLeft:   0 }),
  mlxs_ns: media(ns, { marginLeft:  s.xsmall }),
  mls_ns: media(ns, { marginLeft:   s.small }),
  mlms_ns: media(ns, { marginLeft:  s.msmall }),
  mlm_ns: media(ns, { marginLeft:   s.medium }),
  mll_ns: media(ns, { marginLeft:   s.large }),
  mlxl_ns: media(ns, { marginLeft:  s.larger }),

  n_mlxs_ns: media(ns, { marginLeft: neg(s.xsmall) }),
  n_mls_ns: media(ns, { marginLeft:  neg(s.small) }),

  mb0_ns: media(ns, { marginBottom:  0 }),
  mbxs_ns: media(ns, { marginBottom: s.xsmall }),
  mbs_ns: media(ns, { marginBottom:  s.small }),
  mbms_ns: media(ns, { marginBottom: s.msmall }),
  mbm_ns: media(ns, { marginBottom:  s.medium }),
  mbl_ns: media(ns, { marginBottom:  s.large }),
  mbxl_ns: media(ns, { marginBottom: s.larger }),

  mr0_ns: media(ns, { marginRight:   0 }),
  mrxs_ns: media(ns, { marginRight:  s.xsmall }),
  mrs_ns: media(ns, { marginRight:   s.small }),
  mrms_ns: media(ns, { marginRight:  s.msmall }),
  mrm_ns: media(ns, { marginRight:   s.medium }),
  mrl_ns: media(ns, { marginRight:   s.large }),
  mrxl_ns: media(ns, { marginRight:  s.larger }),

  m0_ns: media(ns, { margin:  0 }),
  ma0_ns: media(ns, { margin: 0 }),
  maxs_ns: media(ns, { margin: s.xsmall }),
  mas_ns: media(ns, { margin:  s.small }),
  mams_ns: media(ns, { margin: s.msmall }),
  mam_ns: media(ns, { margin:  s.medium }),
  mal_ns: media(ns, { margin:  s.large }),
  maxl_ns: media(ns, { margin: s.larger }),

  mra_ns: media(ns, { marginRight:  'auto' }),
  mla_ns: media(ns, { marginLeft:   'auto' }),
  mta_ns: media(ns, { marginTop:    'auto' }),
  mba_ns: media(ns, { marginBottom: 'auto' }),
  maa_ns: media(ns, { margin:       'auto' }),
};

const mediumPadding = {
  pt0_m: media(m, { paddingTop:  0 }),
  ptxs_m: media(m, { paddingTop: s.xsmall }),
  pts_m: media(m, { paddingTop:  s.small }),
  ptms_m: media(m, { paddingTop: s.msmall }),
  ptm_m: media(m, { paddingTop:  s.medium }),
  ptl_m: media(m, { paddingTop:  s.large }),
  ptxl_m: media(m, { paddingTop: s.larger }),

  pl0_m: media(m, { paddingLeft:  0 }),
  plxs_m: media(m, { paddingLeft: s.xsmall }),
  pls_m: media(m, { paddingLeft:  s.small }),
  plms_m: media(m, { paddingLeft: s.msmall }),
  plm_m: media(m, { paddingLeft:  s.medium }),
  pll_m: media(m, { paddingLeft:  s.large }),
  plxl_m: media(m, { paddingLeft: s.larger }),

  pb0_m: media(m, { paddingBottom:  0 }),
  pbxs_m: media(m, { paddingBottom: s.xsmall }),
  pbs_m: media(m, { paddingBottom:  s.small }),
  pbms_m: media(m, { paddingBottom: s.msmall }),
  pbm_m: media(m, { paddingBottom:  s.medium }),
  pbl_m: media(m, { paddingBottom:  s.large }),
  pbxl_m: media(m, { paddingBottom: s.larger }),

  pr0_m: media(m, { paddingRight:  0 }),
  prxs_m: media(m, { paddingRight: s.xsmall }),
  prs_m: media(m, { paddingRight:  s.small }),
  prms_m: media(m, { paddingRight: s.msmall }),
  prm_m: media(m, { paddingRight:  s.medium }),
  prl_m: media(m, { paddingRight:  s.large }),
  prxl_m: media(m, { paddingRight: s.larger }),

  p0_m: media(m, { padding: 0 }),
  pa0_m: media(m, { padding: 0 }),
  paxs_m: media(m, { padding: s.xsmall }),
  pas_m: media(m, { padding:  s.small }),
  pams_m: media(m, { padding: s.msmall }),
  pam_m: media(m, { padding:  s.medium }),
  pal_m: media(m, { padding:  s.large }),
  paxl_m: media(m, { padding: s.larger }),

  /* Padding for Aspect Ratio */
  pb_1by1_m: media(m, { paddingBottom: '100%' }),
  pb_2by3_m: media(m, { paddingBottom: '66.6%' }),
  pb_3by4_m: media(m, { paddingBottom: '75%' }),
  pb_2by1_m: media(m, { paddingBottom: '50%' }),
};

const mediumMargin = {
  mt0_m: media(m, { marginTop:  0 }),
  mtxs_m: media(m, { marginTop:  s.xsmall }),
  mts_m: media(m, { marginTop:  s.small }),
  mtms_m: media(m, { marginTop: s.msmall }),
  mtm_m: media(m, { marginTop:  s.medium }),
  mtl_m: media(m, { marginTop:  s.large }),
  mtxl_m: media(m, { marginTop: s.larger }),

  ml0_m: media(m, { marginLeft:   0 }),
  mlxs_m: media(m, { marginLeft:  s.xsmall }),
  mls_m: media(m, { marginLeft:   s.small }),
  mlms_m: media(m, { marginLeft:  s.msmall }),
  mlm_m: media(m, { marginLeft:   s.medium }),
  mll_m: media(m, { marginLeft:   s.large }),
  mlxl_m: media(m, { marginLeft:  s.larger }),

  n_mlxs_m: media(m, { marginLeft: neg(s.xsmall) }),
  n_mls_m: media(m, { marginLeft:  neg(s.small) }),

  mb0_m: media(m, { marginBottom:  0 }),
  mbxs_m: media(m, { marginBottom: s.xsmall }),
  mbs_m: media(m, { marginBottom:  s.small }),
  mbms_m: media(m, { marginBottom: s.msmall }),
  mbm_m: media(m, { marginBottom:  s.medium }),
  mbl_m: media(m, { marginBottom:  s.large }),
  mbxl_m: media(m, { marginBottom: s.larger }),

  mr0_m: media(m, { marginRight:   0 }),
  mrxs_m: media(m, { marginRight:  s.xsmall }),
  mrs_m: media(m, { marginRight:   s.small }),
  mrms_m: media(m, { marginRight:  s.msmall }),
  mrm_m: media(m, { marginRight:   s.medium }),
  mrl_m: media(m, { marginRight:   s.large }),
  mrxl_m: media(m, { marginRight:  s.larger }),

  m0_m: media(m, { margin: 0 }),
  ma0_m: media(m, { margin: 0 }),
  maxs_m: media(m, { margin: s.xsmall }),
  mas_m: media(m, { margin:  s.small }),
  mams_m: media(m, { margin: s.msmall }),
  mam_m: media(m, { margin:  s.medium }),
  mal_m: media(m, { margin:  s.large }),
  maxl_m: media(m, { margin: s.larger }),

  mra_m: media(m, { marginRight:  'auto' }),
  mla_m: media(m, { marginLeft:   'auto' }),
  mta_m: media(m, { marginTop:    'auto' }),
  mba_m: media(m, { marginBottom: 'auto' }),
  maa_m: media(m, { margin:       'auto' }),
};

export const rules = {
  ...padding,
  ...margin,
  ...notSmallPadding,
  ...notSmallMargin,
  ...mediumPadding,
  ...mediumMargin,
};

export default rules;
