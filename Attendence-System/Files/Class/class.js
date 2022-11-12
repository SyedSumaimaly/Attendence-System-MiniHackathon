import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { collection, addDoc, doc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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
const db = getFirestore(app);

const ClassTiming = document.getElementById("ClassTmings");
const TeacherName = document.getElementById("TeacherName");
const SectionName = document.getElementById("SectionName");
const CourseName = document.getElementById("CourseName");
const BatchNumber = document.getElementById("BatchNumber");
const ScheduleName = document.getElementById("ScheduleName");



const submitClass = async () => {
  try {
    const docRef = await addDoc(collection(db, "classes"), {
      Timing: ClassTiming.value,
      Instrustor: TeacherName.value,
      Section: SectionName.value,
      Course: CourseName.value,
      Batch: BatchNumber.value,
      Schedule: ScheduleName.value,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const SubmitBtn = document.getElementById("Class_submit");
SubmitBtn.addEventListener("click", submitClass)

const backDashboard = document.getElementById("back_dashboard_btn");
backDashboard.addEventListener("click", () => {
  event.preventDefault();
  window.location = "../dashboard.html"
})