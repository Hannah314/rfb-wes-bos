import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGBg-FxuF4ZDsuWaHDzzcYmUQ5trg4tuE",
    authDomain: "rfb-wes-bos.firebaseapp.com",
    databaseURL: "https://rfb-wes-bos.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;