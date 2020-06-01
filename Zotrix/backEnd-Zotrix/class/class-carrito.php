<?php
    class Carrito{
        private $empresaCode;
        private $productCode;
        private $cantidad;
        private $talla;
        private $color;
        private $fechaCompra;
        private $estadoOrden;
        private $precio;
        

        public function __construct(
            $cantidad,
            $color,
            $talla,
            $fechaCompra,
            $estadoOrden,
            $precio
        ){
            $this->cantidad = $cantidad;
            $this->talla = $talla;
            $this->color = $color;
            $this->fechaCompra = $fechaCompra;
            $this->estadoOrden = $estadoOrden;
            $this->precio = $precio;

        }

        public function guardarPedido($userCode, $productCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);

            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
            $orderCode = substr(str_shuffle($permitted_chars), 0, 10);

            for($i=0; $i<sizeof($usuarios);$i++){
                if($usuarios[$i]['userCode'] == $userCode){
                    echo("Soy yo");
                    $usuario = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($usuario); $j++){
                        $usuarios[$i]["pedidos"][$j]["ordenesProceso"][] = array(
                            "orderCode"=>$orderCode,
                            "productCode"=>$productCode,
                            "cantidad"=>$this->cantidad,
                            "talla"=>$this->talla,
                            "color"=>$this->color,
                            "fechaCompra"=>$this->fechaCompra,
                            "estadoOrden"=>$this->estadoOrden,
                            "precio"=>$this->precio
                        );
                            $archivoProducto = fopen('../data/usuarios.json', 'w');
                            fwrite($archivoProducto, json_encode($usuarios));
                            fclose($archivoProducto);
                    }
                    
                }
            }

        }


        public static function obtenerOrdenes($userCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["ordenesProceso"];
                            
                }
                
            }
        }

        echo json_encode($siguiendo);


        }

        public static function obtenerOrdenesPagadas($userCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["ordenesHechos"];
                            
                }
                
            }
        }

        echo json_encode($siguiendo);


        }

        public function eliminarPedido($userCode, $orderCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["ordenesProceso"];
                        for($k=0; $k<sizeof($siguiendo); $k++){
                            if($siguiendo[$k]["orderCode"] == $orderCode){
                                $index = $k;
                                    
                                    array_splice($usuarios[$i]["pedidos"][$j]["ordenesProceso"], $index, 1);

                                    $archivoUsuario = fopen('../data/usuarios.json', 'w');
                                    fwrite($archivoUsuario, json_encode($usuarios));
                                    fclose($archivoUsuario);

                                    echo("Orden eliminada");
                                break;
                            }
                        }

                }
                
            }

        }

        //echo json_encode($siguiendo);
        }


        public function eliminarPedidos($userCode){
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);
            $seguidos = null;

            for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]["userCode"] == $userCode){
                    $informacion = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($informacion); $j++){
                        $siguiendo = $informacion[$j]["ordenesProceso"];
                        for($k=0; $k<sizeof($siguiendo); $k++){
                            
                                $index = $k;
                                    $seguidos = $usuarios[$i]["pedidos"][$j]["ordenesProceso"];
                                    
                                    array_splice($usuarios[$i]["pedidos"][$j]["ordenesProceso"], 0);

                                    $archivoUsuario = fopen('../data/usuarios.json', 'w');
                                    fwrite($archivoUsuario, json_encode($usuarios));
                                    fclose($archivoUsuario);
                                    echo("Orden eliminada");
                                break;
                            
                        }

                }
                
            }

            }

            for($i=0; $i<sizeof($usuarios);$i++){
                if($usuarios[$i]['userCode'] == $userCode){
                    echo("Soy yo");
                    $usuario = $usuarios[$i]["pedidos"];
                    for($j=0; $j<sizeof($usuario); $j++){
                        
                        for($k=0; $k<sizeof($seguidos);$k++){
                            $usuarios[$i]["pedidos"][$j]["ordenesHechos"][] = $seguidos[$k];
                        }                        
                            $archivoProducto = fopen('../data/usuarios.json', 'w');
                            fwrite($archivoProducto, json_encode($usuarios));
                            fclose($archivoProducto);
                    }
                    
                }
            }

        }

        /*
        

        */
        /**
         * Get the value of empresaCode
         */ 
        public function getEmpresaCode()
        {
                return $this->empresaCode;
        }

        /**
         * Set the value of empresaCode
         *
         * @return  self
         */ 
        public function setEmpresaCode($empresaCode)
        {
                $this->empresaCode = $empresaCode;

                return $this;
        }

        /**
         * Get the value of productCode
         */ 
        public function getProductCode()
        {
                return $this->productCode;
        }

        /**
         * Set the value of productCode
         *
         * @return  self
         */ 
        public function setProductCode($productCode)
        {
                $this->productCode = $productCode;

                return $this;
        }

        /**
         * Get the value of cantidad
         */ 
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }

        /**
         * Get the value of talla
         */ 
        public function getTalla()
        {
                return $this->talla;
        }

        /**
         * Set the value of talla
         *
         * @return  self
         */ 
        public function setTalla($talla)
        {
                $this->talla = $talla;

                return $this;
        }

        /**
         * Get the value of color
         */ 
        public function getColor()
        {
                return $this->color;
        }

        /**
         * Set the value of color
         *
         * @return  self
         */ 
        public function setColor($color)
        {
                $this->color = $color;

                return $this;
        }

        /**
         * Get the value of fechaCompra
         */ 
        public function getFechaCompra()
        {
                return $this->fechaCompra;
        }

        /**
         * Set the value of fechaCompra
         *
         * @return  self
         */ 
        public function setFechaCompra($fechaCompra)
        {
                $this->fechaCompra = $fechaCompra;

                return $this;
        }

        /**
         * Get the value of estadoOrden
         */ 
        public function getEstadoOrden()
        {
                return $this->estadoOrden;
        }

        /**
         * Set the value of estadoOrden
         *
         * @return  self
         */ 
        public function setEstadoOrden($estadoOrden)
        {
                $this->estadoOrden = $estadoOrden;

                return $this;
        }
    }
?>