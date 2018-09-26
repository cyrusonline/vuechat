import firebase from 'firebase';
import firestore from 'firebase/firestore';

var config = {
    apiKey: "AIzaSyD5dkuXT-pyqZDVPqXOSk4iV0tnVv5enVs",
    authDomain: "vuechat-8831b.firebaseapp.com",
    databaseURL: "https://vuechat-8831b.firebaseio.com",
    projectId: "vuechat-8831b",
    storageBucket: "",
    messagingSenderId: "593631724280"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots:true})
export default firebase.firestore()