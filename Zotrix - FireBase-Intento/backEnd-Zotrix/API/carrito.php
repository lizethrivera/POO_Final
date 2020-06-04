<?php

    header("Content-Type: application/json");
    include_once("../class/class-carrito.php");
    include_once("../class/class-database.php");
    $database = new Database();
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $Carrito = new Carrito(
                $_POST['cantidad'],
                $_POST['fechaCompra'],
                $_POST['estadoOrden'],
                $_POST['precio']

            );

            echo $Carrito->guardarPedido($database->getDB(),$_GET['id'], $_GET['productoID']);

        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Carrito::obtenerOrdenes($_GET['id']);
            }else{
                Carrito::obtenerOrdenes();
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //actualizar
            $sucursal = new Sucursal(
                $_PUT['nombreSucursal'],
                $_PUT['altitudSucursal'],
                $_PUT['latitudSucursal'],
                $_PUT['tipoSucursal']
            );

            $sucursal->editarSucursal($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Carrito::eliminarPedido($_GET['id'], $_GET['idPedido']);
        break;
    }

    

?>