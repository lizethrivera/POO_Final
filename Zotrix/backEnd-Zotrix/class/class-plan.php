<?php
    class Plan{
        private $nombrePlan;
        private $almacenamiento;
        private $productos;
        private $precioPlan;


        //Recibe los parametros que el servidor le envia
        public function __construct(
            $nombrePlan,
            $almacenamiento,
            $productos,
            $precioPlan
        ){
            $this->nombrePlan = $nombrePlan;
            $this->almacenamiento = $almacenamiento;
            $this->productos = $productos;
            $this->precioPlan = $precioPlan;

        }

        //Funcion para guardar el plan
        public function guardarPlan(){
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
            $planCode = substr(str_shuffle($permitted_chars), 0, 10);
                
                if(file_exists('../data/planes.json')){
                
                }else{
                echo ("Se esta creando el archivo, espere");
                fopen('../data/planes.json', 'w');
                fclose('../data/planes.json');

                echo("Archivo creado");
                }

            $contenidoArchivoPlan = file_get_contents('../data/planes.json');
            $planes = json_decode($contenidoArchivoPlan, true);

            $planes[] = array(
                "planCode"=>$planCode,
                "nombrePlan"=>$this->nombrePlan,
                "descripcion"=>array(array(
                    "almacenamiento"=>$this->almacenamiento,
                    "productos"=>$this->productos,
                )),
                "precioPlan"=>$this->precioPlan
                );

                $archivoPlanes = fopen('../data/planes.json', 'w');
                fwrite($archivoPlanes, json_encode($planes));
                fclose($archivoPlanes);

                echo '{"codigoResultado": 1,"mensaje": "Plan guardado con exito"}';
        }


        public static function obtenerPlanes(){
            $contenidoArchivoPlan = file_get_contents('../data/planes.json');

            echo($contenidoArchivoPlan);
        }


        public static function obtenerEmpresasPlan($nombrePlan){
            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            $plan = array();

            for($i=0; $i<sizeof($empresas); $i++){
                    if(array_key_exists("planEmpresa", $empresas[$i])){
                            //echo("Entro");
                            if($empresas[$i]["planEmpresa"] == $nombrePlan){
                                $plan[] = $empresas[$i];
                            }
                                    
                    }
            }

            echo json_encode($plan);
        }

        public static function obtenerPlan($planCode){
            $contenidoArchivoPlan = file_get_contents('../data/planes.json');
            $planes = json_decode($contenidoArchivoPlan, true);
            $plan = null;

            for($i=0; $i<sizeof($planes); $i++){
                if($planes[$i]["planCode"] == $planCode){
                    $plan = $planes[$i];
                break;
                }
            }

            echo json_encode($plan);
        }


        public function editarPlan($planCode){
            $contenidoArchivoPlan = file_get_contents('../data/planes.json');
            $planes = json_decode($contenidoArchivoPlan, true);

            for($i=0; $i<sizeof($planes); $i++){
                if($planes[$i]['planCode'] == $planCode){
                    echo("Si son iguales");
                    $plan = $planes[$i];
                    $index = $i;
                    
                    $plan = array(
                            "planCode"=>$planCode,
                            "nombrePlan"=>$this->nombrePlan,
                            "descripcion"=>array(array(
                                "almacenamiento"=>$this->almacenamiento,
                                "productos"=>$this->productos,
                            )),
                            "precioPlan"=>$this->precioPlan
                            );

                        $planes[$index] = $plan;
        
                        $archivoPlan = fopen('../data/planes.json', 'w');
                        fwrite($archivoPlan, json_encode($planes));
                        fclose($archivoPlan);
                        echo '{"codigoResultado": 1,"mensaje": "Empresa actualizada con exito"}';
                    break;
                
                    }
                
            }          


        }


        public function eliminarPlan($planCode){
            $contenidoArchivoPlan = file_get_contents('../data/planes.json');
            $planes = json_decode($contenidoArchivoPlan, true);

            for($i=0; $i<sizeof($planes); $i++){
                if($planes[$i]['planCode'] == $planCode){
                    echo("Si son iguales");
                    $plan = $planes[$i];
                    $index = $i;
                    
                    array_splice($planes, $index, 1);
        
                        $archivoPlan = fopen('../data/planes.json', 'w');
                        fwrite($archivoPlan, json_encode($planes));
                        fclose($archivoPlan);
                        echo '{"codigoResultado": 1,"mensaje": "Plan eliminada con exito"}';
                    break;
                
                    }
                
            }

            


        }
        

        /**
         * Get the value of nombrePlan
         */ 
        public function getNombrePlan()
        {
                return $this->nombrePlan;
        }

        /**
         * Set the value of nombrePlan
         *
         * @return  self
         */ 
        public function setNombrePlan($nombrePlan)
        {
                $this->nombrePlan = $nombrePlan;

                return $this;
        }

        /**
         * Get the value of almacenamiento
         */ 
        public function getAlmacenamiento()
        {
                return $this->almacenamiento;
        }

        /**
         * Set the value of almacenamiento
         *
         * @return  self
         */ 
        public function setAlmacenamiento($almacenamiento)
        {
                $this->almacenamiento = $almacenamiento;

                return $this;
        }

        /**
         * Get the value of productos
         */ 
        public function getProductos()
        {
                return $this->productos;
        }

        /**
         * Set the value of productos
         *
         * @return  self
         */ 
        public function setProductos($productos)
        {
                $this->productos = $productos;

                return $this;
        }

        /**
         * Get the value of precioPlan
         */ 
        public function getPrecioPlan()
        {
                return $this->precioPlan;
        }

        /**
         * Set the value of precioPlan
         *
         * @return  self
         */ 
        public function setPrecioPlan($precioPlan)
        {
                $this->precioPlan = $precioPlan;

                return $this;
        }
    }



?>