"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const service_account_1 = require("./service_account");
const createUser = require('./create_user');
admin.initializeApp({
    credential: admin.credential.cert(service_account_1.default),
    databaseURL: "https://one-time-password-b0338.firebaseio.com"
});
exports.createUser = functions.https.onRequest(createUser);
//# sourceMappingURL=index.js.map