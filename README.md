# Descent-Ripple

[![NPM](https://img.shields.io/npm/v/descent-ripple.svg)](https://www.npmjs.com/package/descent-ripple)

A highly customizable javascript ripple animation for buttons. Made with Svelte, but easily usable with other frameworks.

[![Volcano ripple example](https://github.com/micha-lmxt/descent-ripple/blob/master/static/descent-ripple.gif)](https://gradientdescent.de/descent-ripple/)

[More Examples and usage](https://gradientdescent.de/descent-ripple/)

## Getting started

Install the package from npm:

```javascript
npm install descent-ripple
```

In [Svelte](https://svelte.dev) you can easily use actions:

```javascript
// MyButton.tsx
import React from 'react';
import ripple from 'descent-ripple';

export const MyButton = ()=>{
    const buttonRef = React.useRef<Node>(null);
     React.useEffect(()=>{
        if (buttonRef.current){
            let rippleOptions={};
            const buttonRipple = ripple(buttonRef.current,rippleOptions);
            return buttonRipple.destroy;
            
        }
    },[]);
    return (
        <button ref={buttonRef}>click me</button>
    )
}
```

For other frameworks see [this blog post](https://gradientdescent.de/descent-ripple/).

---
