import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyBqgy0U4xMsWdIRsURWQMO-f-XeUFXVmeY",
    authDomain: "mmservice-388321.firebaseapp.com",
    projectId: "mmservice-388321",
    storageBucket: "mmservice-388321.appspot.com",
    messagingSenderId: "182268802434",
    appId: "1:182268802434:web:1f4661abd05dce9213cb9b",
    measurementId: "G-EEXY4MP94M"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;