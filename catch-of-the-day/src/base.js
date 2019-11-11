import Rebase from "re-base"; /*it is like a react firebase specif package 
that is gonna allows us to mirror our state to our firebase changes */
import firebase from "firebase"; //official firebase package

// we need to configure our application
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4Gt_W-42Vzm49O2AUhQhjvZoFQ7DEX4o",
    authDomain: "catch-of-the-day-andressat.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-andressat.firebaseio.com"
});

// next, we need to create our rebase
const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// This is a default export
export default base;
