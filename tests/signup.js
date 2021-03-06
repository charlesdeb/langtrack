describe('signing up', function () {
  describe('with good data', function () {
    beforeEach(function () {
      // console.log('in beforeEach:');
      server.call('logout');
      server.execute(function () {
        Package['xolvio:cleaner'].resetDatabase();
      });

      // browser
      //   .timeoutsAsyncScript(1000)
      //   .executeAsync(function (done) {
      //     Accounts.createUser({ email: 'test@examples.com', password: 's3cr3t!' }); 
      //     Meteor.loginWithPassword('test@examples.com', 's3cr3t!', function (err) {
      //       if (err) {
      //         console.error('Could not login', err);
      //       } else {
      //         done();
      //       }
      //     });
      //   });

      browser.url("localhost:3000/signup");
      browser.setValue('[name="email"]', "test@examples.com");
      browser.setValue('[name="display-name"]', 'chuckles');
      browser.setValue('[name="password"]', 's3cr3t!');
      browser.click('input[type=submit]');
      browser.waitForVisible('a#logout');
      // console.log("logged in!"); 
    });

    it('logs user into system 2  @watch', function () {
      const userInTestContext = server.execute(function () {
        console.log("from console");
        console.log(Meteor.user()); // **** check this in the browser console
        // console.log(Meteor); // **** check this in the browser console
        return Meteor.user();
      });
      console.log("from test runner");
      console.log(userInTestContext);  // this line prints "null" to the console
    });

    it('logs user into system', function () {
      var logoutButton = browser.waitForExist('a#logout');
      expect(logoutButton).to.equal(true);

      // // console.log("running test");
      // var userInTestContext = server.execute(function () {
      //   // this function runs in the Meteor context
      //   return Meteor.user();
      // });
      // // console.log(userInTestContext);
    });

    it('creates right data in user profile');
    it('directs user to a get details page', function () {
      const title = browser.getTitle();
      expect(title).to.equal("Settings");
    });
  });
});