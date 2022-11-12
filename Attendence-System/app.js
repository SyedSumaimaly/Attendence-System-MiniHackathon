import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { collection, doc,  getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD_LvukveUa7YOk7Yotk4W5MuSnKeqQrjM",
    authDomain: "attendance-system-minihack.firebaseapp.com",
    projectId: "attendance-system-minihack",
    storageBucket: "attendance-system-minihack.appspot.com",
    messagingSenderId: "254796721211",
    appId: "1:254796721211:web:b0e2a3335f9a480d48401e"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

//  const register = () => {
//     console.log(auth);
//     const email = document.getElementById("emailVal");
//     const password = document.getElementById("passVal");
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//       .then((userCredential) => {
//         let uid = userCredential.user.uid;
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage)
//       });
//   }
//   const btn = document.getElementById("register-btn")
//   if(btn){
//     btn.addEventListener("click", register);
//   }

  const login = () => {
    const l_email = document.getElementById("l_email");
    const l_password = document.getElementById("l_pass");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, l_email.value, l_password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location = "Files/dashboard.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  
  const loginBtn = document.getElementById("Sign_In");
  if(loginBtn){
    loginBtn.addEventListener("click", login);
  }