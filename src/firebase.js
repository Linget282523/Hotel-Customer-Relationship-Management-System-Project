import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyABmk6ly9vSBGzfpY75XMNMN29s0bd8KEI",
    authDomain: "hcrms-project.firebaseapp.com",
    databaseURL: "https://hcrms-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hcrms-project",
    storageBucket: "hcrms-project.appspot.com",
    messagingSenderId: "742844082660",
    appId: "1:742844082660:web:40aece0d467d0692427ff1",
    measurementId: "G-EYXP54WF5K"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();


const updateRecordById = (id, updatedData) => {
    const recordsRef = database.ref('https://hcrms-project-default-rtdb.europe-west1.firebasedatabase.app/Table');
  
    recordsRef
      .orderByChild('id')
      .equalTo(id)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const recordKey = childSnapshot.key;
          recordsRef.child(recordKey).update(updatedData);
        });
      })
      .catch(error => {
        console.error('Error updating record:', error);
      });
  };
  
  updateRecordById('Rooms', {isCheckedIn: false});
  

