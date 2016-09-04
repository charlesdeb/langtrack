import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { UserSchema } from '../../api/users/users.js';
import './first-time-settings.html';

Template.FirstTimeSettings.onCreated(function () {
  // set title
  const title = "Settings";
  DocHead.setTitle(title);

  // get data
  var self = this;
  self.autorun(function() {
    var postId = FlowRouter.getParam('postId');
    self.subscribe('singlePost', postId);  
  });
});

Template.FirstTimeSettings.helpers({
  currentUser: function(){
    console.log('looking for user:');
    console.log(Meteor.user());
    return Meteor.user();
  }
});
