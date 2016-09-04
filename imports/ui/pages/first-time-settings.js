import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Template } from 'meteor/templating';

import { User } from '../../api/users/users.js';
import './first-time-settings.html';

Template.FirstTimeSettings.onCreated(function () {
  // set title
  const title = "Settings";
  DocHead.setTitle(title);

  // get data
  var self = this;
  self.autorun(function () {
    self.subscribe('theCurrentUser');
    console.log('subscribed');
    // console.log("User.schema:");
    // console.log(User.schema);
  });
});

Template.FirstTimeSettings.helpers({
  user() {
    console.log("looking up user");
    if (Meteor.userId()) {
      // const theUser = Meteor.user();
      const theUser = Meteor.users.find({ _id: Meteor.userId() });
        console.log(theUser);
      return theUser;
    }
  }
});
