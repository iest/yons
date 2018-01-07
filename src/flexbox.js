import { css } from 'glamor';

/*
  FLEXBOX
*/

const rules = {
  flex:               css({ display: 'flex' }),

  'jc-space-between': css({ justifyContent: 'space-between' }),
  'jc-space-around':  css({ justifyContent: 'space-around' }),
  'jc-flex-start':    css({ justifyContent: 'flex-start' }),
  'jc-flex-end':      css({ justifyContent: 'flex-end' }),
  'jc-center':        css({ justifyContent: 'center' }),

  'ai-flex-start':    css({ alignItems: 'flex-start' }),
  'ai-flex-end':      css({ alignItems: 'flex-end' }),
  'ai-baseline':      css({ alignItems: 'baseline' }),
  'ai-stretch':       css({ alignItems: 'stretch' }),
  'ai-center':        css({ alignItems: 'center' }),

  'as-flex-start':    css({ alignSelf: 'flex-start' }),
  'as-flex-end':      css({ alignSelf: 'flex-end' }),
  'as-baseline':      css({ alignSelf: 'baseline' }),
  'as-stretch':       css({ alignSelf: 'stretch' }),
  'as-center':        css({ alignSelf: 'center' }),

  'ac-space-between': css({ alignContent: 'space-between' }),
  'ac-space-around':  css({ alignContent: 'space-around' }),
  'ac-flex-start':    css({ alignContent: 'flex-start' }),
  'ac-flex-end':      css({ alignContent: 'flex-end' }),
  'ac-stretch':       css({ alignContent: 'stretch' }),
  'ac-center':        css({ alignContent: 'center' }),

  'd-column-reverse': css({ flexDirection: 'column-reverse' }),
  'd-row-reverse':    css({ flexDirection: 'row-reverse' }),
  'd-column':         css({ flexDirection: 'column' }),
  'd-row':            css({ flexDirection: 'row' }),

  'w-wrap-reverse':   css({ flexWrap: 'wrap-reverse' }),
  'w-nowrap':         css({ flexWrap: 'nowrap' }),
  'w-wrap':           css({ flexWrap: 'wrap' }),

  'fg-0':             css({ flexGrow: 0 }),
  'fg-1':             css({ flexGrow: 1 }),
  'fg-2':             css({ flexGrow: 2 }),
  'fg-3':             css({ flexGrow: 3 }),
  'fg-4':             css({ flexGrow: 4 }),

  'fs-0':             css({ flexShrink: 0 }),
  'fs-1':             css({ flexShrink: 1 }),
  'fs-2':             css({ flexShrink: 2 }),
  'fs-3':             css({ flexShrink: 3 }),
  'fs-4':             css({ flexShrink: 4 }),
};

export default rules;
