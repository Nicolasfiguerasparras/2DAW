CONTROL DE USUARIOS:
    - Restringir acceso a partes de la aplicación a usuario no administrador
    - Controlar sesión abierta
    - Controlar tiempo de caducidad de la sesión
_____________________________________________________________________________________________________

VEHICULOS:
    + Introducir nuevos vehículos (solo admin)
    + Modificar vehículos (solo admin)
    + Buscar vehículo (solo admin) por
        * Marca
        * Modelo 
        * Matrícula 
    + Listar todos los vehículos

RESERVAS:
    + Introducir reservas nuevas (solo admin)
    + Buscar reserva por (si es cliente, solo verá las suyas)
        * Nombre de cliente
        * Matricula del vehículo
        * Fecha de inicio
    + Ver listado con todas las reservas (si es cliente, solo verá las suyas)
    + Borrar reservas canceladas

CONTROL DE USUARIOS:
    +  Al acceder a la app, se muestra formulario de acceso
        * Nick
        * Contraseña
        * OpenSession
    + Menu
        * Clientes
        * Vehículos
        * Reservas
        * Factura
        * Cerrar sesión

CLIENTES:
    + Introducir nuevos clientes (solo admin)
    + Listar todos los clientes (solo admin)
    + Buscar clientes por nombre (solo admin)
    + Ver factura  
        * Solo se cobrarán las reservas pasadas
        * Se deberá mostrar precio individual de cada reserva
        * Se deberá mostrar el precio total a pagar