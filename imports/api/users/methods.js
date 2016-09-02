import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

import { LT} from '../globals.js';

export const insertUser = new ValidatedMethod({
  name: 'langtrack.user.insert',
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    displayName: { type: String }
  }).validator(),
  run(user) {

    console.log(user);
    const email = user.email;
    const password = user.password;
    userId = Accounts.createUser({ email, password });
    // console.log("userId: " + userId);

    if (userId) {
      // console.log('updating the profile for : ' + userId);
      Meteor.users.update(
        { _id: userId },
        { $set: {
          displayName: user.displayName,
          learningLanguage: LT.defaults.learningLanguage, 
          weeklyTarget: LT.defaults.weeklyTarget 
        } },
        function (error, _id) {
          if (error) {
            console.log(error);
            throw new Meteor.Error('langtrack.user.insert.updateProfile', "Couldn't update profile", error.error);
          }
        });
    }
  }
});