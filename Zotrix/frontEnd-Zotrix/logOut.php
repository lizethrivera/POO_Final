<?php
    session_start();
    session_destroy();
    setcookie("token",$resultado["token"], time()+ (60*60*24*31), "/");
    setcookie("nombreUsuario","", time()-1, "/");
    setcookie("apellidoUsuario","", time()-1, "/");
    setcookie("imgUsuario","", time()-1, "/");
    setcookie("correoUsuario","", time()-1, "/");

    header("Location: login.html");


?>