
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD-aQuo3xLmV0XD003C-eJqZMVUxwQ8w6w",
  authDomain: "webcarros-ae0f2.firebaseapp.com",
  projectId: "webcarros-ae0f2",
  storageBucket: "webcarros-ae0f2.appspot.com",
  messagingSenderId: "214178241388",
  appId: "1:214178241388:web:69b828175f320bd6533149",
  measurementId: "G-BE8QECC89B"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
