<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-user.php");
    
    $_POST = json_decode(file_get_contents('php://input'), true);
    //$_PUT = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            $usuario = Users::verificarUsuario($_POST['correoUsuario'], $_POST['passwordUsuario']);

            if($usuario){
                $resultado = array(
                    "codigoResultado"=>1,
                    "mensaje"=>"Usuario Autenticado",
                    "token"=>sha1(uniqid(rand(), true))
                );
                $_SESSION["token"]=$resultado["token"];
                setcookie("token",$resultado["token"], time()+ (60*60*24*31), "/");
                setcookie("userCode",$usuario["userCode"], time()+ (60*60*24*31), "/");
                setcookie("nombreUsuario",$usuario["nombreUsuario"], time()+ (60*60*24*31), "/");
                setcookie("apellidoUsuario",$usuario["apellidoUsuario"], time()+ (60*60*24*31), "/");
                setcookie("imgUsuario",$usuario["imgUsuario"], time()+ (60*60*24*31), "/");
                setcookie("correoUsuario",$usuario["correoUsuario"], time()+ (60*60*24*31), "/");
                
                echo json_encode($resultado);
            }else{
                setcookie("token",$resultado["token"], time()+ (60*60*24*31), "/");
                setcookie("nombreUsuario","", time()-1, "/");
                setcookie("apellidoUsuario","", time()-1, "/");
                setcookie("imgUsuario","", time()-1, "/");
                setcookie("correoUsuario","", time()-1, "/");

                echo '{"codigoResultado":0,"mensaje":"Usuario/Password Incorrecto"}';
            }
            
                
                
                
            
            
        
        
        //echo json_encode($_POST);
        break;
    }

?>