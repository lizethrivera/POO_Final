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


                public function guardarUsuario(){
                        $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                        $userCode = substr(str_shuffle($permitted_chars), 0, 10);

                        if(file_exists('../data/sucursal.json')){
                        
                        }else{
                        fopen('../data/sucursal.json', 'w');
                        fclose('../data/sucursal.json');
                        }

                        $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
                        $usuarios = json_decode($contenidoArchivoUsuarios, true);
                        $usuarios[] = array(
                        "userCode"=>$userCode,
                        "nombreUsuario"=>$this->nombreUsuario,
                        "apellidoUsuario"=>$this->apellidoUsuario,
                        "imgUsuario"=>$this->imgUsuario,
                        "correoUsuario"=>$this->correoUsuario,
                        "passwordUsuario"=>$this->passwordUsuario,
                        "informacionOtra" =>array(array(
                                "siguiendo"=>array(),
                                "promocionesFavoritas"=>array(),
                        )),
                        "pedidos" =>array(array(
                                "ordenesProceso"=>array(),
                                "ordenesHechos"=>array()
                        ))
                        );

                        $archivoUsuario = fopen('../data/usuarios.json', 'w');
                        fwrite($archivoUsuario, json_encode($usuarios));
                        fclose($archivoUsuario);

                        echo '{"codigoResultado": 1,"mensaje": "Usuario guardado con exito"}';
                }

                public static function guardarImagen($userCode, $imagen){
                        $contenidoArchivoUsuarios = file_get_contents("../data/usuarios.json");
                        $usuarios = json_decode($contenidoArchivoUsuarios, true);
                        
                        $usuarios[$userCode]["imgUsuario"] = $imagen;
                }

                public static function obtenerUsuarios(){
                        $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');

                        echo ($contenidoArchivoUsuarios);
                }


                public static function obtenerUsuario($codigoUsuario){
                        $contenidoArchivoUsuarios = file_get_contents("../data/usuarios.json");
                        $usuarios = json_decode($contenidoArchivoUsuarios, true);
                        $usuario = null;

                        for($i=0; $i<sizeof($usuarios); $i++){
                        if($usuarios[$i]['userCode'] == $codigoUsuario){
                                $usuario = $usuarios[$i];

                        break;
                        }
                        }


                        echo json_encode($usuario);
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


                public static function verificarUsuario($correoUsuario, $passwordUsuario){
                        $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
                        $usuarios = json_decode($contenidoArchivoUsuarios, true);

                        for($i=0; $i<sizeof($usuarios); $i++){
                                if($usuarios[$i]["correoUsuario"]==$correoUsuario && $usuarios[$i]["passwordUsuario"]==$passwordUsuario){
                                        return $usuarios[$i];
                                break;
                                }
                        }
                        return null;
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