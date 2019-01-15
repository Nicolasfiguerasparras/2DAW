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
            // Definir variables vacías
            $titularErr = "";
            $titular = "";

            //Comprobar que se ha enviado el formulario
            if($_SERVER["REQUEST_METHOD"] == "POST"){

                //Comprobar si se ha introducido algo en cada uno de los apartados

                if(empty($_POST["titular"])){
                    $titularErr = "Es necesario introducir un titular";
                }
            }
        ?>
        
        <div class="padre container">
            <div class="row">
                <h2>Buscar noticia</h2>
            </div>
            <div class="row">
                <form method="post" action="">  
                    Titular: <input type="text" name="titular" value="<?php echo $titular;?>">
                    <span class="error"><?php echo $titularErr;?></span>
                    </div>
                    <br><br>
                    <input type="submit" name="submit" value="Submit">  
                </form>
            </div>
        </div>

    </body>
</html>