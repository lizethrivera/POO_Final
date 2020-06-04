<?php
        class Product{
                private $nombreProducto;
                private $descripcionProducto;
                private $imgProducto;
                private $colorProducto;
                private $tallaProducto;
                private $precioProducto;
                private $stockProducto;
                private $categoriaProducto;
                private $promocionProducto;



                public function __construct(
                $nombreProducto,
                $descripcionProducto,
                $imgProducto,
                $precioProducto,
                $stockProducto,
                $categoriaProducto

                ){
                $this->nombreProducto=$nombreProducto;
                $this->descripcionProducto=$descripcionProducto;
                $this->imgProducto=$imgProducto;
                $this->precioProducto=$precioProducto;
                $this->stockProducto=$stockProducto;
                $this->categoriaProducto=$categoriaProducto;


                }

                public function getData(){
                        $result['nombreProducto'] = $this->nombreProducto;
                        $result['descripcionProducto'] = $this->descripcionProducto;
                        $result['imgProducto'] = $this->imgProducto;
                        $result['precioProducto'] = $this->precioProducto;
                        $result['stockProducto'] = $this->stockProducto;
                        $result['categoriaProducto'] = $this->categoriaProducto;
                        $result['promocionProducto'] = $this->promocionProducto;
                        $result['promocionProducto'] = array();
                        $result['comentarios'] = array();
        
                        return $result;
        
                }

                public function guardarProducto($db, $id){
                        $empresas = $this->getData();

                        $result = $db->getReference('empresas')
                                ->getChild($id)
                                ->getChild('productos')
                                ->push($empresas);
        
                        
                        if($result->getKey() != null)
                                return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                        else
                                return '{"mensaje": "Error al almacenar el registro"}';
                        //Genero un codigo aleatorio para la empresa
                
        }


        public static function obtenerProductos(){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $producto = array();

                for($i=0; $i<sizeof($empresas); $i++){
                        //echo("Entro");
                        if(array_key_exists("productos", $empresas[$i])){
                                //echo("Si hay");
                                $sucursal = $empresas[$i]["productos"];
                                for($j=0; $j<sizeof($sucursal); $j++){
                                        $sucursales[] = $sucursal[$j]; 
                                }
                        }
                        
                }        

                echo json_encode($sucursales);
        }


        public static function obtenerProducto($db, $empresaCode,$productCode){
                $result = $db->getReference('empresas')
                                ->getChild($empresaCode)
                                ->getChild('productos')
                                ->getChild($productCode)
                                ->getValue();
                
                echo json_encode($result);
        }


        public function editarProducto($db,$idEmpresa,$productCode){
                $result = $db ->getReference('empresas')
                ->getChild($idEmpresa)
                ->getChild('productos')
                ->getChild($productCode)
                ->update($this->getData());


                if($result->getKey() != null)
                        return '{"mensaje": "Registro actualizado", "key":"'. $result->getKey().'"}';
                else
                        return '{"mensaje": "Error al actualizar el registro"}';

                
                
        }

        public static function eliminarProducto($productCode){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $producto = array();


                for($i=0; $i<sizeof($empresas); $i++){
                        echo("Entro");

                        if(array_key_exists("productos", $empresas[$i])){
                                echo("Existe chiqui");
                                $product = $empresas[$i]["productos"];
                                        for($j=0; $j<sizeof($product); $j++){
                                                if($product[$j]["productCode"]== $productCode){
                                                        $index = $j;

                                                array_splice($empresas[$i]["productos"], $index, 1);
                                        
                                                $archivoProducto = fopen('../data/empresas.json', 'w');
                                                fwrite($archivoProducto, json_encode($empresas));
                                                fclose($archivoProducto);
                                                }
                                                
                                        }
                        }

                }

                echo '{"codigoResultado": 1,"mensaje": "Producto eliminado con exito"}';
                
        }


        /*
         $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                

                for($i=0; $i<sizeof($empresas); $i++){
                        echo("Entro");
                        if(array_key_exists("productos",$empresas[$i])){
                                echo ("Holi Jonny");
                                $product = $empresas[$i]["productos"];
                                        for($j=0; $j<sizeof($product); $j++){
                                                $producto[] = $product[$j];
                                        }
                        }else{
                                echo("WAAA");
                        break;
                        }
                        
                }
        

                echo json_encode($producto);*/



                /**
                 * Get the value of nombreProducto
                 */ 
                public function getNombreProducto()
                {
                        return $this->nombreProducto;
                }

                /**
                 * Set the value of nombreProducto
                 *
                 * @return  self
                 */ 
                public function setNombreProducto($nombreProducto)
                {
                        $this->nombreProducto = $nombreProducto;

                        return $this;
                }

                /**
                 * Get the value of descripcionProducto
                 */ 
                public function getDescripcionProducto()
                {
                        return $this->descripcionProducto;
                }

                /**
                 * Set the value of descripcionProducto
                 *
                 * @return  self
                 */ 
                public function setDescripcionProducto($descripcionProducto)
                {
                        $this->descripcionProducto = $descripcionProducto;

                        return $this;
                }

                /**
                 * Get the value of imgProducto
                 */ 
                public function getImgProducto()
                {
                        return $this->imgProducto;
                }

                /**
                 * Set the value of imgProducto
                 *
                 * @return  self
                 */ 
                public function setImgProducto($imgProducto)
                {
                        $this->imgProducto = $imgProducto;

                        return $this;
                }

                /**
                 * Get the value of colorProducto
                 */ 
                public function getColorProducto()
                {
                        return $this->colorProducto;
                }

                /**
                 * Set the value of colorProducto
                 *
                 * @return  self
                 */ 
                public function setColorProducto($colorProducto)
                {
                        $this->colorProducto = $colorProducto;

                        return $this;
                }

                /**
                 * Get the value of tallaProducto
                 */ 
                public function getTallaProducto()
                {
                        return $this->tallaProducto;
                }

                /**
                 * Set the value of tallaProducto
                 *
                 * @return  self
                 */ 
                public function setTallaProducto($tallaProducto)
                {
                        $this->tallaProducto = $tallaProducto;

                        return $this;
                }

                /**
                 * Get the value of precioProducto
                 */ 
                public function getPrecioProducto()
                {
                        return $this->precioProducto;
                }

                /**
                 * Set the value of precioProducto
                 *
                 * @return  self
                 */ 
                public function setPrecioProducto($precioProducto)
                {
                        $this->precioProducto = $precioProducto;

                        return $this;
                }

                /**
                 * Get the value of stockProducto
                 */ 
                public function getStockProducto()
                {
                        return $this->stockProducto;
                }

                /**
                 * Set the value of stockProducto
                 *
                 * @return  self
                 */ 
                public function setStockProducto($stockProducto)
                {
                        $this->stockProducto = $stockProducto;

                        return $this;
                }

                /**
                 * Get the value of categoriaProducto
                 */ 
                public function getCategoriaProducto()
                {
                        return $this->categoriaProducto;
                }

                /**
                 * Set the value of categoriaProducto
                 *
                 * @return  self
                 */ 
                public function setCategoriaProducto($categoriaProducto)
                {
                        $this->categoriaProducto = $categoriaProducto;

                        return $this;
                }


                /**
                 * Get the value of promocionProducto
                 */ 
                public function getPromocionProducto()
                {
                        return $this->promocionProducto;
                }

                /**
                 * Set the value of promocionProducto
                 *
                 * @return  self
                 */ 
                public function setPromocionProducto($promocionProducto)
                {
                        $this->promocionProducto = $promocionProducto;

                        return $this;
                }
        }






?>

