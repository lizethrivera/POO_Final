
//Validaciones y Otros

var localStorage = window.localStorage;
var informacionE = [];
var tipoPlan;


if(localStorage.getItem("informacion") == null){

    informacionE = [{

        nombreEmpresa: "Jetstereo",
        imagenEmpresa: "img/Jetstereo.jpg",
        bannerEmpresa: "img/Jetstereobanner.jpg",
        correoEmpresa: "jetstereo@hotmail.com",
		passwordEmpresa: "1234Jetstereo",
		planEmpresa: "Platino",
		redesSociales: {
			soporteEmpresa: "jetstereo.soporte.es",
			numeroEmpresa: "99999999",
			facebookEmpresa: "Jetstereo Profesional",
			instagramEmpresa: "",
			youtubeEmpresa: "",
		},
		sucursales: {
			nombreSucursal: "Principal",
			coordenadas: "15°2´16¨ N, 89°2´18¨O",
		}

    }];


    localStorage.setItem("informacionE", JSON.stringify(informacionE));

}else{

    informacionE = JSON.parse(localStorage.getItem('informacion'));
}

//console.log(informacionE)


window.onload = Inicio;


function Inicio(){

    //console.log("Inicio Validaciones");
    document.getElementById("registrarEmpresa").addEventListener('click', guardarInformacionEmpresa, false);

}

function readCookie(name) {

    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {

        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
        }

    }

    return null;

}

function guardarInfoEmpresa(){
    console.log("Hola");
    var codigoUsuario = readCookie('userCode');
    var nombreEmpresa = document.getElementById('nombreEmpresa').value;
    var logoEmpresa = document.getElementById('imagenEmpresa').value;
    var bannerEmpresa = document.getElementById('bannerEmpresa').value;
    var correoEmpresa = document.getElementById('correoEmpresa').value;
    var passwordEmpresa = document.getElementById('contraseñaEmpresa').value;
    var direccionEmpresa = document.getElementById('direccionEmpresa').value;
    var latitudEmpresa = document.getElementById('latitudEmpresa').value;
    var altitudEmpresa = document.getElementById('longitudEmpresa').value;
    var soporteEmpresa = document.getElementById('soporteEmpresa').value;
    var numeroEmpresa = document.getElementById('numeroEmpresa').value;
    var facebookEmpresa = document.getElementById('facebookEmpresa').value;
    var instagramEmpresa = document.getElementById('instagramEmpresa').value;
    var youtubeEmpresa = document.getElementById('youtubeEmpresa').value;

    let persona = {
        nombreEmpresa: nombreEmpresa,
        logoEmpresa: logoEmpresa,
        bannerEmpresa: bannerEmpresa,
        correoEmpresa: correoEmpresa,
        passwordEmpresa: passwordEmpresa,
        direccionEmpresa: direccionEmpresa,
        latitudEmpresa: latitudEmpresa,
        altitudEmpresa: altitudEmpresa,
        soporteEmpresa: soporteEmpresa,
        numeroEmpresa: numeroEmpresa,
        facebookEmpresa: facebookEmpresa,
        instagramEmpresa: instagramEmpresa,
        youtubeEmpresa: youtubeEmpresa,
        planEmpresa: tipoPlan
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/bussiness.php',
        method: 'POST',
        data: JSON.stringify(persona), //Usamos JSON
        dataType: 'json',

        success: function(respuesta) {
            console.log(respuesta);
            window.location = "loginEmpresa.html";

        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error) {

                console.error("Aiuda", error);
            } //Función que tiene como parametro el error.
    });
}




function guardarInformacionEmpresa(){

    if(validar() ){

       // console.log("Verdadero");

        let informacion = {

		nombreEmpresa: document.getElementById("nombreEmpresa").value,
		imagenEmpresa: document.getElementById("imagenEmpresa").value,
        bannerEmpresa:	document.getElementById("bannerEmpresa").value,
        correoEmpresa: document.getElementById("correoEmpresa").value,
		passwordEmpresa: document.getElementById("contraseñaEmpresa").value,
		planEmpresa: tipoPlan,
		redesSociales: {
			soporteEmpresa: document.getElementById("soporteEmpresa").value,
			numeroEmpresa: document.getElementById("numeroEmpresa").value,
			facebookEmpresa: document.getElementById("facebookEmpresa").value,
			instagramEmpresa: document.getElementById("instagramEmpresa").value,
			youtubeEmpresa: document.getElementById("youtubeEmpresa").value,
		},
		sucursales: {
			nombreSucursal: document.getElementById("nombreSucursal"),
			coordenadas: document.getElementById("coordenadasSucursal"),
		}
        };

    //console.log(JSON.stringify(informacion));
    informacionE.push(informacion);
	localStorage.setItem('informacionE', JSON.stringify(informacionE));
    //limpiarCamposLI();
    guardarInfoEmpresa();
    return true;
    //window.location = "enterprise.html";
    }
}


