# Stanford AI Group (SAIG) Website 
This repo hosts the [gatsby.js](https://www.gatsbyjs.org/)-based sourcecode for the [Stanford AI Group website (SAIG)](http://stanfordai.group/).

## Preview

[![SAIG Site Preview](https://user-images.githubusercontent.com/10323195/31002798-8573ba40-a4a1-11e7-812d-33303fc42c1f.png)](http://stanfordai.group/)


## Tech Stack

- Built on [gatsby.js](https://www.gatsbyjs.org/), which uses [Webpack](https://webpack.js.org/) and [React](https://reactjs.org/).
- Written in [Typescript](https://www.typescriptlang.org/) and [Sass](http://sass-lang.com/).
- Uses [remark](https://github.com/wooorm/remark) for Markdown processing.

## Making Changes

```bash
# To run development server (and see lives in-browser changes)
yarn develop

# To build the website (and run on your own server; will be in ./build/ folder)
yarn build
```

Currently, the site is hosted on [Netlify](https://www.netlify.com/). It's set up so that any changes to `master` cause the website to rebuild.

---

Made with ❤️.
