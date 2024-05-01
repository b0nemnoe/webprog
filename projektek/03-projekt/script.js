const url = "https://vvri.pythonanywhere.com/api/courses";
const studenturl = "https://vvri.pythonanywhere.com/api/students";
const contentdiv = document.getElementById("content");

let kurzusid = 0;
let diaknev = 0;
let kurzusnev = 0;
let students = [];
let allstudents = [];

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
};
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
};
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
        .then(course => {
            students = course.students;
            course.students.forEach(student => {
                let name = student.name;
                let id = student.id;
                let cid = course.id;
                let studentdiv = document.getElementById("studentdiv");


                const row = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.textContent = name;

                const td2 = document.createElement("td");

                const btnEdit = document.createElement("button");
                btnEdit.classList.add("fa-solid", "fa-user-plus");
                btnEdit.id = "editStudentName";
                btnEdit.onclick = () => {
                    EditStudent(id, name, cid);
                };
                const td3 = document.createElement("td");
                const btnDel = document.createElement("button");
                btnDel.classList.add("fa-regular", "fa-square-minus");
                btnDel.id = "deleteStudent";
                btnDel.onclick = () => {
                    deleteStudent(id, cid);
                };
                td2.appendChild(btnEdit);
                td3.appendChild(btnDel);

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);

                studentdiv.appendChild(row);
                
            });})
};

function StudentsPostMethod(courseId) {
    let studentName = document.getElementById("newStudentName").value;
    const studentdiv = document.getElementById("studentdiv");
    let studentExists = false;
    
    // Ellenőrizze, hogy a diák már létezik-e a kurzusban
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
                students.push({ name: studentName.toLowerCase() }); // Frissítsük a students tömböt
                alert(`A diák sikeresen hozzáadva!`);
                GetMethodStudents(courseId);
        })
        .catch(error => console.log("Hiba történt: " + error));
    } else {
        alert(`Ez a diák már létezik a kurzusban!`);
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
};

function EditStudent(studentId, currentName, courseId) {
    let newname = prompt("Adja meg a diák új nevét:", currentName);
    if (newname) {
        fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": newname,
                "course_id": courseId
            })
        })
        .then(response => response.json())
        .then(alert(`A diák neve sikeresen módosítva!`))
        .then(() => GetMethodStudents(courseId))
        .catch(error => console.log("Hiba történt: " + error));
    }
};

function deleteStudent(studentId, courseId) {
    if (confirm("Biztosan törölni szeretné ezt a diákot?")) {
        fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: 'DELETE'
        })
        .then(alert(`A diák sikeresen törölve!`))
        .then(() => GetMethodStudents(courseId))
        .catch(error => console.log('Hiba történt: ' + error));
    }
}



// Add a click event listener to the close button
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}
//megjelenjen alapértelmezetten
GetMethod();
