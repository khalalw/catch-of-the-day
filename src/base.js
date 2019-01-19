import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGUe92SWr66b-DbbDwoSKBMsad3m5hVVs",
  authDomain: "catch-of-the-day-kw.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kw.firebaseio.com",
  projectId: "catch-of-the-day-kw",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
