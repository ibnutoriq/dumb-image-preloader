'use strict';

const MSG_REJECT = 'dumbImagePreloader: Parameter provided is not an array or is an empty array.';

/**
 * getImageFromBlob - takes a blob from a fetch response and returns image
 * @param  {object} blob - blob from response object
 * @return {object}      - image object or undefined
 */
export const getImageFromBlob = (blob) => {
  let img;
  if (blob !== null) {
    img = new Image();
    img.src = URL.createObjectURL(blob);
  }
  return img;
};

/**
 * getBlobFromResponse - takes in a fetch response object and returns the blob
 * @param  {object} response - fetch response object
 * @return {object}          - null if response has error, blob otherwise
 */
export const getBlobFromResponse = response => response.ok
  ? response.blob()
  : null;

/**
 * getRequestSettings - constructs a request settings object for Request
 * @return {object} - settings object
 */
export const getRequestSettings = () => {
  const headers = new Headers();
  return { method: 'GET', headers: headers, mode: 'no-cors', cache: 'default' }
};

/**
 * requestImage fetches the image by URl
 * @param  {string} url      - Image request URL
 * @param  {object} settings - Request settings
 * @return {promise}         - Resolves whether request is successful / fails
 */
export const requestImage = (url, settings) => {
  const request = new Request(url, settings);
  return fetch(request)
    .then(response => getBlobFromResponse(response));
};

/**
 * Pre-load images
 * @param {array} imageURLs - image URL array
 * @return {promise} - promise
 */
const dumbImagePreloader = function (imageURLs) {
  if (!Array.isArray(imageURLs) || imageURLs.length === 0) {
    return Promise.reject(new Error(MSG_REJECT));
  }
  const settings = getRequestSettings();
  const imgReqPromiseArray = imageURLs.map(imageURL => requestImage(imageURL, settings));
  return Promise.all(imgReqPromiseArray)
    .then(responses => responses.map(getImageFromBlob));
};

export default dumbImagePreloader;
