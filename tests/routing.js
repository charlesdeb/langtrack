import {LT} from '../imports/api/globals.js';

describe('routing to non-login pages', function () {
  it('has correct page titles', function () { 
    const pages = ['/login', '/signup'];

    pages.forEach(page => {
      const url = "http://localhost:3000" + page;
      browser.url(url);
      assert.equal(browser.getTitle(), LT.titles[page]);
    });
  });
});