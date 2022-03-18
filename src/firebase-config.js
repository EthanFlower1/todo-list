import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk136qn7RvlbEhp49ZUVcM1QCvDSzyRPM",
  authDomain: "simple-todo-26288.firebaseapp.com",
  projectId: "simple-todo-26288",
  storageBucket: "simple-todo-26288.appspot.com",
  messagingSenderId: "963569821680",
  appId: "1:963569821680:web:57cd538b0297f27fd69f35",
  measurementId: "G-EJ1FT6SMTW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();