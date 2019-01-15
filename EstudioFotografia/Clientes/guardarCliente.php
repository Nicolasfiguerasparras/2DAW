
<?php
    //Con esta función, importamos el archivo especificado que contiene la conexion a la base de datos y la variable $db
    require_once('../connectDB.php');
    $db = connectDb();

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $direccion = $_POST['direccion'];
    $tlf1 = $_POST['tlf1'];
    $tlf2 = $_POST['tlf2'];
    $nick = $_POST['nick'];
    $pass = $_POST['pass'];
    $accion = $_POST['accion'];

    if($accion == 'nuevo'){
        //SE PUEDE REUTILIZAR 
        $query = "INSERT INTO clientes (nombre, apellidos, direccion, telefono1, telefono2, nick, contrasena) VALUES ('$nombre', '$apellidos', '$direccion', '$tlf1', '$tlf2', '$nick', '$pass')";
    } else {
        $query = "UPDATE clientes 
            SET nombre = '$nombre', 
                apellidos = '$apellidos', 
                direccion = '$direccion', 
                telefono1 = '$tlf1', 
                telefono2 = '$tlf2', 
                nick = '$nick', 
                contrasena = '$contrasena' 
            WHERE id = $id";
    }
    $result = mysqli_query($db, $query) or die(mysqli_error());

    if(!$result) {
        print_r(mysqli_error_list($db));
        mysqli_report(true);
        echo($query);
        exit;
    }

    mysqli_close($db);
    //Aqui redirigimos de nuevo al index y guardamos en la url que cogeremos con GET el resultado de la consulta.
    header('Location: ../pages/clientes.php?success='.$result);
?>