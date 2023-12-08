const btn = document.getElementById("btn");

btn.addEventListener("click", ()=> 
{
    console.log(document.getElementById("txt").value)
    document.getElementById("txt").value = "";
});