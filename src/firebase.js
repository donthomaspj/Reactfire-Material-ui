import firebase from 'firebase';
import {firebaseConfig} from './firebaseConfig';
import 'firebase/database';

firebase.initializeApp(
    firebaseConfig
)

export default firebase;