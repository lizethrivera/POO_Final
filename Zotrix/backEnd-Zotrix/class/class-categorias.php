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

        public function guardarCategoria(){
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
            $categoryCode = substr(str_shuffle($permitted_chars), 0, 10);
                
                if(file_exists('../data/categoria.json')){
                
                }else{
                echo ("Se esta creando el archivo, espere");
                fopen('../data/categoria.json', 'w');
                fclose('../data/categoria.json');

                echo("Archivo creado");
                }

            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');
            $categorias = json_decode($contenidoArchivoCategoria, true);

            $categorias[] = array(
                "categoryCode"=>$categoryCode,
                "nombreCategoria"=>$this->nombreCategoria,
                "descripcionCategoria"=>$this->descripcionCategoria
                );

                $archivoCategorias = fopen('../data/categoria.json', 'w');
                fwrite($archivoCategorias, json_encode($categorias));
                fclose($archivoCategorias);

                echo '{"codigoResultado": 1,"mensaje": "Categoria guardada con exito"}';
        }


        public function obtenerCategorias(){
            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');

            echo($contenidoArchivoCategoria);
        }

        public static function obtenerCategoria($categoryCode){
            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');
            $categorias = json_decode($contenidoArchivoCategoria, true);
            $categoria = null;

            for($i=0; $i<sizeof($categorias); $i++){
                if($categorias[$i]["categoryCode"] == $categoryCode){
                    $categoria = $categorias[$i];
                break;
                }
            }

            echo json_encode($categoria);

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


        public function editarCategoria($categoryCode){
            $contenidoArchivoCategoria = file_get_contents('../data/categoria.json');
            $categorias = json_decode($contenidoArchivoCategoria, true);

            for($i=0; $i<sizeof($categorias); $i++){
                if($categorias[$i]['categoryCode'] == $categoryCode){
                    echo("Si son iguales");
                    $categoria = $categorias[$i];
                    $index = $i;
                    
                    $categoria = array(
                        "categoryCode"=>$categoryCode,
                        "nombreCategoria"=>$this->nombreCategoria,
                        "descripcionCategoria"=>$this->descripcionCategoria
                        );

                        $categorias[$index] = $categoria;
        
                        $archivoCategorias = fopen('../data/categoria.json', 'w');
                        fwrite($archivoCategorias, json_encode($categorias));
                        fclose($archivoCategorias);
                        echo '{"codigoResultado": 1,"mensaje": "Empresa actualizada con exito"}';
                    break;
                
                    }
                
            }

            


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