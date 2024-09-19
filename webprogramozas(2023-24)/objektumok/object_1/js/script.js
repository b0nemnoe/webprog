let user = {
    firstname:"John", 
    lastname:"Smith"
};

user.firstname = "Paul";
delete user.firstname
console.log(`${user.firstname} ${user.lastname}`);
