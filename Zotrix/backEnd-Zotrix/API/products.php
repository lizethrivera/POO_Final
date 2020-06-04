<?php

    header("Content-Type: application/json");
    include_once("../class/class-product.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $producto = new Product(
                $_POST['nombreProducto'],
                $_POST['descripcionProducto'],
                $_POST['imgProducto'],
                $_POST['precioProducto'],
                $_POST['stockProducto'],
                $_POST['categoriaProducto']

                
            );

            $producto->guardarProducto($_GET['id']);


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Product::obtenerProducto($_GET['id']);
            }else{
                Product::obtenerProductos();
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //actualizar
            $producto = new Product(
                $_PUT['nombreProducto'],
                $_PUT['descripcionProducto'],
                $_PUT['imgProducto'],
                $_PUT['precioProducto'],
                $_PUT['stockProducto'],
                $_PUT['categoriaProducto']
            );

            $producto->editarProducto($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Product::eliminarProducto($_GET['id']);
        break;
    }

    

?>