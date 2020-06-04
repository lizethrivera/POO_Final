<?php
    session_start();
    //setcookie("usuario","Juan", time()+(60*60*24*31),"/");
    //echo "Cookie enviada al cliente y guardada";

    echo "COOKIE: ".$_COOKIE["token"]."<br>";
    echo "SESSION: ".$_SESSION["token"]."<br>";
?>