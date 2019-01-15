<!DOCTYPE HTML>  
<html>
    <head>
        <meta charset="UTF-8">
        <link href="noticiasStyle.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">	
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    </head>
    <body>  

        <?php
            //Conectar a la Base de Datos
            require_once('../functions/conectarDb.php');
            $db = connectDb();
            
            // Definir variables vacías
            $fechaErr = $titularErr = $imagenErr = $contenidoErr = "";
            $fecha = $titular = $contenido = $imagen = "";

            //Comprobar que se ha enviado el formulario
            if($_SERVER["REQUEST_METHOD"] == "POST"){

                //Comprobar si se ha introducido algo en cada uno de los apartados

                if(empty($_POST["titular"])){
                    $titularErr = "Es necesario introducir un titular";
                }

                if(empty($_POST["contenido"])){
                    $contenidoErr = "Es necesario introducir un contenido";
                }

                if(empty($_POST["imagen"])){
                    $imagenErr = "Es necesario introducir una imagen";
                }

                if(empty($_POST["fecha"])){
                    $fechaErr = "Es necesario introducir una fecha";
                }
            }
        ?>
        
        <div class="padre container">
            <div class="row">
                <h2>Insertar noticia</h2>
            </div>
            <div class="row">
                
                <form method="post" action="">  
                    ID: <input type="text" name="idNoticias" placeholder="<?php echo($id); ?>"disabled>
                    
                    Titular: <input type="text" name="titular" value="<?php echo $titular;?>">
                    <span class="error"><?php echo $titularErr;?></span>
                    </div>
                    <br><br>
                    <div class="row">

                    Contenido: <textarea name="contenido" rows="5" cols="40"><?php echo $contenido;?></textarea>
                    <span class="error"><?php echo $contenidoErr;?></span>
                    </div>
                    <br><br>
                    <div class="row">

                    Sube una imagen: <input type="file" name="imagen" accept="image/*" value="<?php echo $imagen;?>">
                    <span class="error"><?php echo $imagenErr;?></span>
                    </div>
                    <br><br>
                    <div class="row">

                    Fecha a partir de la que estará visible la noticia: <input type="date" name="fecha" value="<?php echo $fecha;?>">
                    <span class="error"><?php echo $fechaErr;?></span>
                    <br><br>

                    <input type="submit" name="submit" value="Submit">  
                    </div>
                </form>
            </div>
        </div>

    </body>
</html>