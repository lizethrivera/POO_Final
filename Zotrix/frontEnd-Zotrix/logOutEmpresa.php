<?php
    session_start();
    session_destroy();
    setcookie("tokenEmpresa",$resultado["tokenEmpresa"], time()+ (60*60*24*31), "/");
    setcookie("empresaCode","", time()-1, "/");

    header("Location: loginEmpresa.html");


?>