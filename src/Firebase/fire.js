import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBHE8brLSudS7eQftViHetW1gFDVJNNn2I",
    authDomain: "login-react-530c8.firebaseapp.com",
    databaseURL: "https://login-react-530c8.firebaseio.com",
    projectId: "login-react-530c8",
    storageBucket: "login-react-530c8.appspot.com",
    messagingSenderId: "321494628526",
    appId: "1:321494628526:web:26bae28e765055aa9e553f"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;