import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyCjRSsqN_tLuCvk7ENP0V7gtExXof5G3o8",
  authDomain: "restaurantapp-16eb8.firebaseapp.com",
  projectId: "restaurantapp-16eb8",
  storageBucket: "restaurantapp-16eb8.appspot.com",
  messagingSenderId: "910368411746",
  appId: "1:910368411746:web:ca5fe2acb2f518020f813b",
  measurementId: "G-HTQVRX8VC8"
  };

    firebase.initializeApp(firebaseConfig);
  