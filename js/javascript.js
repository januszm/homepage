/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive"
        document.getElementById("icon").innerHTML="&#10006;";
    } else {
        x.className = "topnav";
        document.getElementById("icon").innerHTML="&#9776;";
    }
}

