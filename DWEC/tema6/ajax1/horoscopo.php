<?php
header('Content-Type: text/html');
header("Access-Control-Allow-Origin: *");
sleep(2);
if ($_GET['cod']==1)
  echo "<h1>Aries:</h1> Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás.";
if ($_GET['cod']==2)
  echo "<h1>Tauro:</h1> Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión.";
if ($_GET['cod']==3)
  echo "<h1>Géminis:</h1> Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar.";
if ($_GET['cod']==4)
  echo "<h1>Cancer:</h1> Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable.";
if ($_GET['cod']==5)
  echo "<h1>Leo:</h1> Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones.";
if ($_GET['cod']==6)
  echo "<h1>Virgo:</h1> Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos.";
if ($_GET['cod']==7)
  echo "<h1>Libra:</h1> Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas.";
if ($_GET['cod']==8)
  echo "<h1>Escorpio:</h1> Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero.";
if ($_GET['cod']==9)
  echo "<h1>Sagitario:</h1> Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan.";
if ($_GET['cod']==10)
  echo "<h1>Capricornio:</h1> Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá.";
if ($_GET['cod']==11)
  echo "<h1>Acuario:</h1> Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas.";
if ($_GET['cod']==12)
  echo "<h1>Piscis:</h1> Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo.";
?>