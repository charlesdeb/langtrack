import './sign-up.html';

import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';

import { UserSchema } from '../../api/users/users.js';
import { insertUser } from '../../api/users/methods.js';


Template.SignUp.onCreated(function () {
  const title = "Sign-up for LangTrack";
  DocHead.setTitle(title);
});

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
    const user = { email: email, password: password, displayName: displayName };
    console.log(user);

    // Call the Method
    insertUser.call(user, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // success!
        Meteor.loginWithPassword(email, password);
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