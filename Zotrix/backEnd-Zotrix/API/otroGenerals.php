<?php

    header("Content-Type: application/json");
    include_once("../class/class-sucursales.php");

    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Sucursal::obtenerSucursales($_GET['id']);
            }else{        
            }
            
        break;

        //Actualizar comentario
        case 'PUT':
            //actualizar

        break;

        case 'DELETE':
            //Eliminar
        break;
    }

    

?>