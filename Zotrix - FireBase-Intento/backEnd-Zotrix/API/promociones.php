<?php

    header("Content-Type: application/json");
    include_once("../class/class-promociones.php");
    include_once("../class/class-database.php");
    $database = new Database();

    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $promocion = new Promocion(
                $_POST['precioOferta'],
                $_POST['fechaInicioPromocion'],
                $_POST['fechaFinalPromocion'],
                $_POST['codigoSucursal']
            );

            echo $promocion->guardarPromocion($database->getDB(),$_GET['id'],$_GET['idProducto']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Promocion::obtenerPromocionesPorSucursales($_GET['id']);
            }else{
                Promocion::obtenerProductosPromocion();
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //promocion
            $promocion = new Promocion(
                $_PUT['precioOferta'],
                $_PUT['fechaInicioPromocion'],
                $_PUT['fechaFinalPromocion'],
                $_PUT['codigoSucursal']
            );

            echo $promocion->editarPromocion($database->getDB(),$_GET['idEmpresa'],$_GET['idProduct'],$_GET['idPromo']);
        break;

        case 'DELETE':
            //Eliminar
            Promocion::eliminarPromocion($_GET['id']);
        break;
    }

    

?>