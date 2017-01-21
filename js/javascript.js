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


/*Scroll to selected section*/
$(function Scroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*Buttons actions*/


