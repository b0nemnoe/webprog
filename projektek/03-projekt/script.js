const url = "https://vvri.pythonanywhere.com/api/courses";

document.getElementById("getAllCourses").addEventListener("click", () => {
    // Kurzusok lekérdezése és listázása
    fetch(url)
        .then(response => response.json())
        .then(courses => {
            const contentdiv = document.getElementById("content");

            courses.forEach(course => {
                const item = document.createElement("div")
                item.classList.add("card");
                const courseNameElement = document.createElement("p")
                courseNameElement.classList.add("card-title");
                courseNameElement.textContent = course.name;

                item.appendChild(courseNameElement);
                // Kurzus részleteinek megjelenítése egy kattintásra
                item.addEventListener("click", () => {
                    fetch(`https://vvri.pythonanywhere.com/api/courses/${course.id}`)
                        .then(response => response.json())
                        .then(course => {
                            alert(`Kurzus neve: ${course.name}\nTémakör: ${course.students}`);
                        })
                        .catch(error => console.log("Hiba történt: " + error));
                });

                contentdiv.appendChild(item);
            });
        })
        .catch(error => console.log("Hiba történt: " + error));
});

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

document.getElementById("createCourse").addEventListener("click", () => {
    const newCourseName = document.getElementById('newCourseName')
    console.log(newCourseName);
    if (newCourseName.value !== "") {
        fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "name": newCourseName.value,
            })
        }).then(response => response.json())
        .then(course => {
            alert(`Kurzus sikeresen létrehozva!`);
            newCourseName.value = "";
        })
        .catch(error => console.log("Hiba történt: " + error))
    } else {
        alert("Nincs megadva kurzus neve vagy leírása!")
    }
});