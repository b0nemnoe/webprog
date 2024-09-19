let obj = {
    name:"John",
}


function isEmpty(obj)
{
    return Object.keys(obj).length === 0
}

console.log(isEmpty({}))
console.log(obj)
