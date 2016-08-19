import './login.html';

Template.Login.onCreated(function () {
  const title = "Login to LangTrack";
  DocHead.setTitle(title);
});

Template.Login.events({
  'submit form': function (event) {
    event.preventDefault();
    const email = $('[name=email]').val();
    const password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        console.log(error);
      }
    });
  }
});