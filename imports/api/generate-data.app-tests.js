// import { Meteor } from 'meteor/meteor';

// import { resetDatabase } from 'meteor/xolvio:cleaner';

// Meteor.methods({
//   generateFixtures() {
//     resetDatabase();
//   },
// });

// let generateData;

// if (Meteor.isClient) {
//   // Create a second connection to the server to use to call
//   // test data methods. We do this so there's no contention
//   // with the currently tested user's connection.
//   const testConnection = Meteor.connect(Meteor.absoluteUrl());

//   generateData = denodeify((cb) => {
//     testConnection.call('generateFixtures', cb);
//   });
// }

// export { generateData };