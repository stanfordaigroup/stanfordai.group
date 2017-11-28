# Stanford AI Group (SAIG) Website 
This repo hosts the [gatsby.js](https://www.gatsbyjs.org/)-based sourcecode for the [Stanford AI Group website (SAIG)](http://stanfordai.group/). Currently, the site is hosted on [Netlify](https://www.netlify.com/). It's set up so that any changes to `master` cause the website to rebuild.

## Tech Stack

- Built on [gatsby.js](https://www.gatsbyjs.org/), which uses [Webpack](https://webpack.js.org/) and [React](https://reactjs.org/).
- Written in [Typescript](https://www.typescriptlang.org/) and [Sass](http://sass-lang.com/).
- Uses [remark](https://github.com/wooorm/remark) for Markdown processing.

## Making Changes

Be sure to have [yarn](https://yarnpkg.com/en/) installed.

```bash
# 1. Clone git repo
git clone https://github.com/stanfordaigroup/stanfordai.group.git

# 2. Setup packages
yarn

# 3. To run development server (and see lives in-browser changes)
yarn develop

# 4. To build the website (and run on your own server; will be in ./build/ folder)
yarn build

# 5. Once settled, commit your changes to this repo and Netlify will automatically rebuild the site and make it live.
```

## Folder Structure
```
.
├── src                       # Main source -> .ts/tsx files
│   ├── components            # React components (reused in diff. pages)
│   │   ├── ...
│   ├── layouts               # Basic layout components (gatsby-specific)
│   │   ├── images            # Images used in the site's layout (non-content)
│   │   ├── ...
│   ├── pages                 # Pages on the site (e.g., archives, 404, about, etc.)
│   │   ├── ...
│   ├── styles                # Global css styles (in Sass, .scss)
│   ├── templates             # Alternative page layouts (like for non-home pages)
│   ├── calendar.json         # Stores the latest data scraped from our shared Google Calendar
│   ├── people.ts             # Stores current board members for use on the home page
├── static                    # Static page files (content files like .pdf, .png, etc.)
│   ├── 17-10-12
│   └── ...  
├── .nvmrc                    # Tells Netlify which version of node to use
├── gatsby-config.js          # Stores which gatsby.js plugins we use
├── gatsby-node.js            # Configures how we create pages from markdown (.md) files
├── package.json              # Node.js package file
├── tsconfig.json             # Configs used by Typescript compiler
├── yarn.lock
└── README.md
```

## Preview

[![SAIG Site Preview](https://github.com/stanfordaigroup/design/blob/master/images/website-preview.png?raw=true)](http://stanfordai.group/)

Made with ❤️.
