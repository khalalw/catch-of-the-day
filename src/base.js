import Rebase from "re-base";
import firebase from "firebase";
import config from "./config";

const firebaseApp = firebase.initializeApp({
  apiKey: config.firebaseKey,
  authDomain: "catch-of-the-day-kw.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kw.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
