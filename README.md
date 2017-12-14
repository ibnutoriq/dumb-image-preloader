# Dumb Image Pre-loader

[![Build Status](https://travis-ci.org/larry-dalmeida/dumb-image-preloader.svg?branch=master)](https://travis-ci.org/larry-dalmeida/dumb-image-preloader)
[![Coverage Status](https://coveralls.io/repos/github/larry-dalmeida/dumb-image-preloader/badge.svg)](https://coveralls.io/github/larry-dalmeida/dumb-image-preloader)

A tiny module that takes a bunch of image URLs and loads them into the browsers cache sequentially. When used responsibly and for a small number of optimized images it will reduce page load time for pages where the images are used.

## Installation

  `npm install dumb-image-preloader`

## Usage

  ```javascript
  const dumbImagePreloader = require('dumb-image-preloader');

  const imagesOnPage2 = [
    'https://placeimg.com/640/480/nature/sepia',
    'https://placeimg.com/640/480/tech',
    'https://placeimg.com/640/480/animals',
    'https://placeimg.com/640/480/arch/sepia',
    'https://placeimg.com/640/480/arch',
    'https://placeimg.com/640/480/nature'
  ];

  dumbImagePreloader(imagesOnPage2);
  ```

As soon as `window.onload` fires, `dumbImagePreloader` will start downloading the images sequentially in the order that they are provided.

## Tests

  `npm test`

## Contributing

The usual. Use the `.editorconfig`. Write clean code. Add unit tests for any new or changed functionality. Lint and test your code. Have fun.
