<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
sleep(2);
if($_GET['cod']==1)
{
  $datos["signo"]="Aries";
  $datos["desde"]="21/03";
  $datos["hasta"]="20/04";
  $datos["prediccion"]="Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás.";

}else if($_GET['cod']==2){
  $datos["signo"]="Tauro";
  $datos["desde"]="21/04";
  $datos["hasta"]="20/05";
  $datos["prediccion"]="Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión.";

}else if($_GET['cod']==3){
  $datos["signo"]="Geminis";
  $datos["desde"]="21/05";
  $datos["hasta"]="20/06";
  $datos["prediccion"]="Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar.";
  
}else if($_GET['cod']==4){
  $datos["signo"]="Cancer";
  $datos["desde"]="21/06";
  $datos["hasta"]="22/07";
  $datos["prediccion"]="Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable.";
  
}else if($_GET['cod']==5){
  $datos["signo"]="Leo";
  $datos["desde"]="23/07";
  $datos["hasta"]="22/08";
  $datos["prediccion"]="Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones.";
  
}else if($_GET['cod']==6){
  $datos["signo"]="Virgo";
  $datos["desde"]="23/08";
  $datos["hasta"]="21/09";
  $datos["prediccion"]="Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos.";
  
}else if($_GET['cod']==7){
  $datos["signo"]="Libra";
  $datos["desde"]="22/09";
  $datos["hasta"]="22/10";
  $datos["prediccion"]="Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas.";
  
}else if($_GET['cod']==8){
  $datos["signo"]="Escorpio";
  $datos["desde"]="23/10";
  $datos["hasta"]="22/11";
  $datos["prediccion"]="Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero.";
  
}else if($_GET['cod']==9){
  $datos["signo"]="Sagitario";
  $datos["desde"]="23/11";
  $datos["hasta"]="21/12";
  $datos["prediccion"]="Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan.";
  
}else if($_GET['cod']==10){
  $datos["signo"]="Capricornio";
  $datos["desde"]="22/12";
  $datos["hasta"]="20/01";
  $datos["prediccion"]="Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá.";
  
}else if($_GET['cod']==11){
  $datos["signo"]="Acuario";
  $datos["desde"]="21/01";
  $datos["hasta"]="18/02";
  $datos["prediccion"]="Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas.";

}else if($_GET['cod']==12){
  $datos["signo"]="Piscis";
  $datos["desde"]="19/02";
  $datos["hasta"]="20/03";
  $datos["prediccion"]="Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo.";
  
}else{
  $datos["signo"]="error";
}

echo json_encode($datos);  

?>