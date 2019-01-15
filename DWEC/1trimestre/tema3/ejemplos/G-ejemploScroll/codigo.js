$(document).scroll(CambiarColor);
function colorScroll()
{
	if ($(document).scrollTop() > 50) {
      $("body").css("background-color","red");
    }else{
      $("body").css("background-color","inherit");
    }
}


