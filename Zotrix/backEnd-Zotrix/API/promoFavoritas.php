<?php

    header("Content-Type: application/json");
    include_once("../class/class-promoFavoritas.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            PromoFavoritas::guardarPromosFavoritas($_GET['id'], $_GET['idProducto']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                PromoFavoritas::obtenerPromoFavoritas($_GET['id']);
            }else{
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //promocion
        break;

        case 'DELETE':
            //Eliminar
            PromoFavoritas::eliminarPromoFavorita($_GET['id'], $_GET['idPromocion']);
        break;
    }

    

?>