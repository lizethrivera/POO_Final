<?php

    copy($_FILES['imagenUsuario']['tmp_name'],$_FILES['imagenUsuario']['name']);
    echo "Archivo subido existosamente";
    $nombre = $_FILES['imagenUsuario']['name'];

    echo "<img src=\"$nombre\">";

?>