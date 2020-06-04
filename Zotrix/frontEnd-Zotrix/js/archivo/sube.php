<?php
	include("../class/class-user.php");

$nombre=$_FILES['imagenUsuario']['name'];
$guardado=$_FILES['imagenUsuario']['tmp_name'];

echo ($destino = 'archivos/'.$nombre);

if(!file_exists('archivos')){
	mkdir('archivos',0777,true);
	if(file_exists('archivos')){
		if(move_uploaded_file($guardado, 'archivos/'.$nombre)){
			echo "Archivo guardado con exito";
		}else{
			echo "Archivo no se pudo guardar";
		}
	}
}else{
	if(move_uploaded_file($guardado, 'archivos/'.$nombre)){
		echo "Archivo guardado con exito";
	}else{
		echo "Archivo no se pudo guardar";
	}
}


?>