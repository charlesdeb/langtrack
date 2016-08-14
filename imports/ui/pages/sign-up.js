import './sign-up.html';

import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Template.SignUp.events({
  'submit form': function (event) {
    event.preventDefault();
    console.log('boo')
    var email = $('[name=email]').val();
    var displayName = $('[name=display-name]').val();
    var password = $('[name=password]').val();
    user = Accounts.createUser({
      email: email,
      password: password
    });
    console.log(user);
  }
});