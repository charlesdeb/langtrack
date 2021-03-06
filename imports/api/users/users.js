// SimpleSchema for augmenting the default User collection 
// that comes with Meteor

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

import { LT } from '../globals.js';

// const UserSchema = {};
const User = {};

User.schema = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  displayName: {
    type: String,
    optional: false,
    label: 'Display Name'
  },
  learningLanguage: {
    type: String,
    optional: false,
    label: 'Language you are learning',
    defaultValue: LT.defaults.learningLanguage
  },
  weeklyTarget: {
    type: Number,
    optional: false,
    label: 'Weekly target (hours)',
    defaultValue: LT.defaults.weeklyTarget
  },
  onLeaderBoard: {
    type: Boolean,
    optional: false,
    label: 'Appear on leaderboard?',
    defaultValue: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  // roles: {
  //   type: Object,
  //   optional: true,
  //   blackbox: true
  // },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  // roles: {
  //   type: [String],
  //   optional: true
  // },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
    type: Date,
    optional: true
  }
});

Meteor.users.attachSchema(User.schema);

// export { UserSchema };
export { User };