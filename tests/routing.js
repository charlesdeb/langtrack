import {LT} from '../imports/api/globals.js';

describe('routing to non-login pages', function () {
  // beforeEach(function () {
  //   browser.url('http://localhost:3000');
  //   server.call('generateFixtures');
  // });

  it('has correct page titles @watch', function () {
    const pages = ['/login', '/signup'];

    pages.forEach(page => {
      const url = "http://localhost:3000" + page;
      browser.url(url);
      // console.log(browser.status());
      assert.equal(browser.getTitle(), LT.titles[page]);
    });

    // browser.click('.js-new-list');
    // assert.equal(countLists(), initialCount + 1);
  });
});