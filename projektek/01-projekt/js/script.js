function DarkModeToggle()
{


    if(btn.checked)
    {
        const ikon = document.getElementById("dm");
        ikon.src = "img/darkmode.png";

        var cim = document.getElementById("cim");
        cim.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        cim.style.borderColor = "black";
        cim.style.color = "white";

        var hetk = document.getElementById("hetkoznap");
        hetk.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        hetk.style.borderColor = "black";
        hetk.style.color = "white";

        var hetv = document.getElementById("hetvege");
        hetv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        hetv.style.borderColor = "black";
        hetv.style.color = "white";
        
        var szabadido = document.querySelector(".szabadido");
        for (let i = 0; i < szabadido.length; i++) {
            szabadido[i].style.borderColor = "black";
        }
        
        var tanora = document.querySelector(".tanora");
        for (let i = 0; i < tanora.length; i++) {
            tanora[i].style.borderColor = "black";
        }
    }
    else if(!btn.checked)
    {
        const ikon = document.getElementById("dm");
        ikon.src = "img/lightmode.png";

        var cim = document.getElementById("cim");
        cim.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        cim.style.borderColor = "white";
        cim.style.color = "black";

        var hetk = document.getElementById("hetkoznap")
        hetk.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        hetk.style.borderColor = "white";
        hetk.style.color = "black";

        var hetv = document.getElementById("hetvege")
        hetv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        hetv.style.borderColor = "white";
        hetv.style.color = "black";

        var tanora = document.querySelector(".tanora");
        for (let i = 0; i <= tanora.length; i++)
        {
            tanora[i].style.borderColor = "white";
        }

        var szabadido = document.querySelector(".szabadido");
        for (let i = 0; i <= szabadido.length; i++)
        {
            szabadido[i].style.borderColor = "white";
        }
    }

}