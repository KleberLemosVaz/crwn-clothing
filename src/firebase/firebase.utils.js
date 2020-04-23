import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDWXpo67HFoA06-7ptJtbGACNy6Oq2TstI",
    authDomain: "crwn-db-93b1b.firebaseapp.com",
    databaseURL: "https://crwn-db-93b1b.firebaseio.com",
    projectId: "crwn-db-93b1b",
    storageBucket: "crwn-db-93b1b.appspot.com",
    messagingSenderId: "376192996127",
    appId: "1:376192996127:web:5a8eeecafb05e38933162a",
    measurementId: "G-PXFWVB133N"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase