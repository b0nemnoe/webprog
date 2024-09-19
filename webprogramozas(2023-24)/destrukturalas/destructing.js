/* 1.Feladat
Kérdés:
Milyen változóneveket lehet használni tömb esetén destrukturálás esetén? Tetszőleges, egyedi változóneveket lehet használni, ami mutatja, hogy milyen adatot tárol!
A változók sorrendje fontos-e? Igen, fontos!*/
console.log("1.feladat\n");
let car = ['Ford', 'Mustang', 2022, 'blue'];
            let [brand, model, year, color] = car;

            console.log("Brand:" + brand);
            console.log("Model:" + model);
            console.log("Year:" + year);
            console.log("Color:" + color);

/*2. feladat
Kérdés:
Milyen változóneveket lehet használni objektum esetén destrukturálás esetén? Olyan változónevet használhatunk, amit tartalmaz az object a tulajdonságai között!
A változók sorrendje fontos-e? Nem, nem fontos!*/         
console.log("2.feladat\n");
let book = 
            {
                title: 'JavaScript: The Good Parts',
                author: 'Douglas Crockford',
                publicationYear: 2008,
                language: 'English'
            };

            let {title: bookTitle, author: bookAuthor, publicationYear, language} = book; 

            console.log("Title:" + bookTitle);
            console.log("Author:" + bookAuthor);
            console.log("Publication year:" + publicationYear);
            console.log("Language" + language);

/*3. feladat*/
console.log("3.feladat\n");
let student = 
            {
                name: 'John Doe',
                age: 20,
                grade: 'B',
                subjects: ['Math', 'English', 'History']
            };

            
            
            function printStudentInfo(student) 
            {
                let {name, age, grade, subjects} = student;
                console.log("Name:" + name);
                console.log("Age:" + age);
                console.log("Geade:" + grade);
                console.log("Subjects: " + subjects);
            }
            printStudentInfo(student);
