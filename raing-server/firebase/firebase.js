require('dotenv').config();
const firebaseAdmin = require('firebase-admin');
const firebaseDatabaseURL = process.env['DATABASE_URL'];

const config = {
  credential: firebaseAdmin.credential.applicationDefault(),
  databaseURL: firebaseDatabaseURL
};

const admin = firebaseAdmin.initializeApp(config);
const database = admin.database();

module.exports = {
  database,
};
