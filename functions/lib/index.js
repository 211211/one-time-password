"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require('./service_account.json');
const createUser = require('./create_user');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-b0338.firebaseio.com"
});
exports.createUser = functions.https.onRequest(createUser);
//# sourceMappingURL=index.js.map