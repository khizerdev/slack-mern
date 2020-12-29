import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeLTp6dTcYyMgrDVboABJihWUR9xEKTeg",
  authDomain: "mern-slack-40cbc.firebaseapp.com",
  projectId: "mern-slack-40cbc",
  storageBucket: "mern-slack-40cbc.appspot.com",
  messagingSenderId: "338035413292",
  appId: "1:338035413292:web:0eb2eceb1a17b7aaa1dc89",
  measurementId: "G-590MGEX50L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth,provider}
  export default db
