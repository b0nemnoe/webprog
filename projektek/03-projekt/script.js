const url = "https://vvri.pythonanywhere.com/api/courses";
const studenturl = "https://vvri.pythonanywhere.com/api/students";
const contentdiv = document.getElementById("content");

let kurzusid = 0;
let diaknev = 0;
let kurzusnev = 0;
let students = [];

function GetMethod() {
    const contentdiv = document.getElementById("content");
    // Clear existing cards
    while (contentdiv.firstChild) {
        contentdiv.removeChild(contentdiv.firstChild);
    }
    fetch(url)
        .then(response => response.json())
        .then(courses => {
            courses.forEach(course => {
                const item = document.createElement("div")
                item.dataset.id = course.id;
                item.classList.add("card");

                const courseNameElement = document.createElement("p")
                courseNameElement.classList.add("card-title");
                courseNameElement.textContent = course.name;

                const idnumber = document.createElement("p");
                idnumber.classList.add("szamozas");
                idnumber.textContent = course.id;
/*
                const studentAddText = document.createElement("input");
                studentAdd.type = "text";
                studentAdd.classList.add("studentAdd");

                const studentAddBtn = document.createElement("button");
                studentAddBtn.classList.add("studentAddBtn");
                studentAddBtn.textContent = "";
*/

                /*fa-solid fa-plus*/

                item.appendChild(courseNameElement);
                item.appendChild(idnumber);
                // Kurzus részleteinek megjelenítése egy kattintásra
                item.addEventListener("click", () => {
                    fetch(`https://vvri.pythonanywhere.com/api/courses/${course.id}`)
                        .then(response => response.json())
                        .then(course => {
                            kurzusid = course.id;
                            kurzusnev = course.name;
                            handleCardClick(course.id, course.name);
                        })
                        .catch(error => console.log("Hiba történt: " + error));
                });
                

                contentdiv.appendChild(item);
            });
        })
        .catch(error => console.log("Hiba történt: " + error));
}

function newCourseNameAppear() {
    const newCourseName = document.getElementById('newCourseName');
    const creatNewCourse = document.getElementById('createCourse');
    if (newCourseName.style.display === 'none' || newCourseName.style.display === '') {
        newCourseName.style.display = 'block';
        creatNewCourse.style.display = 'block';
    } else {
        newCourseName.style.display = 'none';
        creatNewCourse.style.display = 'none';
    }
}



function PostMethod() {
    const newCourseName = document.getElementById('newCourseName');
    if (newCourseName.value !== "") {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": newCourseName.value,
            })
        }).then(response => response.json())
        .then(course => {
            GetMethod();
            alert(`Kurzus sikeresen létrehozva!`);
            newCourseName.value = "";
            // After the post request, get the updated courses
            
        })
        .catch(error => console.log("Hiba történt: " + error));
    }
}

//gethmethod for the students

function GetMethodStudents(courseId) {
    const studentdiv = document.getElementById("studentdiv");
    studentdiv.innerHTML = "";
    students = [];
    // Clear existing cards
    while (studentdiv.firstChild) {
        studentdiv.removeChild(studentdiv.firstChild);
    }
    fetch(`https://vvri.pythonanywhere.com/api/courses/${courseId}`)
        .then(response => response.json())
        .then(student => {
            students = student.students;
            studentdiv.innerHTML = students.map((student) => `<tr><td>${student.name}</td></tr>`).join(``);  
        });
    };

    

    function StudentsPostMethod(courseId/*, studentName*/) {
        let studentName = document.getElementById("newStudentName").value;
        const studentdiv = document.getElementById("studentdiv");
        let studentExists = false;
        students.forEach(student => {
            if (student.name.toLowerCase() === studentName.toLowerCase()) {
                studentExists = true;
            }
        });
        if (!studentExists) {
            fetch(`https://vvri.pythonanywhere.com/api/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": studentName,
                    "course_id": courseId
                })
            }).then(response => response.json())
            .then(student => {
                    const newstudent = `<tr><td>${studentName}</td></tr>`;
                    studentdiv.innerHTML += newstudent;
            })
            .catch(error => console.log("Hiba történt: " + error));
        } else {
            alert(`Ez a diák már létezik!!`);
        }
    }

function handleCardClick(courseId, coursename) {
    GetMethodStudents(courseId) 
    const modal = document.getElementById("myModal");
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    //az adatok amiket megjelenít
    document.getElementById("modalContent").innerHTML = "Kurzus neve: " + coursename;
    const newStudentName = document.getElementById("newStudentName").value;
    const studentAddBtn = document.getElementById("studentAddBtn");
    diaknev = "";
    diaknev = document.getElementById("newStudentName").value;
}



// Add a click event listener to the close button
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

GetMethod();