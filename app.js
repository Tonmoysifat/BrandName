AOS.init();
var icon = document.getElementById("toggle-btn");
if (localStorage.getItem("Theme") == null) {
    localStorage.setItem("Theme", "light");
}
let localData = localStorage.getItem("Theme");
if (localData == "light") {
    icon.innerHTML = "Dark";
    // icon.src="images/moon.png";
    document.body.classList.remove("dark-theme");
    nevi.style.backgroundColor = "white";
}
else if (localData == "dark") {
    icon.innerHTML = "Light";
    // icon.src="images/sun.png";
    document.body.classList.add("dark-theme");
    nevi.style.backgroundColor = "";
}
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        // icon.src="images/sun.png";
        nevi.style.backgroundColor = "";
        icon.innerHTML = "Light";
        localStorage.setItem("Theme", "dark");
    } else {
        // icon.src="images/moon.png";
        nevi.style.backgroundColor = "white";
        icon.innerHTML = "Dark";
        localStorage.setItem("Theme", "light");
    }

}
let x= setInterval(() => {
    let date=new Date();
    let time= date.toDateString()+","+date.toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
}, 1000);
