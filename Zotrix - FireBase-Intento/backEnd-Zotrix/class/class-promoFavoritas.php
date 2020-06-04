<?php   
    class PromoFavoritas{

        public function getData(){
            // /$result['porcentajeDescuento'] = $this->porcentajeDescuento;
            $result['Promociones'] = $promoCode;
            return $result;

        }




        public static function guardarPromosFavoritas($db, $userCode, $promoCode){
            $promoFavoritas = $promoCode;

            $result = $db->getReference('usuarios')
                    ->getChild($userCode)
                    ->getChild('Informacion Otra')
                    ->getChild('Promociones Favoritas')
                    ->push($promoFavoritas);

            
            if($result->getKey() != null)
                    return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
            else
                    return '{"mensaje": "Error al almacenar el registro"}';
            //Genero un codigo aleatorio para la empresa

        }

        public function eliminarPromoFavorita($userCode, $promoCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["informacionOtra"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $promoFavoritas = $informacion[$j]["promocionesFavoritas"];
                            for($k=0; $k<sizeof($promoFavoritas); $k++){
                                if($promoFavoritas[$k] == $promoCode){
                                    $index = $k;
                        
                                    array_splice($usuarios[$i]["informacionOtra"][$j]["promocionesFavoritas"], $index, 1);

                                    $archivoUsuario = fopen('../data/usuarios.json', 'w');
                                    fwrite($archivoUsuario, json_encode($usuarios));
                                    fclose($archivoUsuario);

                                    echo("Empresa seguida eliminada");
                                break;
                        
                                }
                            }
                }
                
            }

        }

        //echo json_encode($siguiendo);
        }


        public static function obtenerPromoFavoritas($userCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            
            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["informacionOtra"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $promoFavorita = $informacion[$j]["promocionesFavoritas"];
                                
                    }
                    
                }
            }

        for($i=0; $i<sizeof($empresas); $i++){
            if(array_key_exists("productos", $empresas[$i])){
                $productos = $empresas[$i]["productos"];
                for($j=0; $j<sizeof($productos); $j++){
                    if(array_key_exists("promocionProducto", $productos[$j])){
                        if(empty($productos[$j]["promocionProducto"])){
                            //echo ("No hay productos en promocion!");
                        break;

                        }else{
                            
                            $promocion = $productos[$j]["promocionProducto"];
                            for($k=0; $k<sizeof($promocion); $k++){
                                if(in_array($promocion[$k]["promocionCode"], $promoFavorita)){
                                    //echo("Hola, si estoy");
                                    $misPromos = $productos[$j];
                                    echo json_encode($misPromos);
                                }
                            }
                            
                        //break;
                        if(empty($promoFavorita)){
                            echo("Usted no tiene promociones favoritas");
                        break;
                        }    
                        }
                        //echo json_encode($misPromos);
                    }
                }
            }
        }
        

        //echo json_encode($promoFavorita);

    }

    }

?>