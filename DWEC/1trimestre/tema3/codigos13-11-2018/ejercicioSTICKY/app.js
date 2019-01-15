$(document).ready(Start);

function Start()
{
	$(document).scroll(Control);
	$("input[type=button]").eq(0).click(Bajar);
	$("input[type=button]").eq(1).click(Subir);
}

function Bajar()
{
   //$(document).height;
   $(document).scrollTop($(document).height());	

}

function Subir()
{
	// $(document).scrollTop(0);
	$("html,body").animate({scrollTop:0},5000);
}

function Control()
{
	 let altura=$(document).scrollTop();
     // $("div").text(altura);
     
     if(altura>$("div").position().top){
     	$("div").css("top",0);
     	$("div").css("position","fixed");
     }else{
     	$("div").css("top",300);
     	$("div").css("position","absolute");
     }
}
