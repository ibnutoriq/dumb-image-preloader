'use strict';

import { expect } from 'chai';
import dumbImagePreloader from './../source/index';

const MSG_REJECT = 'dumbImagePreloader: Parameter provided is not an array or is an empty array.';

describe('dumbImagePreloader', () => {

  it('should return a rejected promise when empty array is passed', () => {
    const imageURLs = [];
    return dumbImagePreloader(imageURLs)
      .catch((err) => {
        expect(err.message).to.equal(MSG_REJECT);
      });
  });

  it('should return a rejected promise when invalid parameter is passed', () => {
    return dumbImagePreloader()
      .catch((err) => {
        expect(err.message).to.equal(MSG_REJECT);
      });
  });

});
