var admin = require("firebase-admin");

var serviceAccount = require("./cool.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin; // Export Firebase Admin instance
