$(document).ready(Start);


function Start()
{
	//let random=Math.floor(Math.random()*3+1);

	//1 SOLUCION
	//$("body").css("background-image","url('imagenes/"+random+".jpg')");

    //2 SOLUCION
	// if(random==1){
 //      $("body").css("background-image","url('imagenes/1.jpg')");		
	// }else if(random==2){
	//   $("body").css("background-image","url('imagenes/2.jpg')");			

	// }else{
 //      $("body").css("background-image","url('imagenes/3.jpg')");				
	// }

    

    let url=["imagenes/1.jpg","imagenes/2.jpg","imagenes/3.jpg"];
    let random=Math.floor(Math.random()*url.length);
    $("body").css("background-image","url('"+url[random]+"')");
    










}