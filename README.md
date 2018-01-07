# YONS

> Iestyn's atomic, functional, CSS-in-JS library

**Atomic**: Each rule defines one (or very few) styles, which you then compose together to create the UI you want. Instead of `.button` or `.my-cool-component` or `.i__love--bem` classnames, you have `.fg_white` (which sets the foreground to white), or `.pam` (which sets medium padding on each axis of the element) etc.

**Functional**: Forget about the cascade, forget about side effects. Yons classnames do what they say on the tin and nothing else.

**CSS-in-JS**: Uses [glamor](https://github.com/threepointone/glamor) under the hood, so doesn't have all the issues of inline-styles. Writing a web app without using JavaScript? This library ain't for you.

### Example

```js
import React from 'react';
import c from 'classnames';

import y from 'yons';

// React
const FooBar = () => (
  <div className={c(y.bg_black, y.fg_white)}>
    White text on black!
  </div>
);

// Or not
document.body.className = c(y.b,y.ttu,y.f1,y.fg_green)
// now your body tag will be bold, uppercase, massive, and green
```

### Installing

Install with yarn (or npm if that's what you fancy).

You also need to install `glamor` as it's a peerDependancy of this module (this is because glamor _must_ be used as a singleton).

```bash
$ yarn add yons
$ yarn add glamor
```


### What's in the box?

Take a look inside the `src` folder. It's all pretty self-documenting.

Of particular note are `skin.js` (for setting colours of stuff) and `spacing.js` (for setting margins and padding).
