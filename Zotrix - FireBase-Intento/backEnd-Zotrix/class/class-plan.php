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

        public function getData(){
            $result['nombrePlan'] = $this->nombrePlan;
            $result['descripcion'] = array(array(
                "almacenamiento"=>$this->almacenamiento,
                "productos"=>$this->productos
        ));

            return $result;

    }

        //Funcion para guardar el plan
        public function guardarPlan($db){
            $plan = $this->getData();

            $result = $db->getReference('planes')
                    ->push($plan);

            
            if($result->getKey() != null)
                    return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
            else
                    return '{"mensaje": "Error al almacenar el registro"}';
                echo '{"codigoResultado": 1,"mensaje": "Plan guardado con exito"}';
        }


        public static function obtenerPlanes(){
                $contenidoArchivoPlan = file_get_contents('../data/planes.json');

                echo($contenidoArchivoPlan);
        }


        public static function obtenerEmpresasPlan($db, $nombrePlan){
                $result = $db->getReference('planes')
                ->getChild($nombrePlan)
                ->getValue();

                $empresas = $db->getReference('empresas')
                ->getChild('planEmpresa')
                ->getValue();

                echo json_encode($empresas);
                echo json_encode($result);
        }

        public static function obtenerPlan($db, $planCode){
                $result = $db->getReference('planes')
                ->getChild($planCode)
                ->getValue();

                echo json_encode($result);
        }


        public function editarPlan($db, $planCode){
            $result = $db->getReference('planes')
                                ->getChild($planCode)
                                ->update($this->getData());
        
                        
                        if($result->getKey() != null)
                                return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                        else
                                return '{"mensaje": "Error al almacenar el registro"}';
                        //Genero un codigo aleatorio para la empresa
                

            
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