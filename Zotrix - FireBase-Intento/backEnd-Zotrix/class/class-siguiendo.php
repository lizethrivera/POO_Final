<?php   
    class Siguiendo{
        private $codigoEmpresas;

        public static function guardarSiguiendo($db, $userCode, $empresaCode){
            $empresaFavorita = $empresaCode;

            $result = $db->getReference('usuarios')
                    ->getChild($userCode)
                    ->getChild('Informacion Otra')
                    ->getChild('Empresas Favoritas')
                    ->push($empresaFavorita);

            
            if($result->getKey() != null)
                    return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
            else
                    return '{"mensaje": "Error al almacenar el registro"}';
            //Genero un codigo aleatorio para la empresa


        }

        public function eliminarEmpresaSiguiendo($userCode, $bussinessCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["informacionOtra"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["siguiendo"];
                            for($k=0; $k<sizeof($siguiendo); $k++){
                                if($siguiendo[$k] == $bussinessCode){
                                    $index = $k;
                        
                                    array_splice($usuarios[$i]["informacionOtra"][$j]["siguiendo"], $index, 1);

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


        public static function obtenerEmpresasSiguiendo($userCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            
            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["informacionOtra"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["siguiendo"];
                            for($k=0; $k<sizeof($empresas); $k++){
                                if(in_array($empresas[$k]["empresaCode"], $siguiendo)){
                                    $seguidos = $empresas[$k];
                                    echo json_encode($seguidos);
                                //break;
                                }
                                if(empty($siguiendo)){
                                    echo("Usted no sigue a ninguna empresa!");
                                break;
                                }
                            
                    }
                }
                
            }



        }
    }
        /**
         * Get the value of codigoEmpresas
         */ 
        public function getCodigoEmpresas()
        {
                return $this->codigoEmpresas;
        }

        /**
         * Set the value of codigoEmpresas
         *
         * @return  self
         */ 
        public function setCodigoEmpresas($codigoEmpresas)
        {
                $this->codigoEmpresas = $codigoEmpresas;

                return $this;
        }
    }







?>