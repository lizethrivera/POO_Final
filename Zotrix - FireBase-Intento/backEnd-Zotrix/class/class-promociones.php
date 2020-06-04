<?php
    class Promocion{
        private $precioOferta;
        private $fechaInicioPromocion;
        private $fechaFinalPromocion;
        private $codigoSucursal;

        public function __construct(
            $precioOferta,
            $fechaInicioPromocion,
            $fechaFinalPromocion,
            $codigoSucursal

        ){
            $this->precioOferta = $precioOferta;
            $this->fechaInicioPromocion = $fechaInicioPromocion;
            $this->fechaFinalPromocion = $fechaFinalPromocion;
            $this->codigoSucursal = $codigoSucursal;
        }

        public function getData(){
            // /$result['porcentajeDescuento'] = $this->porcentajeDescuento;
            $result['precioOferta'] = $this->precioOferta;
            $result['fechaInicioPromocion'] = $this->fechaInicioPromocion;
            $result['fechaFinalPromocion'] = $this->fechaFinalPromocion;
            $result['sucursales'] = $this->codigoSucursal;

            return $result;

    }



        public function guardarPromocion($db,$id,$productCode){
            $empresas = $this->getData();

            $result = $db->getReference('empresas')
                    ->getChild($id)
                    ->getChild('productos')
                    ->getChild($productCode)
                    ->getChild('promocion')
                    ->push($empresas);

            
            if($result->getKey() != null)
                    return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
            else
                    return '{"mensaje": "Error al almacenar el registro"}';
            //Genero un codigo aleatorio para la empresa

        }

        public static function obtenerProductosPromocion(){
            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            //$promocion = null;


            for($i=0; $i<sizeof($empresas); $i++){
                if(array_key_exists("productos", $empresas[$i])){
                    $productos = $empresas[$i]["productos"];
                    for($j=0; $j<sizeof($productos); $j++){
                        if(array_key_exists("promocionProducto", $productos[$j])){
                            if(empty($productos[$j]["promocionProducto"])){
                                echo ("No hay productos en promocion!");
                            break;

                            }else{
                                $promocion = $productos[$j];
                                echo json_encode($promocion);
                            }
                        }
                    }
                }
            }

            
        }



        public static function obtenerPromocionesPorSucursales($productCode){
            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            $promocion = null;
            $contenidoArchivoSucursales = file_get_contents('../data/sucursal.json');
            $sucursales = json_decode($contenidoArchivoSucursales, true);
            $sucursal;

            for($i=0; $i<sizeof($empresas); $i++){
                $productos = $empresas[$i]["productos"];
                for($j=0; $j<sizeof($productos); $j++){
                    if($productos[$j]["productCode"] == $productCode){
                        if(empty($productos[$j]["promocionProducto"])){
                            echo ("No hay promocion del producto!");
                        }else{
                            $promocion = $productos[$j]["promocionProducto"];
                            for($k=0; $k<sizeof($promocion); $k++){
                                if(array_key_exists("sucursales", $promocion[$k])){
                                    //echo ("Holaaa");
                                    $sucursalesPro = $promocion[$k]["sucursales"];
                                }
                            }
                            for($h=0; $h<sizeof($sucursales); $h++){
                                //echo("Hola");
                                if(in_array($sucursales[$h]["sucursalCode"], $sucursalesPro))
                                    $sucursal[] = $sucursales[$h];
                            }

                            echo json_encode($sucursal);

                        break;
                        }
                    }
                }
            }
            //echo json_encode($productos);

            
        }

        public function editarPromocion($db, $empreCode,$productCode, $promoCode){
                        $result = $db->getReference('empresas')
                                ->getChild($empreCode)
                                ->getChild('productos')
                                ->getChild($productCode)
                                ->getChild('promocion')
                                ->getChild($promoCode)
                                ->update($this->getData());
        
                        
                        if($result->getKey() != null)
                                return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                        else
                                return '{"mensaje": "Error al almacenar el registro"}';
                        //Genero un codigo aleatorio para la empresa
                
        }


        public static function eliminarPromocion($promoCode){
            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            $comentario = null;

            for($i=0; $i<sizeof($empresas); $i++){
                if(array_key_exists("productos", $empresas[$i])){
                    echo ("Hola");
                    $productos = $empresas[$i]["productos"];
                        for($j=0; $j<sizeof($productos); $j++){
                            if(array_key_exists("promocionProducto", $productos[$j])){
                                echo("Si hay promo");
                                $promocion = $productos[$j]["promocionProducto"];
                                for($k=0; $k<sizeof($promocion); $k++){
                                    if($promocion[$k]["promocionCode"] == $promoCode){
                                        //$precioOri = $productos[$j]["precioProducto"];
                                        //$Descuento = ($precioOtro/$precioOri)*100;
                                        //echo("Descuento".$Descuento);
                                        $index = $k;
                                    
                                        array_splice($empresas[$i]["productos"][$j]["promocionProducto"], $index, 1);

                
                                        $archivoProducto = fopen('../data/empresas.json', 'w');
                                        fwrite($archivoProducto, json_encode($empresas));
                                        fclose($archivoProducto);  
                                        echo '{"codigoResultado": 1,"mensaje": "Usuario eliminada con exito"}';
                                        
                                    break;
                                    }
                                }
                            }
                        }
                }
        }



            
            
    }



        /**
         * Get the value of porcentajeDescuento
         */ 
        public function getPorcentajeDescuento()
        {
                return $this->porcentajeDescuento;
        }

        /**
         * Set the value of porcentajeDescuento
         *
         * @return  self
         */ 
        public function setPorcentajeDescuento($porcentajeDescuento)
        {
                $this->porcentajeDescuento = $porcentajeDescuento;

                return $this;
        }

        /**
         * Get the value of precioOferta
         */ 
        public function getPrecioOferta()
        {
                return $this->precioOferta;
        }

        /**
         * Set the value of precioOferta
         *
         * @return  self
         */ 
        public function setPrecioOferta($precioOferta)
        {
                $this->precioOferta = $precioOferta;

                return $this;
        }

        /**
         * Get the value of fechaInicioPromocion
         */ 
        public function getFechaInicioPromocion()
        {
                return $this->fechaInicioPromocion;
        }

        /**
         * Set the value of fechaInicioPromocion
         *
         * @return  self
         */ 
        public function setFechaInicioPromocion($fechaInicioPromocion)
        {
                $this->fechaInicioPromocion = $fechaInicioPromocion;

                return $this;
        }

        /**
         * Get the value of fechaFinalPromocion
         */ 
        public function getFechaFinalPromocion()
        {
                return $this->fechaFinalPromocion;
        }

        /**
         * Set the value of fechaFinalPromocion
         *
         * @return  self
         */ 
        public function setFechaFinalPromocion($fechaFinalPromocion)
        {
                $this->fechaFinalPromocion = $fechaFinalPromocion;

                return $this;
        }

        /**
         * Get the value of codigoSucursal
         */ 
        public function getCodigoSucursal()
        {
                return $this->codigoSucursal;
        }

        /**
         * Set the value of codigoSucursal
         *
         * @return  self
         */ 
        public function setCodigoSucursal($codigoSucursal)
        {
                $this->codigoSucursal = $codigoSucursal;

                return $this;
        }
    }








?>