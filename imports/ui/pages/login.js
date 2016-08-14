import './login.html';

Template.Login.events({
  'submit form': function (event) {
    event.preventDefault();
    email = $('[name=email]').val();
    password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function (error) {
      console.log(error);
    });
  }
});