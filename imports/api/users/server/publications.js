import { Meteor } from 'meteor/meteor';

Meteor.publish('theCurrentUser', function theCurrentUser() {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find({
    _id: this.userId
  }, {
      fields: { displayName: 1,
        learningLanguage: 1,
      weeklyTarget: 1,
    },
  });
});