<?php

    header("Content-Type: application/json");
    include_once("../class/class-sucursales.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $sucursal = new Sucursal(
                $_POST['nombreSucursal'],
                $_POST['altitudSucursal'],
                $_POST['latitudSucursal'],
                $_POST['tipoSucursal']
            );

            $sucursal->guardarSucursal($_GET['id']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Sucursal::obtenerSucursal($_GET['id']);
            }else{
                Sucursal::obtenerSucursales();
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
            Sucursal::eliminarSucursal($_GET['id']);
        break;
    }

    

?>