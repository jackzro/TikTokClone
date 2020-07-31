import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7z-e1sZOWxhFVqlgmp9kLwzL8XmITQAU",
  authDomain: "tiktokclone-ba23b.firebaseapp.com",
  databaseURL: "https://tiktokclone-ba23b.firebaseio.com",
  projectId: "tiktokclone-ba23b",
  storageBucket: "tiktokclone-ba23b.appspot.com",
  messagingSenderId: "761963674204",
  appId: "1:761963674204:web:90e6020d1c23d1e305c499",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
