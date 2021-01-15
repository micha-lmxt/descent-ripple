# Descent-Ripple

[![NPM](https://img.shields.io/npm/v/descent-ripple.svg)](https://www.npmjs.com/package/descent-ripple)

A highly customizable javascript ripple animation for buttons. Made with Svelte, but easily usable with other frameworks.

[![Volcano ripple example](https://github.com/micha-lmxt/descent-ripple/blob/master/static/descent-ripple.gif)](https://gradientdescent.de/descent-ripple/)

[More Examples and usage](https://gradientdescent.de/descent-ripple/)

## Getting started

> For React there is a wrapped component available, see [react-descent-ripple](https://github.com/micha-lmxt/react-descent-ripple)

Install the package from npm:

```javascript
npm install descent-ripple
```

In [Svelte](https://svelte.dev) you can easily use actions:

```javascript
// MyButton.svelte
<script>
    import ripple from 'descent-ripple';
    let rippleOptions = {};
</script>

<button use:ripple={rippleOptions}>click me </button>

```

For other frameworks see [this blog post](https://gradientdescent.de/descent-ripple/).

---
