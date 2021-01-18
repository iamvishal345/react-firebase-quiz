import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCYSSE01Mv5wKb0I-PycrQqej2j2VHV74I",
  authDomain: "firequiz-3161d.firebaseapp.com",
  databaseURL: "https://firequiz-3161d.firebaseio.com",
  projectId: "firequiz-3161d",
  storageBucket: "firequiz-3161d.appspot.com",
  messagingSenderId: "25316201675",
  appId: "1:25316201675:web:275c1c9d247e6b9c29774e",
  measurementId: "G-DL5Z24YHQL",
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();

export const saveScoreDocument = async (name, score) => {
  const scoreRef = firestore.collection("scores");
  try {
    await scoreRef.add({ name, score });
    return true;
  } catch (err) {
    console.log("Error Saving Score", err.message);
  }
};

export const getScores = async () => {
  const scoreRef = firestore.collection("scores");
  try {
    const res = await scoreRef.get();
    return res.docs.map((docs) => {
      const { name, score } = docs.data();
      return { name: name, score: score };
    });
  } catch (err) {
    console.log("Error Saving Score", err.message);
  }
};
