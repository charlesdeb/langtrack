import './page-header.html';

import { Meteor } from 'meteor/meteor';

Template.PageHeader.events({
  // 'button#logout': function() {
  'click #logout': function (events) {
    Meteor.logout(function () {
      FlowRouter.go('bye');
    });
  }
});