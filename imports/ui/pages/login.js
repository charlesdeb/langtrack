import './login.html';

Template.Login.events({
  'click #submit': function (event) {
    event.preventDefault();
    console.log(event);
    $('#loginEmail')
    emailVar = $('#loginEmail').val();
    passwordVar = $('#loginPassword').val();
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
});