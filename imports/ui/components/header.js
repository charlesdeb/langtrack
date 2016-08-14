import './header.html';

import { Meteor } from 'meteor/meteor';

Template.Header.events({
  // 'button#logout': function() {
  'click #logout': function (events) {
    Meteor.logout(function () {
      console.log('going...');
      FlowRouter.go('bye');
    });
  }
})