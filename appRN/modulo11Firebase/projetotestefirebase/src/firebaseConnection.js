import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
  
};

if (firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
