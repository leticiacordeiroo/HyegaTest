import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbx0fhv_QPxFKThaCJRcUzifogKMwolSM",
  authDomain: "projeto-front.firebaseapp.com",
  projectId: "projeto-front",
  storageBucket: "projeto-front.appspot.com",
  messagingSenderId: "822813512275",
  appId: "1:822813512275:web:3c1ec97a3763483fdcaca6",
  measurementId: "G-KVDHMJKV11",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