function validar(e){

    if(validarNombreEmpresa() && validarCorreoEmpresa() && validarContraseñaEmpresa() && validarConfirmacionContraseñaEmpresa() && validarTerminos()  ){
		//console.log("Retorno");
		
        return true;
    }
    else{
		camposVacios();
    }


}
var noselec = "Obtener"


function limpiarCamposLI(){


    document.getElementById("errorNombreEmpresa").innerHTML="";
    document.getElementById("nombreEmpresa").value = "";
    document.getElementById("nombreEmpresa").classList.remove("is-valid");

    document.getElementById("imagenUsuario").value = "";
    document.getElementById("imagenUsuario").classList.remove("is-valid");

	document.getElementById("bannerEmpresa").value = "";
	document.getElementById("bannerEmpresa").classList.remove("is-valid");
	
    document.getElementById("errorCorreoEmpresa").innerHTML="";
    document.getElementById("correoEmpresa").value = "";
    document.getElementById("correoEmpresa").classList.remove("is-valid");

    document.getElementById("errorContraseñaEmpresa").innerHTML="";
    document.getElementById("contraseñaEmpresa").value = "";
    document.getElementById("contraseñaEmpresa").classList.remove("is-valid");

    document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
    document.getElementById("confirmarContraseñaEmpresa").value = "";
    document.getElementById("confirmarContraseñaEmpresa").classList.remove("is-valid");


    document.getElementById("checkEmpresa").checked = false;



    

}

function planGratuito(){
	tipoPlan = "gratuito";
	//console.log(tipoPlan);

	document.getElementById("planPremium").textContent = noselec ;
	document.getElementById("planPlatino").textContent = noselec;
	document.getElementById("planGratuito").textContent = "Seleccionado";
}

function planPremium(){
	tipoPlan = "premium";
	//console.log(tipoPlan);

	document.getElementById("planPlatino").textContent = noselec;
	document.getElementById("planGratuito").textContent = noselec;
	document.getElementById("planPremium").textContent = "Seleccionado";
}

function planPlatino(){
	tipoPlan = "platino";
	//console.log(tipoPlan);

	document.getElementById("planPremium").textContent = noselec;
	document.getElementById("planGratuito").textContent = noselec;
	document.getElementById("planPlatino").textContent = "Seleccionado";
}

function camposVacios(){

    var nombre = document.getElementById("nombreEmpresa");
	var correo = document.getElementById("correoEmpresa");
	var plan = tipoPlan;
    var contraseña = document.getElementById("contraseñaEmpresa");
	var ccontraseña = document.getElementById("confirmarContraseñaEmpresa");
	var validar = document.getElementById("checkEmpresa");

    if(nombre.value == ""){
        document.getElementById("errorNombreEmpresa").innerHTML="";
        document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese el nombre de la Empresa </div>`;
        document.getElementById("nombreEmpresa").classList.add("is-invalid");
       // console.log("Nombre: Campo vacio");
    }

    if(correo.value == ""){
        document.getElementById("errorCorreoEmpresa").innerHTML="";
        document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoEmpresa").classList.add("is-invalid");
       // console.log("Correo: Campo vacio")
    }

	if(validar.checked != true || validar.checked == null){
        document.getElementById("errorChekedEmpresa").innerHTML="";
        document.getElementById("errorChekedEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe aceptar los terminos y condiciones </div>`;
    }

    if(contraseña.value == ""){
       // console.log("Entro contraseña");
        document.getElementById("errorContraseñaEmpresa").innerHTML="";
        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaEmpresa").classList.add("is-invalid");
       // console.log("Contraseña: Campo vacio");

    }


    if(ccontraseña.value == ""){
        //console.log("Entro contraseña");
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Complete el campo </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
       // console.log("Contraseña: Campo vacio");
    }
}


