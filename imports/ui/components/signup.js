import './signup.html';

import { Accounts } from "meteor/accounts-base" ;
import { Meteor } from 'meteor/meteor'

Template.SignUp.events({
  'click #submit': function (event) {
    event.preventDefault();
    emailVar = $('#registerEmail').val();
    passwordVar = $('#registerPassword').val();
    Accountsddd.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});

// Accounts.onLogin ->
//   redirect = Session.get ‘redirectAfterLogin’
//   if redirect?
//     unless redirect is '/login'
//       FlowRouter.go redirect