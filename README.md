# Stanford AI Group (SAIG) Website 
This repo hosts the [gatsby.js](https://www.gatsbyjs.org/)-based sourcecode for the [Stanford AI Group website (SAIG)](http://stanfordai.group/). Currently, the site is hosted on [Netlify](https://www.netlify.com/). It's set up so that any changes to `master` cause the website to rebuild.

## Tech Stack
- The website is built on [gatsby.js](https://www.gatsbyjs.org/), a front-end static site creator (meaning we don’t have a dedicated server setup behind it). This means that we can build our site using [React](https://reactjs.org/), while still serving a fast-loading site that’s pre-built. Check out the [gatsby documentation](https://www.gatsbyjs.org/docs/) for information on how it works.
- Our javascript code is written in [Typescript](https://www.typescriptlang.org/), Microsoft’s type-enabled superset of Javascript.
- Our stylesheets are written in [Sass](http://sass-lang.com/).
- Dynamic pages (like the calendar) are based on React components (e.g., [../components/Calendar.tsx](https://github.com/stanfordaigroup/stanfordai.group/blob/master/src/components/Calendar.tsx)). Static pages (like the about page, constitution) are Markdown files rendered by gatsby (e.g., [../consitution/index.md](https://github.com/stanfordaigroup/stanfordai.group/blob/master/src/pages/constitution/index.md)) in a [PermalinkPage template](https://github.com/stanfordaigroup/stanfordai.group/blob/master/src/templates/PermalinkPage.tsx).
- We host our site’s code publicly on GitHub, and host the live build on Netlify (see below).

We're using various [Gatsby Plugins](https://www.gatsbyjs.org/docs/plugins/):
```
gatsby-plugin-react-next          # Early access to React v.16.
gatsby-plugin-catch-links         # Intercepts links in markdown pages for pushState browser loading.
gatsby-plugin-react-helmet        # Used to manage <header> contents
gatsby-plugin-sass                # Self-explanatory.
gatsby-plugin-typescript          # Self-explanatory.
gatsby-source-filesystem          # Lets us access pages through GraphQL
gatsby-transformer-remark         # Our markdown processor (and associated sub-plugins)
gatsby-plugin-google-fonts        # Used for Roboto font.
gatsby-plugin-purify-css          # Minifies and removed unused CSS code.
gatsby-plugin-sitemap             # Self-explanatory
gatsby-plugin-nprogress           # Adds a progress bar to the top of page when server is slow.
```

While appearing like there's a lot going on, this website is pretty barebones in terms of functionality. What the user gets from the server when going to `stanfordai.group` is a [static website](https://en.wikipedia.org/wiki/Static_web_page) which is a copy of what's rendered from our React.js components. What's special is that gatsby then [hydrates](https://reactjs.org/docs/react-dom.html#hydrate) the static react components and allow us to add dynamic functionality. What this means is we get faster load times, better SEO, and a system that doesn't require us to use a server/backend.

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