function validarNombreEmpresa(){

    var nombre = document.getElementById('nombreEmpresa');
   // console.log("Nombre: "+ nombre.value);

    if(nombre.value == ""){
        //console.log("I'm free");
        document.getElementById("errorNombreEmpresa").innerHTML="";
        document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese nombre de Empresa </div>`;
        document.getElementById("nombreEmpresa").classList.add("is-invalid");
        //console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorNombreEmpresa").innerHTML="";
    document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("nombreEmpresa").classList.add("is-valid");
    document.getElementById("nombreEmpresa").classList.remove("is-invalid");
    document.getElementById("nombreEmpresa").classList.add("is-valid");
    //console.log("Nombre: "+ nombre.value)
    return true;


}


function validarEmail(email){
    //console.log("Entré en la función: "+ email);
    var patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if (!patron.test(email)){
        return false;
    }else {
        return true;
    }
}


function validarCorreoEmpresa(){
    var correo = document.getElementById('correoEmpresa');
   //console.log("Correo: "+ correo.value);


    if(correo.value == ""){
       // console.log("I'm not free");
        document.getElementById("errorCorreoEmpresa").innerHTML="";
        document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese el correo </div>`;
        document.getElementById("correoEmpresa").classList.add("is-invalid");
        //console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreoEmpresa").innerHTML="";
            document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> El patrón ingresado es incorrecto. Debe ser user@example.com </div>`;
            document.getElementById("correoEmpresa").classList.add("is-invalid");
            //console.log("Correo: Campo vacio");
        }else{

            document.getElementById("errorCorreoEmpresa").innerHTML="";
            document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: green">  </div>`;
            document.getElementById("correoEmpresa").classList.add("is-valid");
            document.getElementById("correoEmpresa").classList.remove("is-invalid");
            document.getElementById("correoEmpresa").classList.add("is-valid");
            //console.log("Correo: "+ correo.value);  
            return true;
            
        }
    
    
        

    

}


