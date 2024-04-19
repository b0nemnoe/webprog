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
                        displayCourseDetails(course.id);
                    });

                    contentdiv.appendChild(item);
                });
            })
            .catch(error => console.log("Hiba történt: " + error));
});
        // Kurzus részleteinek megjelenítése
        function displayCourseDetails(courseId) {
            const courseDetailsUrl = `https://vvri.pythonanywhere.com/api/courses/${courseId}`;
            fetch(courseDetailsUrl)
                .then(response => response.json())
                .then(course => {
                    alert(`Kurzus neve: ${course.name}\nTémakör: ${course.students}`);
                })
                .catch(error => console.log("Hiba történt: " + error));
        }


const courseToDelete = document.getElementById("courseToDelete").value;
let idToDelete;

        //kijelölt kurzus törlése 
        function deleteCourse(courseToDelete) {
            const deleteUrl = `https://vvri.pythonanywhere.com/api/courses/${idToDelete}`;
            fetch(deleteUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
                
            })
            .then(response => response.json())
            .then(course => {
                let found = false;
                for (let i = 0; i < course.length; i++) {
                if (course[i].name == courseToDelete) {
                    idToDelete = course[i].id;
                    console.log(idToDelete);
                    console.log(course[i].name);
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("A kiválasztott kurzus nem található a listában!");
                return;
            }
            })
            .catch(error => console.log("Hiba történt: " + error));
        };
