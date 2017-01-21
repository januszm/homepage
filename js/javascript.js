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

function hireFunction(){
	document.getElementById('textarea').value = "I'm interested in hiring you! Please contact me ASAP.";

}

/*Scrolling to anchro*/

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

/*Buttons actions*/


