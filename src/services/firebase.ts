import firebase from 'firebase/app';

import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCu14641GK7z4Eypj6w8Q5CrYIQfW2e0So",
  authDomain: "lucasgoncalvespage.firebaseapp.com",
  projectId: "lucasgoncalvespage",
  storageBucket: "lucasgoncalvespage.appspot.com",
  messagingSenderId: "757079534749",
  appId: "1:757079534749:web:3d9dcca573bf662bbeb874"
};


firebase.initializeApp(firebaseConfig);
  
export const firestore = firebase.firestore();
export { firebase };