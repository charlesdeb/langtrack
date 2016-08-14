import './login.html';

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