import { initializeApp } from 'firebase/app';


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

export const app = initializeApp(firebaseConfig);



