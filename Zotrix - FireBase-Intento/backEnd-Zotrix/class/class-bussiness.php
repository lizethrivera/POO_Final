<?php

        class Bussiness{
        private $nombreEmpresa;
        private $logoEmpresa;
        private $bannerEmpresa;
        private $correoEmpresa;
        private $passwordEmpresa;
        private $soporteEmpresa;
        private $numeroEmpresa;
        private $facebookEmpresa;
        private $instagramEmpresa;
        private $youtubeEmpresa;
        private $direccionEmpresa;
        private $latitudEmpresa;
        private $altitudEmpresa;
        private $planEmpresa;


        public function __construct(
                $nombreEmpresa,
                $logoEmpresa,
                $bannerEmpresa,
                $correoEmpresa,
                $passwordEmpresa,
                $direccionEmpresa,
                $latitudEmpresa,
                $altitudEmpresa,
                $soporteEmpresa,
                $numeroEmpresa,
                $facebookEmpresa,
                $instagramEmpresa,
                $youtubeEmpresa,
                $planEmpresa

        ){

                $this->nombreEmpresa=$nombreEmpresa;
                $this->logoEmpresa=$logoEmpresa;
                $this->bannerEmpresa=$bannerEmpresa;
                $this->correoEmpresa=$correoEmpresa;
                $this->passwordEmpresa=$passwordEmpresa;
                $this->direccionEmpresa=$direccionEmpresa;
                $this->latitudEmpresa=$latitudEmpresa;
                $this->altitudEmpresa=$altitudEmpresa;
                $this->soporteEmpresa=$soporteEmpresa;
                $this->numeroEmpresa=$numeroEmpresa;
                $this->facebookEmpresa=$facebookEmpresa;
                $this->instagramEmpresa=$instagramEmpresa;
                $this->youtubeEmpresa=$youtubeEmpresa;
                $this->planEmpresa=$planEmpresa;
        }

        public function getData(){
                $result['nombreEmpresa'] = $this->nombreEmpresa;
                $result['logoEmpresa'] = $this->logoEmpresa;
                $result['bannerEmpresa'] = $this->bannerEmpresa;
                $result['correoEmpresa'] = $this->correoEmpresa;
                $result['passwordEmpresa'] = $this->passwordEmpresa;
                $result['direccionEmpresa'] = $this->direccionEmpresa;
                $result['latitudEmpresa'] = $this->latitudEmpresa;
                $result['altitudEmpresa'] = $this->altitudEmpresa;
                $result['contacto'] = array(array(
                        "soporteEmpresa"=>$this->soporteEmpresa,
                        "numeroEmpresa"=>$this->numeroEmpresa,
                        "facebookEmpresa"=>$this->facebookEmpresa,
                        "instagramEmpresa"=>$this->instagramEmpresa,
                        "youtubeEmpresa"=>$this->youtubeEmpresa
                ));
                $result['planEmpresa'] = $this->planEmpresa;

                return $result;

        }

        //Guarda datos de la empresa
        public function guardarEmpresa($db){
                $empresas = $this->getData();

                $result = $db->getReference('empresas')
                        ->push($empresas);

                
                if($result->getKey() != null)
                        return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                else
                        return '{"mensaje": "Error al almacenar el registro"}';
                //Genero un codigo aleatorio para la empresa
        }



        public static function obtenerEmpresas(){
                $contenidoArchivoEmpresas = file_get_contents('../data/empresas.json');

                echo ($contenidoArchivoEmpresas);
        }


        public static function obtenerEmpresa($db, $codigoEmpresa){
                $result = $db->getReference('empresas')
                                ->getChild($codigoEmpresa)
                                ->getValue();
                
                echo json_encode($result);
        }


        public function editarEmpresa($db, $empresaCode){
                $productos = $db->getReference('empresas')
                                ->getChild($empresaCode)
                                ->getChild('productos')
                                ->getSnapshot()
                                ->getValue();
                
                //$productos = $this->getData();
                echo json_encode($productos);

                $sucursales = $db->getReference('empresas')
                                ->getChild($empresaCode)
                                ->getChild('sucursales')
                                ->getSnapshot()
                                ->getValue();
                
                //$sucursales = $this->getData();
                echo json_encode($sucursales);

                $empresa = $this->getData();



/*
 $result = $db->getReference('empresas')
                                ->getChild($empresaCode)
                                ->set($this->getData());
        
                        
                        if($result->getKey() != null)
                                return '{"mensaje": "Registro alamacenado", "key":"'. $result->getKey().'"}';
                        else
                                return '{"mensaje": "Error al almacenar el registro"}';
                        //Genero un codigo aleatorio para la empresa
                */

        }

        public static function eliminarEmpresa($empresaCode){
                $contenidoArchivoEmpresas = file_get_contents("../data/empresas.json");
                $empresas = json_decode($contenidoArchivoEmpresas, true);

                for($i=0; $i<sizeof($empresas); $i++){
                if($empresas[$i]['empresaCode'] == $empresaCode){
                        $index = $i;
                        
                        array_splice($empresas, $index, 1);

                        $archivoEmpresa = fopen('../data/empresas.json', 'w');
                        fwrite($archivoEmpresa, json_encode($empresas));
                        fclose($archivoEmpresa);
                        

                break;
                }
                }

                echo '{"codigoResultado": 1,"mensaje": "Empresa eliminada con exito"}';
                
        }

        //Metodos

        /**
         * Get the value of nombreEmpresa
         */ 
        public function getNombreEmpresa()
        {
                return $this->nombreEmpresa;
        }

        /**
         * Set the value of nombreEmpresa
         *
         * @return  self
         */ 
        public function setNombreEmpresa($nombreEmpresa)
        {
                $this->nombreEmpresa = $nombreEmpresa;

                return $this;
        }

        /**
         * Get the value of logoEmpresa
         */ 
        public function getLogoEmpresa()
        {
                return $this->logoEmpresa;
        }

        /**
         * Set the value of logoEmpresa
         *
         * @return  self
         */ 
        public function setLogoEmpresa($logoEmpresa)
        {
                $this->logoEmpresa = $logoEmpresa;

                return $this;
        }

        /**
         * Get the value of bannerEmpresa
         */ 
        public function getBannerEmpresa()
        {
                return $this->bannerEmpresa;
        }

        /**
         * Set the value of bannerEmpresa
         *
         * @return  self
         */ 
        public function setBannerEmpresa($bannerEmpresa)
        {
                $this->bannerEmpresa = $bannerEmpresa;

                return $this;
        }

        /**
         * Get the value of correoEmpresa
         */ 
        public function getCorreoEmpresa()
        {
                return $this->correoEmpresa;
        }

        /**
         * Set the value of correoEmpresa
         *
         * @return  self
         */ 
        public function setCorreoEmpresa($correoEmpresa)
        {
                $this->correoEmpresa = $correoEmpresa;

                return $this;
        }

        /**
         * Get the value of passwordEmpresa
         */ 
        public function getPasswordEmpresa()
        {
                return $this->passwordEmpresa;
        }

        /**
         * Set the value of passwordEmpresa
         *
         * @return  self
         */ 
        public function setPasswordEmpresa($passwordEmpresa)
        {
                $this->passwordEmpresa = $passwordEmpresa;

                return $this;
        }

        /**
         * Get the value of soporteEmpresa
         */ 
        public function getSoporteEmpresa()
        {
                return $this->soporteEmpresa;
        }

        /**
         * Set the value of soporteEmpresa
         *
         * @return  self
         */ 
        public function setSoporteEmpresa($soporteEmpresa)
        {
                $this->soporteEmpresa = $soporteEmpresa;

                return $this;
        }

        /**
         * Get the value of facebookEmpresa
         */ 
        public function getFacebookEmpresa()
        {
                return $this->facebookEmpresa;
        }

        /**
         * Set the value of facebookEmpresa
         *
         * @return  self
         */ 
        public function setFacebookEmpresa($facebookEmpresa)
        {
                $this->facebookEmpresa = $facebookEmpresa;

                return $this;
        }

        /**
         * Get the value of numeroEmpresa
         */ 
        public function getNumeroEmpresa()
        {
                return $this->numeroEmpresa;
        }

        /**
         * Set the value of numeroEmpresa
         *
         * @return  self
         */ 
        public function setNumeroEmpresa($numeroEmpresa)
        {
                $this->numeroEmpresa = $numeroEmpresa;

                return $this;
        }

        /**
         * Get the value of instagramEmpresa
         */ 
        public function getInstagramEmpresa()
        {
                return $this->instagramEmpresa;
        }

        /**
         * Set the value of instagramEmpresa
         *
         * @return  self
         */ 
        public function setInstagramEmpresa($instagramEmpresa)
        {
                $this->instagramEmpresa = $instagramEmpresa;

                return $this;
        }

        /**
         * Get the value of youtubeEmpresa
         */ 
        public function getYoutubeEmpresa()
        {
                return $this->youtubeEmpresa;
        }

        /**
         * Set the value of youtubeEmpresa
         *
         * @return  self
         */ 
        public function setYoutubeEmpresa($youtubeEmpresa)
        {
                $this->youtubeEmpresa = $youtubeEmpresa;

                return $this;
        }

        /**
         * Get the value of direccionEmpresa
         */ 
        public function getDireccionEmpresa()
        {
                return $this->direccionEmpresa;
        }

        /**
         * Set the value of direccionEmpresa
         *
         * @return  self
         */ 
        public function setDireccionEmpresa($direccionEmpresa)
        {
                $this->direccionEmpresa = $direccionEmpresa;

                return $this;
        }

        /**
         * Get the value of latitudEmpresa
         */ 
        public function getLatitudEmpresa()
        {
                return $this->latitudEmpresa;
        }

        /**
         * Set the value of latitudEmpresa
         *
         * @return  self
         */ 
        public function setLatitudEmpresa($latitudEmpresa)
        {
                $this->latitudEmpresa = $latitudEmpresa;

                return $this;
        }

        /**
         * Get the value of altitudEmpresa
         */ 
        public function getAltitudEmpresa()
        {
                return $this->altitudEmpresa;
        }

        /**
         * Set the value of altitudEmpresa
         *
         * @return  self
         */ 
        public function setAltitudEmpresa($altitudEmpresa)
        {
                $this->altitudEmpresa = $altitudEmpresa;

                return $this;
        }

        /**
         * Get the value of planEmpresa
         */ 
        public function getPlanEmpresa()
        {
                return $this->planEmpresa;
        }

        /**
         * Set the value of planEmpresa
         *
         * @return  self
         */ 
        public function setPlanEmpresa($planEmpresa)
        {
                $this->planEmpresa = $planEmpresa;

                return $this;
        }
    }



?>