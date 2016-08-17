import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export const insertUser = new ValidatedMethod({
  name: 'langtrack.user.insert',
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    displayName: { type: String }
  }).validator(),
  run(user) {

    //    // Make sure the user is logged in before inserting a task
    //    if (!this.userId) {
    //      throw new Meteor.Error('not-authorized');
    //    }
    console.log('in insertUser, user: ')
    console.log(user)
    const email = user.email;
    const password = user.password;
    // if (Meteor.isClient) {
    //   Accounts.createUser(
    //     { email, password },
    //     function (error) {
    //       if (error) {
    //         console.log(error);
    //         throw new Meteor.Error('langtrack.user.insert.createuser', "Couldn't create user", error.error);
    //       }
    //     });
    // } else {
    userId = Accounts.createUser({ email, password });
    console.log("userId: " + userId);

    if (userId) {
      console.log('updating the profile for : ' + userId);
      Meteor.users.update(
        { _id: userId },
        { $set: { "profile.displayName": user.displayName } },
        function (error, _id) {
          if (error) {
            console.log(error);
            throw new Meteor.Error('langtrack.user.insert.updateProfile', "Couldn't update profile", error.error);
          }
        });
    }
    // };
  }
});