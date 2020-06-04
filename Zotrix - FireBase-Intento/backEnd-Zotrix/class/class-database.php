<?php
    require_once __DIR__.'../../vendor/autoload.php';

    use Kreait\Firebase\Factory;

    class Database{
        private $keyFile = '../secret/zotrix-7e678-f5ce3e59356d.json';
        private $URI = 'https://zotrix-7e678.firebaseio.com/';
        private $db;

        public function __construct(){      
            $firebase = (new Factory)
            ->withServiceAccount($this->keyFile)
            ->withDatabaseUri($this->URI);

        $this ->db = $database = $firebase->createDatabase();
        }

        public function getDB(){
            return $this->db;
        }

    }

?>