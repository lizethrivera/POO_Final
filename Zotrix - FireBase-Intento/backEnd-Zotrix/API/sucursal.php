<?php

    header("Content-Type: application/json");
    include_once("../class/class-sucursales.php");
    
    include_once("../class/class-database.php");
    $database = new Database();
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

            echo $sucursal->guardarSucursal($database->getDB(),$_GET['id']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Sucursal::obtenerSucursal($database->getDB(),$_GET['id'],$_GET['idSucursal']);
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