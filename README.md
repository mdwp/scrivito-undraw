# Scrivito Undraw
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A React Component/Scrivito widget for the wonderful illustrations from Undraw.

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-undraw
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-undraw";
```

## Features
This widget implements 36 illustrations from Undraw.

## Development

With `npm run build` you can build the package into `build/`.

With `npm start` you'll start a continues process, that rebuilds `build/` automatically once the source code is changed.

To add this library locally do the following in your scrivito app:

```
npm install file:<path to build folder>
```

e.g.

```
npm install file:../scrivito-undraw/build/
```

To publish the package:

```
npm i && npm run build && cd build/ && npm publish
```

## Check code quality

With `npm run eslint` and `npm run es-check` you can check your coding quality.