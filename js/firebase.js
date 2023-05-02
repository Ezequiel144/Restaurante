
    // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGR6DcGg7c-RK4n0xMRj9pXnN9jGvKsRE",
    authDomain: "restaurante-bd-8684d.firebaseapp.com",
    projectId: "restaurante-bd-8684d",
    storageBucket: "restaurante-bd-8684d.appspot.com",
    messagingSenderId: "363830553329",
    appId: "1:363830553329:web:81ab193366d1125e039750",
    measurementId: "G-YV755GQN70"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function saveEat(title,arc,text,price,tipo){
    console.log(title,arc,text,price,tipo);
}
