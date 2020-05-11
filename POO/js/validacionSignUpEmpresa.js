var localStorage = window.localStorage;
var informacionE = [];


let pais = ['Honduras', 'El Salvador', 'Estados Unidos'];
for(let i=0; i<pais.length; i++){
    document.getElementById("paisEmpresa").innerHTML += `<option value="${pais[i]}">${pais[i]}</option>`;
}

let estado = ['Distrito Central', 'El Porvenir', 'Lepaterique'];

for(let i=0; i<estado.length; i++){
    document.getElementById("estadoEmpresa").innerHTML += `<option value="${estado[i]}">${estado[i]}</option>`;
}


if(localStorage.getItem("informacion") == null){

    informacionE = [{

        nombreEmpresa: "Jetstereo",
        imagenEmpresa: "img/Jetstereo.jpg",
        bannerEmpresa: "img/Jetstereobanner.jpg",
        correoEmpresa: "jetstereo@hotmail.com",
        paisEmpresa: "Honduras",
        estadoEmpresa: "Francisco Morazán",
        ciudadEmpresa: "Tegucigalpa",
        zipEmpresa: "11101",
        telefonoEmpresa: "55555555",
        sucursalEmpresa: "Tegucigalpa, calle 13",
        contraseñaEmpresa: "jetstereo2210",

    }];


    localStorage.setItem("informacionE", JSON.stringify(informacionE));

}else{

    informacionE = JSON.parse(localStorage.getItem('informacion'));
}

console.log(informacionE)


window.onload = Inicio;


function Inicio(){

    console.log("Inicio Validaciones");
    document.getElementById("registrarEmpresa").addEventListener('click', guardarInformacionEmpresa, false);

}

function guardarInformacionEmpresa(){

    if(validar() ){

        console.log("Verdadero");

        let informacion = {

            nombreEmpresa: document.getElementById("nombreEmpresa").value,
            imagenEmpresa: document.getElementById("imagenEmpresa").value,
            bannerEmpresa: document.getElementById("bannerEmpresa").value,
            correoEmpresa: document.getElementById("correoEmpresa").value,
            paisEmpresa: document.getElementById("paisEmpresa").value,
            estadoEmpresa: document.getElementById("estadoEmpresa").value,
            ciudadEmpresa: document.getElementById("ciudadEmpresa").value,
            zipEmpresa: document.getElementById("zipEmpresa").value,
            telefonoEmpresa: document.getElementById("numeroEmpresa").value,
            sucursalEmpresa: document.getElementById("sucursalEmpresa").value,
            contraseñaEmpresa: document.getElementById("contraseñaEmpresa").value,

        };

    console.log(JSON.stringify(informacion));
    logins.push(informacion);
    localStorage.setItem('logins', JSON.stringify(logins));
    window.location = "enterprise.html";
    }
}


function validar(e){

    if(validarNombreEmpresa() && validarCorreoEmpresa() && validarPaisEmpresa() && validarEstadoEmpresa() && validarNumeroEmpresa() && validarCiudadEmpresa() && validarZipEmpresa() && validarContraseñaEmpresa() && validarConfirmacionContraseñaEmpresa() ){
        console.log("Retorno");
        return true;
    }
    else{

        camposVacios();
    }


}

