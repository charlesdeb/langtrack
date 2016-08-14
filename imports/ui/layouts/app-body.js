import './app-body.html';

import { ReactiveVar } from 'meteor/reactive-var';

import '../components/header.js';
import '../components/loading.js';
import '../pages/login.js';
import '../pages/sign-up.js';
import '../pages/main.js';
import '../pages/bye.js';

const CONNECTION_ISSUE_TIMEOUT = 5000;

// A store which is local to this file?
const showConnectionIssue = new ReactiveVar(false);

Meteor.startup(() => {
  // Only show the connection error box if it has been 5 seconds since
  // the app started
  setTimeout(() => {
    // FIXME:
    // Launch screen handle created in lib/router.js
    // dataReadyHold.release();

    // Show the connection error box
    showConnectionIssue.set(true);
  }, CONNECTION_ISSUE_TIMEOUT);
});

Template.App_body.onCreated(function appBodyOnCreated() {
  // this.subscribe('lists.public');
  // this.subscribe('lists.private');

  this.state = new ReactiveDict();
  this.state.setDefault({
    // menuOpen: false,
    // userMenuOpen: false,
  });
});

Template.App_body.helpers({
  cordova() {
    return Meteor.isCordova && 'cordova';
  },
  connected() {
    if (showConnectionIssue.get()) {
      return Meteor.status().connected;
    }

    return true;
  },
})