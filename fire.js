import Firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export function fire(callback) {
  if (Firebase.apps.length === 0) {
    Firebase.initializeApp(firebaseConfig);
  }

  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(null, user);
    } else {
      Firebase.auth()
        .signInAnonymously()
        .catch((error) => {
          callback(error);
        });
    }
  });
}

export function getTodoLists() {}
