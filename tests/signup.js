// import { generateData } from '../imports/api/generate-data.app-tests.js';

const logout = () => {
  browser.url("localhost:3000/");
  if (browser.element('button[name=logout]'))
    browser.click('button[name=logout]');
};

var getMeteorUser = function () {
  return Meteor.user();
};

var getMeteorUserId = function () {
  return Meteor.userId();
};

// var cleanDatabase = function () {
//   import { resetDatabase } from 'meteor/xolvio:cleaner';
//   resetDatabase();
// };

describe('signing up @watch', function () {
  describe('with good data', function () {
    beforeEach(function () {
      console.log('in beforeEach:');
      server.call('user');
      // console.log(results);
      // console.log(results);
      // reset database
      // We need to wait until the method call is done before moving on, so we
      // use Mocha's async mechanism (calling a done callback)
      // Meteor.call('test.resetDatabase', done);
      server.call('logout');
      server.execute(function () {
        Package['xolvio:cleaner'].resetDatabase();
      });

      // logout();
      browser.url("localhost:3000/signup");
      browser.setValue('[name="email"]', "test@examples.com");
      browser.setValue('[name="display-name"]', 'chuckles!');
      browser.setValue('[name="password"]', 's3cr3t!');
      browser.click('input[type=submit]');
    });

    it('logs user into system', function () {
      var result = server.execute(getMeteorUser);
      console.log(result);
      result = server.execute(getMeteorUserId);
      console.log(result);
      // result = server.call('user');
      // console.log(result);
    });

    it('creates right data in user profile');
    it('directs user to home page');
  });
});