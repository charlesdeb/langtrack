import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'

// Import to load these templates
import '../../ui/layouts/app-body.js';

// now for the routes
// These are publically exposed routes
exposed = FlowRouter.group({});

exposed.route("/login", {
  name: "login",
  action: function () {
    BlazeLayout.render("App_body", { main: 'Login' });
  }
});

exposed.route("/signup", {
  name: "signup",
  action: function () {
    BlazeLayout.render("App_body", { main: 'SignUp' });
  }
});

exposed.route("/bye", {
  name: "bye",
  action: function () {
    BlazeLayout.render("App_body", { main: 'Bye' });
  }
});

// These are routes only available to logged-in users
loggedIn = FlowRouter.group({
  triggersEnter: [function () {
    if (Meteor.loggingIn() || Meteor.userId()) {
      // do nothing
    } else {
      route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set('redirectAfterLogin', route.path);
      }
      FlowRouter.go("login");
    }
  }]
})

loggedIn.route("/", {
  name: "App.home",
  action: function () {
    BlazeLayout.render("App_body", { main: 'Main' });
  }
});