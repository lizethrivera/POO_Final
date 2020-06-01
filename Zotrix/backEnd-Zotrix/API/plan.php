<?php

    header("Content-Type: application/json");
    include_once("../class/class-plan.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Guardamos
            $planes = new Plan(
                $_POST['nombrePlan'],
                $_POST['almacenamiento'],
                $_POST['productos'],
                $_POST['precioPlan']
            );

            $planes->guardarPlan();


        break;

        case 'GET':
            if(isset ($_GET['id'])){
                Plan::obtenerEmpresasPlan($_GET['id']);
            }else{
                if(isset ($_GET['codigo']))
                    Plan::obtenerPlan($_GET['codigo']);            
            }
            
        break;

        //Actualizar comentario
        case 'PUT':
            //actualizar
            $planes = new Plan($_POST['nombrePlan'],
                    $_PUT['almacenamiento'],
                    $_PUT['productos'],
                    $_PUT['precioPlan']
            );

            $planes->editarPlan($_GET['id']);
        break;

        case 'DELETE':
            //Eliminar
            Plan::eliminarPlan($_GET['id']);
        break;
    }

    

?>