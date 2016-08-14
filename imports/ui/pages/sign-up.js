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
    email = $('[name=email]').val();
    displayName = $('[name=display-name]').val();
    password = $('[name=password]').val();
    profile = { displayName: displayName };
    user = { email: email, password: password, profile: profile };
    // console.log(user);
    Accounts.createUser(
      user,
      function (error) {
        console.log(error);
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