function camposVacios(){

    var nombre = document.getElementById("nombreEmpresa");
    var correo = document.getElementById("correoEmpresa");
    var pais = document.getElementById("paisEmpresa");
    var estado = document.getElementById("estadoEmpresa");
    var numero = document.getElementById("numeroEmpresa");
    var ciudad = document.getElementById('ciudadEmpresa');
    var sucursal = document.getElementById("sucursalEmpresa");
    var zip = document.getElementById("zipEmpresa");
    var contraseña = document.getElementById("contraseñaEmpresa");
    var ccontraseña = document.getElementById("confirmarContraseñaEmpresa");

    if(nombre.value == ""){
        document.getElementById("errorNombreEmpresa").innerHTML="";
        document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese el nombre de la Empresa </div>`;
        document.getElementById("nombreEmpresa").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
    }

    if(correo.value == ""){
        document.getElementById("errorCorreoEmpresa").innerHTML="";
        document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoEmpresa").classList.add("is-invalid");
        console.log("Correo: Campo vacio")
    }

    if(pais.value == 0){
        console.log("Entro a pais");
        pais.focus();
        document.getElementById("errorPaisEmpresa").innerHTML="";
        document.getElementById("errorPaisEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un país </div>`;
        console.log("Pais: Campo vacio");
    }

    if(estado.value == 0){
        console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstadoEmpresa").innerHTML="";
        document.getElementById("errorEstadoEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Estado: Campo vacio");
    }

    if(numero.value == ""){
        console.log("Entro a numero");
        numero.focus();
        document.getElementById("errorNumeroEmpresa").innerHTML="";
        document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su numero </div>`;
        document.getElementById("numeroEmpresa").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

    }

    if(ciudad.value == ""){
        document.getElementById("errorCiudadEmpresa").innerHTML="";
        document.getElementById("errorCiudadEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese una ciudad </div>`;
        document.getElementById("ciudadEmpresa").classList.add("is-invalid");
        console.log("Ciudad: Campo vacio");

    }

    if(sucursal.value == ""){
        console.log("Entro a sucursal");
        document.getElementById("errorSucursalEmpresa").innerHTML="";
        document.getElementById("errorSucursalEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese una sucursal </div>`;
        document.getElementById("sucursalEmpresa").classList.add("is-invalid");
        console.log("Sucursal: Campo vacio");
    
    }

    if(zip.value == ""){
        console.log("Entro a zip");
        document.getElementById("errorZipEmpresa").innerHTML="";
        document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese una zip </div>`;
        document.getElementById("zipEmpresa").classList.add("is-invalid");
        console.log("Zip: Campo vacio");
    
    }


    if(contraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaEmpresa").innerHTML="";
        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaEmpresa").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");

    }


    if(ccontraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Complete el campo </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
    }
}


function validarNombreEmpresa(){

    var nombre = document.getElementById('nombreEmpresa');
    console.log("Nombre: "+ nombre.value);

    if(nombre.value == ""){
        console.log("I'm free");
        nombre.focus();
        document.getElementById("errorNombreEmpresa").innerHTML="";
        document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("nombreEmpresa").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorNombreEmpresa").innerHTML="";
    document.getElementById("errorNombreEmpresa").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("nombreEmpresa").classList.add("is-valid");
    document.getElementById("nombreEmpresa").classList.remove("is-invalid");
    document.getElementById("nombreEmpresa").classList.add("is-valid");
    console.log("Nombre: "+ nombre.value)
    return true;


}


function validarEmail(email){
    console.log("Entré en la función: "+ email);
    var patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if (!patron.test(email)){
        return false;
    }else {
        return true;
    }
}


function validarCorreoEmpresa(){
    var correo = document.getElementById('correoEmpresa');
    console.log("Correo: "+ correo.value);


    if(correo.value == ""){
        console.log("I'm not free");
        correo.focus();
        document.getElementById("errorCorreoEmpresa").innerHTML="";
        document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoEmpresa").classList.add("is-invalid");
        console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreoEmpresa").innerHTML="";
            document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: #DC3545"> El patrón ingresado es incorrecto. Debe ser user@example.com </div>`;
            document.getElementById("correoEmpresa").classList.add("is-invalid");
            console.log("Correo: Campo vacio");
            correo.focus();
        }else{

            document.getElementById("errorCorreoEmpresa").innerHTML="";
            document.getElementById("errorCorreoEmpresa").innerHTML += `<div style=" color: green">  </div>`;
            document.getElementById("correoEmpresa").classList.add("is-valid");
            document.getElementById("correoEmpresa").classList.remove("is-invalid");
            document.getElementById("correoEmpresa").classList.add("is-valid");
            console.log("Correo: "+ correo.value);  
            return true;
            
        }
    
    
        

    

}


function validarPaisEmpresa(){

    console.log("Entro a pais");
    var pais = document.getElementById('paisEmpresa');
    console.log("Pais: "+pais.value);

    if(pais.value == 0){
        console.log("Entro a pais");
        pais.focus();
        document.getElementById("errorPaisEmpresa").innerHTML="";
        document.getElementById("errorPaisEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un pais </div>`;
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorPaisEmpresa").innerHTML="";
    document.getElementById("errorPaisEmpresa").innerHTML += `<div style=" color: green"></div>`;
    console.log("Pais: "+ pais.value);
    return true;


}

function validarEstadoEmpresa(){

    console.log("Entro a estado");
    var estado = document.getElementById('estadoEmpresa');
    console.log("Estado: "+estado.value);

    if(estado.value == 0){
        console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstadoEmpresa").innerHTML="";
        document.getElementById("errorEstadoEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Estado: Campo vacio");
        return false;
    }
    document.getElementById("errorEstadoEmpresa").innerHTML="";
    document.getElementById("errorEstadoEmpresa").innerHTML += `<div style=" color: green"></div>`;
    console.log("Estado: "+ estado.value);
    return true;
}


function validarCiudadEmpresa(){

    var ciudad = document.getElementById('ciudadEmpresa');
    console.log("Ciudad: "+ ciudad.value);

    if(ciudad.value == ""){
        console.log("Entro a ciudad");
        ciudad.focus();
        document.getElementById("errorCiudadEmpresa").innerHTML="";
        document.getElementById("errorCiudadEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su ciudad </div>`;
        document.getElementById("ciudadEmpresa").classList.add("is-invalid");
        console.log("Ciudad: Campo vacio");
        return false;
    }
    document.getElementById("errorCiudadEmpresa").innerHTML="";
    document.getElementById("errorCiudadEmpresa").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("ciudadEmpresa").classList.add("is-valid");
    document.getElementById("ciudadEmpresa").classList.remove("is-invalid");
    document.getElementById("ciudadEmpresa").classList.add("is-valid");
    console.log("Ciudad: "+ ciudad.value)
    return true;

}


function validarNumero(numero){
    console.log("Entré en la función: "+ numero);
    var patron = /^([0-9])*$/ ;

        if(!/^([0-9])*$/.test(numero)){
            return false;
        }else{
            return true;
        }
}



function validarNumeroEmpresa(){

    var numero = document.getElementById('numeroEmpresa');
    console.log("Numero: "+ numero.value);

    if(numero.value == ""){
        console.log("I'm free");
        numero.focus();
        document.getElementById("errorNumeroEmpresa").innerHTML="";
        document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su numero </div>`;
        document.getElementById("numeroEmpresa").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(numero.value) == false){
            document.getElementById("errorNumeroEmpresa").innerHTML="";
            document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("numeroEmpresa").classList.add("is-invalid");
            console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(numero.value != ""){
            document.getElementById("errorNumeroEmpresa").innerHTML="";
            document.getElementById("errorNumeroEmpresa").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("numeroEmpresa").classList.add("is-valid");
            document.getElementById("numeroEmpresa").classList.remove("is-invalid");
            document.getElementById("numeroEmpresa").classList.add("is-valid");
            console.log("Numero: "+ document.getElementById("numeroEmpresa").value);  
            return true;
        }

}


function validarSucursalEmpresa(){

    var sucursal = document.getElementById('sucursalEmpresa');
    console.log("Sucursal: "+ sucursal.value);

    if(sucursal.value == ""){
        console.log("Entro a sucursal");
        sucursal.focus();
        document.getElementById("errorSucursalEmpresa").innerHTML="";
        document.getElementById("errorSucursalEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese una sucursal </div>`;
        document.getElementById("sucursalEmpresa").classList.add("is-invalid");
        console.log("Sucursal: Campo vacio");
        return false;
    }
    document.getElementById("errorSucursalEmpresa").innerHTML="";
    document.getElementById("errorSucursalEmpresa").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("sucursalEmpresa").classList.add("is-valid");
    document.getElementById("sucursalEmpresa").classList.remove("is-invalid");
    document.getElementById("sucursalEmpresa").classList.add("is-valid");
    console.log("Sucursal: "+ sucursal.value)
    return true;

}



function validarZipEmpresa(){

    var zip = document.getElementById('zipEmpresa');
    console.log("Numero: "+ zip.value);

    if(zip.value == ""){
        console.log("Entro a zip");
        zip.focus();
        document.getElementById("errorZipEmpresa").innerHTML="";
        document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su zip </div>`;
        document.getElementById("zipEmpresa").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(zip.value) == false){
            document.getElementById("errorZipEmpresa").innerHTML="";
            document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("zipEmpresa").classList.add("is-invalid");
            console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(zip.value != ""){
            document.getElementById("errorZipEmpresa").innerHTML="";
            document.getElementById("errorZipEmpresa").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("zipEmpresa").classList.add("is-valid");
            document.getElementById("zipEmpresa").classList.remove("is-invalid");
            document.getElementById("zipEmpresa").classList.add("is-valid");
            console.log("Numero: "+ document.getElementById("zipEmpresa").value);  
            return true;
        }

}


function validarContraseñaEmpresa(){
    var contraseña = document.getElementById('contraseñaEmpresa');
    console.log("Contraseña: "+ contraseña.value);


    if(contraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaEmpresa").innerHTML="";
        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaEmpresa").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");

        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
        confirmarContraseñaEmpresa.value = "";
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);

        return false;
    }else
            if(contraseña.value != ""){
                if(contraseña.value.length <= 4){
                    console.log("Entro");
                    document.getElementById("errorContraseñaEmpresa").innerHTML="";
                    document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: yellow"> Seguridad: Débil </div>`;
                    document.getElementById("contraseñaEmpresa").classList.remove("is-invalid");
                    document.getElementById("contraseñaEmpresa").classList.add("validYellow");
                    console.log("Contraseña: "+ document.getElementById("contraseña").value);
                }else
                    if(contraseña.value.length > 4 && contraseña.value.length <= 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaEmpresa").innerHTML="";
                        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: gray"> Seguridad: Neutra </div>`;
                        document.getElementById("contraseñaEmpresa").classList.add("is-valid");
                        document.getElementById("contraseñaEmpresa").classList.remove("is-invalid");
                        document.getElementById("contraseñaEmpresa").classList.add("is-valid");
                        console.log("Contraseña: "+ document.getElementById("contraseñaEmpresa").value); 
                }else
                    if(contraseña.value.length > 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaEmpresa").innerHTML="";
                        document.getElementById("errorContraseñaEmpresa").innerHTML += `<div style=" color: green"> Seguridad: Alta </div>`;
                        document.getElementById("contraseñaEmpresa").classList.remove("is-invalid");
                        document.getElementById("contraseñaEmpresa").classList.add("is-valid");
                        console.log("Contraseña: "+ document.getElementById("contraseñaEmpresa").value); 
                }
            document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
            document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
            document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
            console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);
            
            return true;
                }
}



function validarConfirmacionContraseñaEmpresa(){
    var contraseña = document.getElementById("contraseñaEmpresa");
    var ccontraseña = document.getElementById("confirmarContraseñaEmpresa");

    console.log("Confirmando contraseña");

    if(contraseña.value != ccontraseña.value){
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
        document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaEmpresa").classList.add("is-invalid");
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaEmpresa").value);
        ccontraseña.focus();
        return false;
    } else
        if(contraseña.value == null){
            
            return false;
    }else{
        console.log("Entro");
                    document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML="";
                    document.getElementById("errorConfirmarContraseñaEmpresa").innerHTML += `<div style=" color: green"> Contraseñas correctas </div>`;
                    document.getElementById("confirmarContraseñaEmpresa").classList.remove("is-invalid");
                    document.getElementById("confirmarContraseñaEmpresa").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("contraseñaEmpresa").value  +"= Contraseña confirmada: "+ document.getElementById("confirmarContraseñaEmpresa").value);
    return true;
}
    }



    