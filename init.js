const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./cool.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // other configurations if needed
});

module.exports = admin; // Export Firebase Admin instance
