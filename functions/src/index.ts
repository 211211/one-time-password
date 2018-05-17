import admin = require('firebase-admin')
import * as functions from 'firebase-functions';
import serviceAccount from './service_account'
const createUser = require('./create_user')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-b0338.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser)
