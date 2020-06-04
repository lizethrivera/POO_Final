<?php

    header("Content-Type: application/json");
    include_once("../class/class-siguiendo.php");
    
    include_once("../class/class-database.php");
    $database = new Database();
    
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            echo Siguiendo::guardarSiguiendo($database->getDB(),$_GET['id'], $_GET['idEmpresa']);
            


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Siguiendo::obtenerEmpresasSiguiendo($_GET['id']);
            }else{
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':

        break;

        case 'DELETE':
            //Eliminar
            Siguiendo::eliminarEmpresaSiguiendo($_GET['id'], $_GET['idEmpresa']);
        break;
    }

    

?>