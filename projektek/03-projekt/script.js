const url = "https://vvri.pythonanywhere.com/api/courses";
const studenturl = "https://vvri.pythonanywhere.com/api/students";
const contentdiv = document.getElementById("content");

let kurzusid = 0;
let diaknev = 0;
let kurzusnev = 0;
let students = [];
let allstudents = [];

async function GetMethod() {
    const contentdiv = document.getElementById("content");

    // torli a megjelent adatokat, hogy ne jelenjenek meg tobbszor
    while (contentdiv.firstChild) {
        contentdiv.removeChild(contentdiv.firstChild);
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const courses = await response.json();
        courses.forEach(course => createCourseCard(course, contentdiv));
    } catch (error) {
        console.error("Hiba történt: ", error);
    }
}

function createCourseCard(course, container) {
    const item = document.createElement("div");
    item.dataset.id = course.id;
    item.classList.add("card");

    const courseNameElement = document.createElement("p");
    courseNameElement.classList.add("card-title");
    courseNameElement.textContent = course.name;

    item.appendChild(courseNameElement);

    // kurzus adatok click
    item.addEventListener("click", () => fetchCourseDetails(course.id));

    container.appendChild(item);
}

//kurzusadatok fetchelese
async function fetchCourseDetails(courseId) {
    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/courses/${courseId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const course = await response.json();
        kurzusid = course.id;
        kurzusnev = course.name;
        handleCardClick(course.id, course.name);
    } catch (error) {
        console.error("Hiba történt: ", error);
    }
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
//postmethod a kurzusok lekerese
async function PostMethod() {
    const newCourseName = document.getElementById('newCourseName');
    const courseNameValue = newCourseName.value.trim();
    
    if (courseNameValue !== "") {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": courseNameValue,
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const course = await response.json();
            alert(`Kurzus sikeresen létrehozva!`);
            newCourseName.value = "";
            GetMethod();  // Refresh the list of courses
        } catch (error) {
            console.error("Hiba történt: ", error);
            alert("Hiba történt a kurzus létrehozása során.");
        }
    } else {
        alert("Kérjük, adjon meg egy kurzusnevet.");
    }
}
//gethmethod a diakok lekerese
async function GetMethodStudents(courseId) {
    const studentDiv = document.getElementById("studentdiv");
    studentDiv.innerHTML = ""; // Clear existing content

    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/courses/${courseId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const course = await response.json();
        const students = course.students;

        students.forEach(student => {
            const { id, name } = student;
            const courseId = course.id;

            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const editCell = document.createElement("td");
            const editButton = document.createElement("button");
            editButton.classList.add("fa-solid", "fa-user-plus");
            editButton.id = "editStudentName";
            editButton.onclick = () => {
                EditStudent(id, name, courseId);
            };
            editCell.appendChild(editButton);
            row.appendChild(editCell);

            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("fa-regular", "fa-square-minus");
            deleteButton.id = "deleteStudent";
            deleteButton.onclick = () => {
                deleteStudent(id, courseId);
            };
            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            studentDiv.appendChild(row);
        });
    } catch (error) {
        console.error("Hiba történt: ", error);
    }
}


async function StudentsPostMethod(courseId) {
    const studentNameInput = document.getElementById("newStudentName");
    const studentName = studentNameInput.value.trim();
    const studentDiv = document.getElementById("studentdiv");

    if (studentName === "") {
        alert("Kérjük, adjon meg egy diáknevet.");
        return;
    }

    try {
        // diakok fetchelese
        const response = await fetch('https://vvri.pythonanywhere.com/api/students');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allStudents = await response.json();

        // ellenorzi hogy letezik e
        let studentExists = allStudents.some(student => student.name.toLowerCase() === studentName.toLowerCase());

        if (studentExists) {
            alert("Ez a diák már létezik egy kurzusban!");
            return;
        }

        // ha nem letezik adja hozza
        const postResponse = await fetch('https://vvri.pythonanywhere.com/api/students', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": studentName,
                "course_id": courseId
            })
        });

        if (!postResponse.ok) {
            throw new Error(`HTTP error! status: ${postResponse.status}`);
        }

        const newStudent = await postResponse.json();

        // frissiti a table-t
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = studentName;
        row.appendChild(nameCell);

        const editCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.classList.add("fa-solid", "fa-user-plus");
        editButton.id = "editStudentName";
        editButton.onclick = () => {
            EditStudent(newStudent.id, studentName, courseId);
        };
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("fa-regular", "fa-square-minus");
        deleteButton.id = "deleteStudent";
        deleteButton.onclick = () => {
            deleteStudent(newStudent.id, courseId);
        };
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        studentDiv.appendChild(row);

        // diaktomb frissitese
        students.push({ id: newStudent.id, name: studentName.toLowerCase() });

        alert("A diák sikeresen hozzáadva!");
        studentNameInput.value = ""; // torli az input mezot

    } catch (error) {
        console.error("Hiba történt: ", error);
        alert("Hiba történt a diák hozzáadása során.");
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

async function EditStudent(studentId, currentName, courseId) {
    const newname = prompt("Adja meg a diák új nevét:", currentName).trim();

    if (!newname) {
        alert("A név nem lehet üres!");
        return;
    }

    if (newname === currentName) {
        alert("Az új név megegyezik a jelenlegi névvel.");
        return;
    }

    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": newname,
                "course_id": courseId
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const updatedStudent = await response.json();
        alert("A diák neve sikeresen módosítva!");
        GetMethodStudents(courseId);
    } catch (error) {
        console.error("Hiba történt: ", error);
        alert("Hiba történt a diák módosítása során.");
    }
}


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



//modal bezarasgomb
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value.toLowerCase();
  const courses = document.querySelectorAll('.card');

  courses.forEach(course => {
    const courseTitle = course.querySelector('.card-title').textContent.toLowerCase();

    if (courseTitle.includes(inputValue)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
});

//megjelenjen alapértelmezetten
GetMethod();
