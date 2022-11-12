import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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

const Name = document.getElementById("Sname");
const FatherName = document.getElementById("Fname");
const R_number = document.getElementById("rollNumber");
const ContactNumber = document.getElementById("contactNumber");
const Cnic_Number = document.getElementById("cnicNumber");
const CourseName = document.getElementById("courseName");
const ClassAssign = document.getElementById("classAssign");
const Img = document.getElementById("uploadImg");



const submitStudent = async () => {
    try {
        const docRef = await addDoc(collection(db, "Students"), {
            Name: Name.value,
            FatherName: FatherName.value,
            Roll_Number: R_number.value,
            Contact: ContactNumber.value,
            Cnic: Cnic_Number.value,
            Course: CourseName.value,
            Class: ClassAssign.value,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const SubmitBtn = document.getElementById("Student_submit");
SubmitBtn.addEventListener("click", submitStudent)

const backDashboard = document.getElementById("back_dashboard_btn");
backDashboard.addEventListener("click", () => {
    event.preventDefault();
    window.location = "../dashboard.html"
})