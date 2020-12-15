import Firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: "todo-test-app-ug.firebaseapp.com",
  projectId: "todo-test-app-ug",
  storageBucket: "todo-test-app-ug.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
if (Firebase.apps.length === 0) {
  Firebase.initializeApp(firebaseConfig);
}
function fire() {}

export default fire;
