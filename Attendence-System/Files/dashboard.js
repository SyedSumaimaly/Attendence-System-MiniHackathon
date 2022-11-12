const addClassBtn = document.getElementById("add_class_btn");
const addStudentBtn = document.getElementById("add_student_btn");


addClassBtn.addEventListener("click", () => {
    event.preventDefault()
    window.location.href = "./Class/index.html"
})

addStudentBtn.addEventListener("click", () => {
    event.preventDefault()
    window.location.href = "./Student/index.html"
})

const markAttandance = document.getElementById("mark_attandance_btn");
markAttandance.addEventListener("click", () => {
    event.preventDefault();
    window.location = "./Attendance/index.html"
})