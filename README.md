# Dumb Image Pre-loader

[![Build Status](https://travis-ci.org/larry-dalmeida/dumb-image-preloader.svg?branch=master)](https://travis-ci.org/larry-dalmeida/dumb-image-preloader)
[![Coverage Status](https://coveralls.io/repos/github/larry-dalmeida/dumb-image-preloader/badge.svg)](https://coveralls.io/github/larry-dalmeida/dumb-image-preloader)

A tiny module that takes a bunch of image URLs and loads them into the browsers cache. When used responsibly and for a small number of optimized images it will reduce page load time for pages where the images are used.

## Installation

  `npm install dumb-image-preloader`

## Usage

  ```javascript
  import dumbImagePreloader from 'dumb-image-preloader';
  // OR
  //const dumbImagePreloader = require('dumb-image-preloader');

  const imageGroup0 = [
    'https://placeimg.com/640/480/nature/sepia',
    'https://placeimg.com/640/480/tech'
  ];

  const imageGroup1 = [
    'https://placeimg.com/640/480/arch',
    'https://placeimg.com/640/480/nature'
  ];

  const imageGroup2 = [
    'https://placeimg.com/640/480/animals',
    'https://placeimg.com/640/480/arch/sepia'
  ];

  // promise unhandled
  dumbImagePreloader(imageGroup0);

  //chaining the returned promise
  dumbImagePreloader(imageGroup1)
    .then(() => dumbImagePreloader(imageGroup2))
    .then(() => {
      console.log('All images loaded!');
    });
  ```

`dumbImagePreloader` will return a promise that will resolve even if any of the images from the provided array of URLs fails to load. It will only reject if an invalid parameter is given. Valid parameter value for the `dumbImagePreloader` function is an array with at least 1 URL.

## Recommended Usage
```javascript
  window.onload = function () {
    dumbImagePreloader(imageGroup1) //example: first load images on page 2
      .then(() => dumbImagePreloader(imageGroup2))  //example: next load images on page 3
  }
```
Wait until the `onload` event is triggered so that it loads after all the page assets have loaded and the user has a smooth and quick first load.

## Tests

  `npm test`

## Contributing

The usual. Use the `.editorconfig`. Write clean code. Add unit tests for any new or changed functionality. Lint and test your code. Have fun.
