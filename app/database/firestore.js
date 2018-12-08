const admin = require('firebase-admin');

var serviceAccount = require('.manage-work-0dcfb70ce5a0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
