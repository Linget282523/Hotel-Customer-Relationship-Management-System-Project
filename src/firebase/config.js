import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyABmk6ly9vSBGzfpY75XMNMN29s0bd8KEI",
    authDomain: "hcrms-project.firebaseapp.com",
    projectId: "hcrms-project",
    storageBucket: "hcrms-project.appspot.com",
    messagingSenderId: "742844082660",
    appId: "1:742844082660:web:40aece0d467d0692427ff1",
    measurementId: "G-EYXP54WF5K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;