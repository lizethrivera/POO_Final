<?php
    class Categoria{
        private $nombreCategoria;
        private $descripcionCategoria;


        public function __construct(
            $nombreCategoria,
            $descripcionCategoria
        ){
            $this->nombreCategoria = $nombreCategoria;
            $this->descripcionCategoria = $descripcionCategoria;

        }

        public function getData(){
            $result['nombreCategoria'] = $this->nombreCategoria;
            $result['descripcionCategoria'] = $this->descripcionCategoria;

            return $result;

    }


        public function guardarCategoria($db){
            $categorias = $this->getData();

            $result = $db->getReference('categorias')
                    ->push($categorias);

            
            if($result->getKey() != null)
                    return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
            else
                    return '{"mensaje": "Error al almacenar el registro"}';
        
        }


        public function obtenerCategorias(){
            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');

            echo($contenidoArchivoCategoria);
        }

        public static function obtenerCategoria($db, $categoryCode){
            $result = $db->getReference('categorias')
                                ->getChild($categoryCode)
                                ->getValue();
                
                echo json_encode($result);

        }

        public function obtenerProductosPorCategoria($nombreCategoria){
            $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivoEmpresas, true);
            $comentario = array();

            for($i=0; $i<sizeof($empresas); $i++){
                    if(array_key_exists("productos", $empresas[$i])){
                            $product = $empresas[$i]["productos"];
                                    for($j=0;$j<sizeof($product); $j++){
                                                    if(array_key_exists("categoriaProducto", $product[$j])){
                                                            //echo("Si estamos");
                                                            if($product[$j]["categoriaProducto"] == $nombreCategoria){
                                                                $EstosProductos[] = $product[$j];
                                                            }
                                                                    
                                                    }else{
                                                    break;
                                                    }
                                    }
                    }
            }

            echo json_encode($EstosProductos);
        }


        public function editarCategoria($db,$categoryCode){
            $result = $db->getReference('categorias')
                                ->getChild($categoryCode)
                                ->update($this->getData());
        
                        
                        if($result->getKey() != null)
                                return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                        else
                                return '{"mensaje": "Error al almacenar el registro"}';
                        //Genero un codigo aleatorio para la empresa
                

            


        }

        public function eliminarCategoria($categoryCode){
            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');
            $categorias = json_decode($contenidoArchivoCategoria, true);

            for($i=0; $i<sizeof($categorias); $i++){
                if($categorias[$i]['categoryCode'] == $categoryCode){
                    echo("Si son iguales");
                    $categoria = $categorias[$i];
                    $index = $i;
                    
                    array_splice($categorias, $index, 1);
        
                        $archivoCategorias = fopen('../data/categoria.json', 'w');
                        fwrite($archivoCategorias, json_encode($categorias));
                        fclose($archivoCategorias);
                        echo '{"codigoResultado": 1,"mensaje": "Categoria eliminada con exito"}';
                    break;
                
                    }
                
            }

            


        }

        /**
         * Get the value of nombreCategoria
         */ 
        public function getNombreCategoria()
        {
                return $this->nombreCategoria;
        }

        /**
         * Set the value of nombreCategoria
         *
         * @return  self
         */ 
        public function setNombreCategoria($nombreCategoria)
        {
                $this->nombreCategoria = $nombreCategoria;

                return $this;
        }

        /**
         * Get the value of descripcionCategoria
         */ 
        public function getDescripcionCategoria()
        {
                return $this->descripcionCategoria;
        }

        /**
         * Set the value of descripcionCategoria
         *
         * @return  self
         */ 
        public function setDescripcionCategoria($descripcionCategoria)
        {
                $this->descripcionCategoria = $descripcionCategoria;

                return $this;
        }
    }




?>