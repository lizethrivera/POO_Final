<?php
        class Comentarios{
        private $comentario;
        private $usuarioComentario;
        private $uimgComentario;

        public function __construct(
                $comentario,
                $usuarioComentario,
                $uimgComentario
        ){
                $this->comentario = $comentario;
                $this->usuarioComentario = $usuarioComentario;
                $this->uimgComentario = $uimgComentario;
        }

        public function getData(){
                $result['comentario'] = $this->comentario;
                $result['usuarioComentario'] = $this->usuarioComentario;
                $result['uimgComentario'] = $this->uimgComentario;

                return $result;

        }


        public function guardarComentario($db,$id,$productCode){
                $empresas = $this->getData();

                $result = $db->getReference('empresas')
                        ->getChild($id)
                        ->getChild('productos')
                        ->getChild($productCode)
                        ->getChild('comentarios')
                        ->push($empresas);

                
                if($result->getKey() != null)
                        return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                else
                        return '{"mensaje": "Error al almacenar el registro"}';
                //Genero un codigo aleatorio para la empresa
        
        }


        public static function obtenerComentarios(){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $comentario = array();

                for($i=0; $i<sizeof($empresas); $i++){
                        if(array_key_exists("productos", $empresas[$i])){
                                $product = $empresas[$i]["productos"];
                                        for($j=0;$j<sizeof($product); $j++){
                                                        if(array_key_exists("comentarios", $product[$j])){
                                                                $comment = $product[$j]["comentarios"];
                                                                        for($k=0; $k<sizeof($comment); $k++){
                                                                                $comentario[] = $comment[$k];
                                                                        }
                                                        }else{
                                                        break;
                                                        }
                                        }
                        }
                }

                echo json_encode($comentario);
        }


        public static function obtenerComentario($db, $empresaCode, $productCode, $commentCode){
                $result = $db->getReference('empresas')
                                ->getChild($empresaCode)
                                ->getChild('productos')
                                ->getChild($productCode)
                                ->getChild('comentarios')
                                ->getChild($commentCode)
                                ->getValue();
                
                echo json_encode($result);


        }


        public function editarComentario($commentCode){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $comentario = null;

                for($i=0; $i<sizeof($empresas); $i++){
                        if(array_key_exists("productos", $empresas[$i])){
                                $product = $empresas[$i]["productos"];
                                        for($j=0;$j<sizeof($product); $j++){
                                                        if(array_key_exists("comentarios", $product[$j])){
                                                                $comment = $product[$j]["comentarios"];
                                                                        for($k=0; $k<sizeof($comment); $k++){
                                                                                if($comment[$k]['commentCode'] == $commentCode){
                                                                                        $comment = array(
                                                                                                "commentCode"=>$commentCode,
                                                                                                "comentario"=>$this->comentario,
                                                                                                "usuarioComentario"=>$this->usuarioComentario,
                                                                                                "uimgComentario"=>$this->uimgComentario
                                                                                        );
                                                                                        $empresas[$i]["productos"][$j]["comentarios"][$k] = $comment;
                                        
                                                                                        $archivoProducto = fopen('../data/empresas.json', 'w');
                                                                                        fwrite($archivoProducto, json_encode($empresas));
                                                                                        fclose($archivoProducto);
                                        
                                                                                break;
                                                                                }
                                                                        }
                                                        }else{
                                                        break;
                                                        }
                                        }
                        }
                }


                echo '{"codigoResultado": 1,"mensaje": "Usuario guardado con exito"}';
        }


        public static function eliminarComentario($commentCode){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $comentario = null;

                for($i=0; $i<sizeof($empresas); $i++){
                        if(array_key_exists("productos", $empresas[$i])){
                                $product = $empresas[$i]["productos"];
                                        for($j=0;$j<sizeof($product); $j++){
                                                        if(array_key_exists("comentarios", $product[$j])){
                                                                $comment = $product[$j]["comentarios"];
                                                                        for($k=0; $k<sizeof($comment); $k++){
                                                                                if($comment[$k]['commentCode'] == $commentCode){
                                                                                        $index = $k;
                                        
                                                                                        array_splice($empresas[$i]["productos"][$j]["comentarios"], $index, 1);
                                                                
                                                                                
                                                                                        $archivoProducto = fopen('../data/empresas.json', 'w');
                                                                                        fwrite($archivoProducto, json_encode($empresas));
                                                                                        fclose($archivoProducto);                                       
                                        
                                                                                
                                                                                }
                                                                        }
                                                                }
                                        }
                        }
                }


                echo '{"codigoResultado": 1,"mensaje": "Usuario eliminada con exito"}';
                
        }
        /**
         * Get the value of comentario
         */ 
        public function getComentario()
        {
                return $this->comentario;
        }

        /**
         * Set the value of comentario
         *
         * @return  self
         */ 
        public function setComentario($comentario)
        {
                $this->comentario = $comentario;

                return $this;
        }

        /**
         * Get the value of usuarioComentario
         */ 
        public function getUsuarioComentario()
        {
                return $this->usuarioComentario;
        }

        /**
         * Set the value of usuarioComentario
         *
         * @return  self
         */ 
        public function setUsuarioComentario($usuarioComentario)
        {
                $this->usuarioComentario = $usuarioComentario;

                return $this;
        }

        /**
         * Get the value of uimgComentario
         */ 
        public function getUimgComentario()
        {
                return $this->uimgComentario;
        }

        /**
         * Set the value of uimgComentario
         *
         * @return  self
         */ 
        public function setUimgComentario($uimgComentario)
        {
                $this->uimgComentario = $uimgComentario;

                return $this;
        }
        }




?>