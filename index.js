'use strict';

/**
 * Pre-load images
 * @param {array} imageURLs
 * @return {boolean}
 */
module.exports = function(imageURLs) {

  const sequentiallyLoad = (images) => {
    if (typeof images == "undefined" || !images.length) {
      return false;
    }

    const img = new Image();
    const url = images.shift();
    img.onload = () => sequentiallyLoad(images);
    img.onerror = () => sequentiallyLoad(images);
    img.src = url;
  };

  return sequentiallyLoad(imageURLs);

};
