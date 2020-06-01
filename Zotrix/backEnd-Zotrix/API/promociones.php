<?php

    header("Content-Type: application/json");
    include_once("../class/class-promociones.php");
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

            $promocion->guardarPromocion($_GET['id']);


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

            $promocion->editarPromocion($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Promocion::eliminarPromocion($_GET['id']);
        break;
    }

    

?>