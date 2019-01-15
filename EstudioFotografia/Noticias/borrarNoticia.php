<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $id = $_POST['eliminar'];
            require_once("../connectDB.php"); //Utilizo require_once porque comprueba primero si al base de datos está importada y, si no la está, la importa.
            $db = connectDB(); //Nos conectamos a la Base de Datos a través de la función del archivo connectCB.php

            //Consulta para eliminar una noticia
            $borrar = "DELETE FROM noticias WHERE id = $id"; 
            //Aqui redirigimos de nuevo al index y guardamos en la url que cogeremos con GET el resultado de la consulta.
            header('Location: ../noticias.php?success='.$borrar);
            if ($db->query($borrar) === TRUE) {
                echo "Se ha eliminado correctamente";
            }else{
                echo "Error deleting record: " . $db->error;
            } 
        ?>
    </body>
</html>
