import firebaseConfig from "./config.js";


const admin = require("firebase-admin");
const firebaseConfig = require("./config.js"); 

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://hcrms-project-default-rtdb.europe-west1.firebasedatabase.app" 
});


const databaseRef = admin.database().ref();
const roomsRef = databaseRef.child("Rooms");
const accountsRef = databaseRef.child("Accounts");

module.exports = {
  roomsRef,
  accountsRef
};
