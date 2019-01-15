<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Estudio Fotografía</title>
        <link href="indexStyle.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <h1>Index</h1>
        <div class="navbar">
            <a href="index.php">Inicio</a>
            <div class="dropdown">
                <button class="dropbtn">Noticias 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="Noticias/insertarNoticia.php">Nueva</a>  <!--http://www.pablin.com.ar/computer/cursos/phpmysql/masregistrosbd.htm-->
                    <a href="Noticias/buscarNoticia.php">Buscar</a>
                    <a href="Noticias/borrarNoticia.php">Borrar</a>
                </div>
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Clientes 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="Clientes/nuevoCliente.php">Nuevo</a>
                    <a href="Clientes/buscarCliente.php">Buscar</a>
                </div>
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Trabajos 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="Trabajos/nuevoTrabajo.php">Nuevo</a>
                    <a href="Trabajos/buscarTrabajo.php">Buscar</a>
                    <a href="Trabajos/borrarTrabajo.php">Borrar</a>
                </div>
            </div> 
            <a href="Citas/citas.php">Citas</a>
            <a href="Contacto/contacto.php">Contacto</a>
            <a href="Acceder/acceder.php">Acceder</a>
        </div>
        
        
        
        <!--Imagen aleatoria de los trabajos-->
        
        <br><br>
        <div align="center">
            <?php

                /*Crear una array con las imagenes aleatorias con su ubicación*/
                $rndimg[0]='RandomImages/img_1.jpg';
                $rndimg[1]='RandomImages/img_2.jpg';
                $rndimg[2]='RandomImages/img_3.jpg';
                $rndimg[3]='RandomImages/img_4.jpg';
                $rndimg[4]='RandomImages/img_5.jpg';

                /* Le damos el número de imágenes comenzando desde 0 */
                $i=rand(0,4);

                /* Mostramos la imagen aleatoria */
                echo '<img src="'.$rndimg[$i].'">';
            ?>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        
        
        <!--Sección con las tres últimas noticias publicadas-->
        
        <!--Footer de libre contenido-->
        
        <footer>
 
        </footer>

    </body>
</html>
