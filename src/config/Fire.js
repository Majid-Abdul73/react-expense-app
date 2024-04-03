import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgc95ps6M7pwkKZN-ayjEH_Q-RFUI8qOU",
    authDomain: "expense-tracker-5fb64.firebaseapp.com",
    projectId: "expense-tracker-5fb64",
    storageBucket: "expense-tracker-5fb64.appspot.com",
    messagingSenderId: "161992686747",
    appId: "1:161992686747:web:958550c0c65dc16a52da3e",
};

const fire = firebase.initializeApp(config);
export default fire;