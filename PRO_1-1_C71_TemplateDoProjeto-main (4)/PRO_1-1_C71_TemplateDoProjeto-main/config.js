import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  
  apiKey: "AIzaSyAZReHExigJPHKv1BeKe3zPlprBSrzkMbQ",
  authDomain: "projeto71-83405.firebaseapp.com",
  projectId: "projeto71-83405",
  storageBucket: "projeto71-83405.appspot.com",
  messagingSenderId: "727843940718",
  appId: "1:727843940718:web:0230c5960635a99e71797f"


};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
