<?php   
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-bussiness.php");
    $_POST = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER['REQUEST_METHOD']){
        //Metodo de Guardar
        case 'POST':  
            //Verifico si el usuario existe
            $empresa = Bussiness::verificarEmpresa($_POST['correoEmpresa'], $_POST['passwordEmpresa']);
            
            if($empresa){
                $resultado = array(
                    "codigoResultado"=>1,
                    "mensaje"=>"Usuario Autenticado",
                    "tokenEmpresa"=>sha1(uniqid(rand(), true))
                );
                $_SESSION["tokenEmpresa"] = $resultado["tokenEmpresa"];
                setcookie("tokenEmpresa",$resultado["tokenEmpresa"], time()+ (60*60*24*31), "/");
                setcookie("empresaCode",$empresa["empresaCode"], time()+ (60*60*24*31), "/");
                echo json_encode($resultado);
            break;
            }else{
                setcookie("tokenEmpresa",$resultado["tokenEmpresa"], time()+ (60*60*24*31), "/");
                setcookie("empresaCode","", time()-1, "/");
                echo '{"codigoResultado":0,"mensaje":"Usuario/Password Incorrecto"}';
            }
            
        break;

    }

    

?>