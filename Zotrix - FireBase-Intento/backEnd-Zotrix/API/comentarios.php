<?php

    header("Content-Type: application/json");
    include_once("../class/class-comentarios.php");
    include_once("../class/class-database.php");
    $database = new Database();
    
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $comentario = new Comentarios(
                $_POST['comentario'],
                $_POST['usuarioComentario'],
                $_POST['uimgComentario']
            );
            echo $comentario->guardarComentario($database->getDB(),$_GET['id'],$_GET['idProducto']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Comentarios::obtenerComentario($database->getDB(),$_GET['id'],$_GET['idProducto'], $_GET['idComentario']);
            }else{
                Comentarios::obtenerComentarios();
            }
            
        break;

        //Actualizar comentario
        case 'PUT':
            //actualizar
            $comentario = new Comentarios(
                $_PUT['comentario'],
                $_PUT['usuarioComentario'],
                $_PUT['uimgComentario']
            );

            $comentario->editarComentario($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Comentarios::eliminarComentario($_GET['id']);
        break;
    }

    

?>