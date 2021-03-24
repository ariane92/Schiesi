import * as React from 'react';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAwk3cuhOVaKu6uKrO3w76w0Q6oh6J_4M8",
    authDomain: "schiesi-68474.firebaseapp.com",
    databaseURL: "https://schiesi-68474.firebaseio.com",
    projectId: "schiesi-68474",
    storageBucket: "schiesi-68474.appspot.com",
    messagingSenderId: "752747247942",
    appId: "1:752747247942:web:282b96b306b1d1072dcd47",
    measurementId: "G-8PFZXC9CXJ"
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default () => {
  return {firebase, auth}
}
