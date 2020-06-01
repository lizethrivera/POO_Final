<?php

    header("Content-Type: application/json");
    include_once("../class/class-user.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $usuario = new Users(
                $_POST['nombreUsuario'],
                $_POST['apellidoUsuario'],
                $_POST['imgUsuario'],
                $_POST['correoUsuario'],
                $_POST['passwordUsuario']
            );

            $usuario->guardarUsuario();


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Users::obtenerUsuario($_GET['id']);
            }else{
                Users::obtenerUsuarios();
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //actualizar
            $usuario = new Users(
                $_PUT['nombreUsuario'],
                $_PUT['apellidoUsuario'],
                $_PUT['imgUsuario'],
                $_PUT['correoUsuario'],
                $_PUT['passwordUsuario']
            );

            $usuario->editarEmpresa($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Users::eliminarUsuario($_GET['id']);
        break;
    }

    

?>