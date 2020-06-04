<?php
    class Users{
        private $nombreUsuario;
        private $apellidoUsuario;
        private $imgUsuario;
        private $correoUsuario;
        private $passwordUsuario;

        public function __construct(
                $nombreUsuario,
                $apellidoUsuario,
                $imgUsuario,
                $correoUsuario,
                $passwordUsuario
        ){
                $this->nombreUsuario = $nombreUsuario;
                $this->apellidoUsuario = $apellidoUsuario;
                $this->imgUsuario = $imgUsuario;
                $this->correoUsuario = $correoUsuario;
                $this->passwordUsuario = $passwordUsuario;

        }

        public function getData(){
                $result['nombreUsuario'] = $this->nombreUsuario;
                $result['apellidoUsuario'] = $this->apellidoUsuario;
                $result['imgUsuario'] = $this->imgUsuario;
                $result['correoUsuario'] = $this->correoUsuario;
                $result['passwordUsuario'] = $this->passwordUsuario;

                return $result;

        }


        public function guardarUsuario($db){
                $usuarios = $this->getData();

                $result = $db->getReference('usuarios')
                        ->push($usuarios);

                
                if($result->getKey() != null)
                        return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                else
                        return '{"mensaje": "Error al almacenar el registro"}';
                //Genero un codigo aleatorio para la empresa
        }


        public static function obtenerUsuarios(){
                $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');

                echo ($contenidoArchivoUsuarios);
        }


        public static function obtenerUsuario($db, $codigoUsuario){
                $result = $db->getReference('usuarios')
                                ->getChild($codigoUsuario)
                                ->getValue();
                
                echo json_encode($result);
        }


        public function editarEmpresa($codigoUsuario){
                $contenidoArchivoUsuarios = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($contenidoArchivoUsuarios, true);
                $usuario = null;

                for($i=0; $i<sizeof($usuarios); $i++){
                        if($usuarios[$i]['userCode'] == $codigoUsuario){
                                $informacionOtra = $usuarios[$i]["informacionOtra"];
                                $pedidos = $usuarios[$i]["pedidos"];
                        $index = $i;
                        $usuario = array(
                                "userCode"=>$codigoUsuario,
                                "nombreUsuario"=>$this->nombreUsuario,
                                "apellidoUsuario"=>$this->apellidoUsuario,
                                "imgUsuario"=>$this->imgUsuario,
                                "correoUsuario"=>$this->correoUsuario,
                                "passwordUsuario"=>$this->passwordUsuario,
                                "informacionOtra"=>$informacionOtra,
                                "pedidos"=>$pedidos
                        );

                        $usuarios[$index] = $usuario;

                        $archivoUsuario = fopen('../data/usuarios.json', 'w');
                        fwrite($archivoUsuario, json_encode($usuarios));
                        fclose($archivoUsuario);

                break;
                }
                }

                

                echo '{"codigoResultado": 1,"mensaje": "Usuario actualizada con exito"}';
        }


        public static function eliminarUsuario($codigoUsuario){
                $contenidoArchivoUsuarios = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($contenidoArchivoUsuarios, true);

                for($i=0; $i<sizeof($usuarios); $i++){
                if($usuarios[$i]['userCode'] == $codigoUsuario){
                        $index = $i;
                        
                        array_splice($usuarios, $index, 1);

                        $archivoUsuario = fopen('../data/usuarios.json', 'w');
                        fwrite($archivoUsuario, json_encode($usuarios));
                        fclose($archivoUsuario);
                        

                break;
                }
                }

                echo '{"codigoResultado": 1,"mensaje": "Usuario eliminada con exito"}';
                
        }











        /**
         * Get the value of nombreUsuario
         */ 
        public function getNombreUsuario()
        {
                return $this->nombreUsuario;
        }

        /**
         * Set the value of nombreUsuario
         *
         * @return  self
         */ 
        public function setNombreUsuario($nombreUsuario)
        {
                $this->nombreUsuario = $nombreUsuario;

                return $this;
        }

        /**
         * Get the value of apellidoUsuario
         */ 
        public function getApellidoUsuario()
        {
                return $this->apellidoUsuario;
        }

        /**
         * Set the value of apellidoUsuario
         *
         * @return  self
         */ 
        public function setApellidoUsuario($apellidoUsuario)
        {
                $this->apellidoUsuario = $apellidoUsuario;

                return $this;
        }

        /**
         * Get the value of imgUsuario
         */ 
        public function getImgUsuario()
        {
                return $this->imgUsuario;
        }

        /**
         * Set the value of imgUsuario
         *
         * @return  self
         */ 
        public function setImgUsuario($imgUsuario)
        {
                $this->imgUsuario = $imgUsuario;

                return $this;
        }

        /**
         * Get the value of correoUsuario
         */ 
        public function getCorreoUsuario()
        {
                return $this->correoUsuario;
        }

        /**
         * Set the value of correoUsuario
         *
         * @return  self
         */ 
        public function setCorreoUsuario($correoUsuario)
        {
                $this->correoUsuario = $correoUsuario;

                return $this;
        }

        /**
         * Get the value of password
         */ 
        public function getPassword()
        {
                return $this->password;
        }

        /**
         * Set the value of password
         *
         * @return  self
         */ 
        public function setPassword($password)
        {
                $this->password = $password;

                return $this;
        }
    }




?>