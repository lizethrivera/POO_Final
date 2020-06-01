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


        public function guardarComentario($codigoProducto){
                $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                $commentCode = substr(str_shuffle($permitted_chars), 0, 10);

                if(file_exists('../data/comentarios.json')){
                
                }else{
                fopen('../data/comentarios.json', 'w');
                fclose('../data/comentarios.json');
                }


                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');
                $empresas = json_decode($contenidoArchivoEmpresas, true);
                $empresa = array();
                $productos = array();
                $resultado = array();
                

                for($i=0; $i<sizeof($empresas);$i++){
                        $productos = $empresas[$i]["productos"];
                                
                        for($j=0; $j<sizeof($productos);$j++){
                                if($productos[$j]['productCode'] == $codigoProducto){
                                        $productos[$j]['comentarios'][] = array(
                                                "commentCode"=>$commentCode,
                                                "comentario"=>$this->comentario,
                                                "usuarioComentario"=>$this->usuarioComentario,
                                                "uimgComentario"=>$this->uimgComentario
                                                );
                                                $empresa = $productos[$j];
                
                                                $empresas[$i]["productos"][$j] = $empresa;
                                        break;
                                }
                                
                        }

                        //
                }

                $archivoProducto = fopen('../data/empresas.json', 'w');
                        fwrite($archivoProducto, json_encode($empresas));
                        fclose($archivoProducto);
                        echo json_encode($empresa);

                

                

                echo '{"codigoResultado": 1,"mensaje": "Usuario guardado con exito"}';
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


        public static function obtenerComentario($commentCode){
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
                                                                                        $comentario = $comment[$k];
                                                                
                                                                                break;
                                                                                }
                                                                        }
                                                        }else{
                                                        break;
                                                        }
                                        }
                        }
                }

                echo json_encode($comentario);


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