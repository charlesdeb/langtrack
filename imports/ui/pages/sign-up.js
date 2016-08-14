import './sign-up.html';

import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import { UserSchema } from '../../api/users/users.js';

Template.SignUp.events({
  'submit form': function (event) {
    // TODO - this should all go server side into a method of some sort.
    // It's not actually working since the SImpleSchema validation is 
    // being bypassed in this implementation.
    event.preventDefault();
    // construct user object
    const email = $('[name=email]').val();
    const displayName = $('[name=display-name]').val();
    const password = $('[name=password]').val();
    const profile = { displayName: displayName };
    const user = { email: email, password: password, profile: profile };
    // console.log(user);
    Accounts.createUser(
      user,
      function (error) {
        if (error) {
          console.log(error);
        }
      });
  }
});

Accounts.onLogin(function () {
  redirect = Session.get('redirectAfterLogin')
  if (redirect) {
    if (redirect !== '/login')
      FlowRouter.go(redirect);
  }
  else {
    FlowRouter.go('App.home');
  }
})