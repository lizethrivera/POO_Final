<?php   
    class Siguiendo{
        private $codigoEmpresas;




        public static function guardarSiguiendo($userCode, $productCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            
            for($i=0; $i<sizeof($usuarios);$i++){
                if($usuarios[$i]['userCode'] == $userCode){
                        for($j=0; $j<sizeof($usuarios[$i]["informacionOtra"]); $j++){
                            
                            $usuarios[$i]["informacionOtra"][$j]["siguiendo"][] = $productCode;
                            $archivoProducto = fopen('../data/usuarios.json', 'w');
                            fwrite($archivoProducto, json_encode($usuarios));
                            fclose($archivoProducto);
                            //$usuario = $usuarios[$i];
                        }
                
                break;
                }
                        
                //
        }

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