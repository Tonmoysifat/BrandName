AOS.init();
var icon=document.getElementById("toggle-btn");
if ( localStorage.getItem("Theme")==null ) {
    localStorage.setItem("Theme","light");
}

let localData=localStorage.getItem("Theme");
if (localData == "light") {
    icon.innerHTML="Dark";
    // icon.src="images/moon.png";
    document.body.classList.remove("dark-theme");
}
else if (localData == "dark") {
    icon.innerHTML="Light";
    // icon.src="images/sun.png";
    document.body.classList.add("dark-theme");
}
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
    // icon.src="images/sun.png";
    icon.innerHTML="Light";
    localStorage.setItem("Theme","dark");
} else {
    // icon.src="images/moon.png";
   icon.innerHTML="Dark";
    localStorage.setItem("Theme","light");
}
}
