<?php
        class Sucursal{
                private $nombreSucursal;
                private $altitudSucursal;
                private $latitudSucursal;
                private $tipoSucursal;

        public function __construct(
                $nombreSucursal,
                $altitudSucursal,
                $latitudSucursal,
                $tipoSucursal
        ){
                $this->nombreSucursal = $nombreSucursal;
                $this->altitudSucursal = $altitudSucursal;
                $this->latitudSucursal = $latitudSucursal;
                $this->tipoSucursal = $tipoSucursal;

        }

        //Guardo sucursales, le mando el codigo de la empresa y comparo

        public function getData(){
                $result['nombreSucursal'] = $this->nombreSucursal;
                $result['altitudSucursal'] = $this->altitudSucursal;
                $result['latitudSucursal'] = $this->latitudSucursal;
                $result['tipoSucursal'] = $this->tipoSucursal;
                return $result;

        }

        public function guardarSucursal($db, $id){
                $empresas = $this->getData();

                $result = $db->getReference('empresas')
                        ->getChild($id)
                        ->getChild('sucursales')
                        ->push($empresas);

                
                if($result->getKey() != null)
                        return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                else
                        return '{"mensaje": "Error al almacenar el registro"}';
                //Genero un codigo aleatorio para la empresa
        


        }

        //Obtengo sucursales de dicha empresa.
        public static function obtenerSucursales(){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $producto = array();

                for($i=0; $i<sizeof($empresas); $i++){
                        //echo("Entro");
                        if(array_key_exists("sucursales", $empresas[$i])){
                                //echo("Si hay");
                                $sucursal = $empresas[$i]["sucursales"];
                                for($j=0; $j<sizeof($sucursal); $j++){
                                        $sucursales[] = $sucursal[$j]; 
                                }
                        }
                        
                }        

                echo json_encode($sucursales);
        }


        public static function obtenerSucursal($db, $codigoEmpresa, $sucursalCode){
                $result = $db->getReference('empresas')
                                ->getChild($codigoEmpresa)
                                ->getChild('sucursales')
                                ->getChild($sucursalCode)
                                ->getValue();
                
                echo json_encode($result);

        }


        public function editarSucursal($sucursalCode){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $product = null;
                $resultado = array();

                for($i=0; $i<sizeof($empresas); $i++){
                        //echo("Entro");
                        if(array_key_exists("sucursales", $empresas[$i])){
                                //echo("Existe chiqui");
                                $sucursales = $empresas[$i]["sucursales"];
                                for($j=0; $j<sizeof($sucursales); $j++){
                                        if($sucursales[$j]['sucursalCode'] == $sucursalCode){
                                                //echo("ILIANA");
                                                $index = $j;
                                                $sucursal = array(
                                                        "sucursalCode"=>$sucursalCode,
                                                        "nombreSucursal"=>$this->nombreSucursal,
                                                        "altitudSucursal"=>$this->altitudSucursal,
                                                        "latitudSucursal"=>$this->latitudSucursal,
                                                        "tipoSucursal"=>$this->tipoSucursal
                                                );
                                                $empresas[$i]["sucursales"][$index] = $sucursal;

                                                $archivoProducto = fopen('../data/empresas.json', 'w');
                                                fwrite($archivoProducto, json_encode($empresas));
                                                fclose($archivoProducto);

                                                $archivoSucursal = fopen('../data/sucursal.json', 'w');
                                                fwrite($archivoSucursal, json_encode($sucursal));
                                                fclose($archivoSucursal);
                                        break;

                                        }
                                }
                }
                }
                

                //echo json_encode($sucursales);
                echo '{"codigoResultado": 1,"mensaje": "Usuario actualizada con exito"}';
        }


        public static function eliminarSucursal($sucursalCode){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $product = null;
                $resultado = array();

                for($i=0; $i<sizeof($empresas); $i++){
                        //echo("Entro");
                        if(array_key_exists("sucursales", $empresas[$i])){
                                //echo("Existe chiqui");
                                $sucursales = $empresas[$i]["sucursales"];
                                for($j=0; $j<sizeof($sucursales); $j++){
                                        if($sucursales[$j]['sucursalCode'] == $sucursalCode){
                                                //echo("ILIANA");
                                                $index = $j;
                                                
                                                array_splice($empresas[$i]["sucursales"], $index, 1);

                                                $archivoProducto = fopen('../data/empresas.json', 'w');
                                                fwrite($archivoProducto, json_encode($empresas));
                                                fclose($archivoProducto);
                                        break;

                                        }
                                }
                }
                }

                echo '{"codigoResultado": 1,"mensaje": "Usuario eliminada con exito"}';
                
                }
                /**
                 * Get the value of nombreSucursal
                 */ 
                public function getNombreSucursal()
                {
                                return $this->nombreSucursal;
                }

                /**
                 * Set the value of nombreSucursal
                 *
                 * @return  self
                 */ 
                public function setNombreSucursal($nombreSucursal)
                {
                                $this->nombreSucursal = $nombreSucursal;

                                return $this;
                }

                /**
                 * Get the value of altitudSucursal
                 */ 
                public function getAltitudSucursal()
                {
                                return $this->altitudSucursal;
                }

                /**
                 * Set the value of altitudSucursal
                 *
                 * @return  self
                 */ 
                public function setAltitudSucursal($altitudSucursal)
                {
                                $this->altitudSucursal = $altitudSucursal;

                                return $this;
                }

                /**
                 * Get the value of tipoSucursal
                 */ 
                public function getTipoSucursal()
                {
                                return $this->tipoSucursal;
                }

                /**
                 * Set the value of tipoSucursal
                 *
                 * @return  self
                 */ 
                public function setTipoSucursal($tipoSucursal)
                {
                                $this->tipoSucursal = $tipoSucursal;

                                return $this;
                }

                /**
                 * Get the value of latitudSucursal
                 */ 
                public function getLatitudSucursal()
                {
                                return $this->latitudSucursal;
                }

                /**
                 * Set the value of latitudSucursal
                 *
                 * @return  self
                 */ 
                public function setLatitudSucursal($latitudSucursal)
                {
                                $this->latitudSucursal = $latitudSucursal;

                                return $this;
                }
        }














?>