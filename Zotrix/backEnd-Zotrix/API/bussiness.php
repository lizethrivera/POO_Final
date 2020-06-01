<?php

    header("Content-Type: application/json");
    include_once("../class/class-bussiness.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $empresa = new Bussiness(
                $_POST['nombreEmpresa'],
                $_POST['logoEmpresa'],
                $_POST['bannerEmpresa'],
                $_POST['correoEmpresa'],
                $_POST['passwordEmpresa'],
                $_POST['direccionEmpresa'],
                $_POST['latitudEmpresa'],
                $_POST['altitudEmpresa'],
                $_POST['soporteEmpresa'],
                $_POST['numeroEmpresa'],
                $_POST['facebookEmpresa'],
                $_POST['instagramEmpresa'],
                $_POST['youtubeEmpresa'],
                $_POST['planEmpresa']
            );

            $empresa->guardarEmpresa();


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Bussiness::obtenerEmpresa($_GET['id']);
            }else{
                Bussiness::obtenerEmpresas();
            }
            
        break;

        //Actualizar Usuario
        case 'PUT':
            //actualizar
            $empresa = new Bussiness(
                $_PUT['nombreEmpresa'],
                $_PUT['logoEmpresa'],
                $_PUT['bannerEmpresa'],
                $_PUT['correoEmpresa'],
                $_PUT['passwordEmpresa'],
                $_PUT['direccionEmpresa'],
                $_PUT['latitudEmpresa'],
                $_PUT['altitudEmpresa'],
                $_PUT['soporteEmpresa'],
                $_PUT['numeroEmpresa'],
                $_PUT['facebookEmpresa'],
                $_PUT['instagramEmpresa'],
                $_PUT['youtubeEmpresa'],
                $_PUT['planEmpresa']
            );

            $empresa->editarEmpresa($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Bussiness::eliminarEmpresa($_GET['id']);
        break;
    }

    

?>