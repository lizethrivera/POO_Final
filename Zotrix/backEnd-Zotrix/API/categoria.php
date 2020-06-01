<?php

    header("Content-Type: application/json");
    include_once("../class/class-categorias.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $categorias = new Categoria(
                $_POST['nombreCategoria'],
                $_POST['descripcionCategoria']
            );

            $categorias->guardarCategoria();


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Categoria::obtenerProductosPorCategoria($_GET['id']);
            }else{
                Categoria::obtenerCategorias();
            }
            
        break;

        //Actualizar comentario
        case 'PUT':
            //actualizar
            $categorias = new Categoria(
                $_PUT['nombreCategoria'],
                $_PUT['descripcionCategoria']
            );

            $categorias->editarCategoria($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Categoria::eliminarCategoria($_GET['id']);
        break;
    }

    

?>