function validarPaisEmpresa(){

    //console.log("Entro a pais");
    var pais = document.getElementById('paisEmpresa');
    //console.log("Pais: "+pais.value);

    if(pais.value == 0){
        //console.log("Entro a pais");
        pais.focus();
        document.getElementById("errorPaisEmpresa").innerHTML="";
        document.getElementById("errorPaisEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un pais </div>`;
        //console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorPaisEmpresa").innerHTML="";
    document.getElementById("errorPaisEmpresa").innerHTML += `<div style=" color: green"></div>`;
   //console.log("Pais: "+ pais.value);
    return true;


}

function validarEstadoEmpresa(){

   // console.log("Entro a estado");
    var estado = document.getElementById('estadoEmpresa');
    //console.log("Estado: "+estado.value);

    if(estado.value == 0){
       // console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstadoEmpresa").innerHTML="";
        document.getElementById("errorEstadoEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
       // console.log("Estado: Campo vacio");
        return false;
    }
    document.getElementById("errorEstadoEmpresa").innerHTML="";
    document.getElementById("errorEstadoEmpresa").innerHTML += `<div style=" color: green"></div>`;
   // console.log("Estado: "+ estado.value);
    return true;
}


function validarCiudadEmpresa(){

    var ciudad = document.getElementById('ciudadEmpresa');
    //console.log("Ciudad: "+ ciudad.value);

    if(ciudad.value == ""){
       // console.log("Entro a ciudad");
        ciudad.focus();
        document.getElementById("errorCiudadEmpresa").innerHTML="";
        document.getElementById("errorCiudadEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su ciudad </div>`;
        document.getElementById("ciudadEmpresa").classList.add("is-invalid");
       // console.log("Ciudad: Campo vacio");
        return false;
    }
    document.getElementById("errorCiudadEmpresa").innerHTML="";
    document.getElementById("errorCiudadEmpresa").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("ciudadEmpresa").classList.add("is-valid");
    document.getElementById("ciudadEmpresa").classList.remove("is-invalid");
    document.getElementById("ciudadEmpresa").classList.add("is-valid");
    //console.log("Ciudad: "+ ciudad.value)
    return true;

}


function validarNumero(numero){
    //console.log("Entré en la función: "+ numero);
    var patron = /^([0-9])*$/ ;

        if(!/^([0-9])*$/.test(numero)){
            return false;
        }else{
            return true;
        }
}



function validarNumeroEmpresa(){

    var numero = document.getElementById('numeroEmpresa');
    //console.log("Numero: "+ numero.value);

    if(numero.value == ""){
       // console.log("I'm free");
        document.getElementById("errorNumeroEmpresa").innerHTML="";
        document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese el numero </div>`;
        document.getElementById("numeroEmpresa").classList.add("is-invalid");
       // console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(numero.value) == false){
            document.getElementById("errorNumeroEmpresa").innerHTML="";
            document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("numeroEmpresa").classList.add("is-invalid");
           // console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(numero.value != ""){
            document.getElementById("errorNumeroEmpresa").innerHTML="";
            document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("numeroEmpresa").classList.add("is-valid");
            document.getElementById("numeroEmpresa").classList.remove("is-invalid");
            document.getElementById("numeroEmpresa").classList.add("is-valid");
           // console.log("Numero: "+ document.getElementById("numeroEmpresa").value);  
            return true;
        }

}






function validarZipEmpresa(){

    var zip = document.getElementById('zipEmpresa');
    //console.log("Numero: "+ zip.value);

    if(zip.value == ""){
       // console.log("Entro a zip");
        zip.focus();
        document.getElementById("errorZipEmpresa").innerHTML="";
        document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su zip </div>`;
        document.getElementById("zipEmpresa").classList.add("is-invalid");
        //console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(zip.value) == false){
            document.getElementById("errorZipEmpresa").innerHTML="";
            document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("zipEmpresa").classList.add("is-invalid");
          //  console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(zip.value != ""){
            document.getElementById("errorZipEmpresa").innerHTML="";
            document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("zipEmpresa").classList.add("is-valid");
            document.getElementById("zipEmpresa").classList.remove("is-invalid");
            document.getElementById("zipEmpresa").classList.add("is-valid");
          //  console.log("Numero: "+ document.getElementById("zipEmpresa").value);  
            return true;
        }

}


function validarContraseñaEmpresa(){
    var contraseña = document.getElementById('contraseñaEmpresa');
    //console.log("Contraseña: "+ contraseña.value);


    if(contraseña.value == ""){
        //console.log("Entro contraseña");
        document.getElementById("errorContraseñaEmpresa").innerHTML="";
        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaEmpresa").classList.add("is-invalid");
       // console.log("Contraseña: Campo vacio");

        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
        confirmarContraseñaEmpresa.value = "";
       // console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);

        return false;
    }else
            if(contraseña.value != ""){
                if(contraseña.value.length >= 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaEmpresa").innerHTML="";
                        document.getElementById("contraseñaEmpresa").classList.remove("is-invalid");
                        document.getElementById("contraseñaEmpresa").classList.add("is-valid");
                        console.log("Contraseña: "+ document.getElementById("contraseñaEmpresa").value); 
                }
            document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
            document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
            document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
          //  console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);
            
            return true;
                }
}



function validarConfirmacionContraseñaEmpresa(){
    var contraseña = document.getElementById("contraseñaEmpresa");
    var ccontraseña = document.getElementById("confirmarContraseñaEmpresa");

    //console.log("Confirmando contraseña");

    if(contraseña.value != ccontraseña.value){
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
        //console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);
        return false;
    } else
        if(contraseña.value == null){
            
            return false;
    }else{
        //console.log("Entro");
                    document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
                    document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: green"> Contraseñas correctas </div>`;
                    document.getElementById("confirmarContraseñaEmpresa").classList.remove("is-invalid");
                    document.getElementById("confirmarContraseñaEmpresa").classList.add("is-valid");
                   // console.log("Contraseña: "+ document.getElementById("contraseñaEmpresa").value  +"= Contraseña confirmada: "+ document.getElementById("confirmarContraseñaEmpresa").value);
    return true;
}
    }

function validarTerminos(){
	var validar = document.getElementById("checkEmpresa");

	if(validar.checked != true || validar.checked == null){
		document.getElementById("errorChekedEmpresa").innerHTML="";
		document.getElementById("errorChekedEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe aceptar los terminos y condiciones </div>`;
		return false;
	}
	else{
		if(validar.checked = true ){
			document.getElementById("errorChekedEmpresa").innerHTML="";
			return true;
		}
	}
}
	



