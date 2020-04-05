var localStorage = window.localStorage;
var informacioness = [];
var forma = document.forms;

var nombrev = false;
var apellidov = false;
var correov = false;
var contraseñav = false;



if(localStorage.getItem("informacion") == null){
    informacioness = [
        {
            nombre: "Juanito",
            apellido: "Alcalchofa",
            correo: "juanito.alchofa123@hotmail.com",
            estado: "Distrito Central",
            contraseña: "juanitoalca123"
        },


    ];

    localStorage.setItem("informacioness", JSON.stringify(informacioness));


}else{
    informacioness = JSON.parse(localStorage.getItem('informacion'));
}


console.log(informacioness);



window.onload = iniciar;

function validarFormulario(){
    
   // alert("Todo en orden");
    
    console.log('Validando Formulario');
    
    if(form.txt_nombre.value == ""){
        document.getElementById("errorNombre").innerHTML="";
        document.getElementById("errorNombre").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("txt_nombre").classList.add("validYellow");
        console.log("Nombre: Campo vacio");
       // return false;
    }else
        if(form.txt_nombre.value != ""){
            document.getElementById("errorNombre").innerHTML="";
            document.getElementById("errorNombre").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
            document.getElementById("txt_nombre").classList.add("is-valid");
            document.getElementById("txt_nombre").classList.remove("is-invalid");
            document.getElementById("txt_nombre").classList.add("is-valid");
            console.log("Nombre: "+ document.getElementById("txt_nombre").value);  
            
            //return true;
            }


    if(form.txt_apellido.value == ""){
        document.getElementById("errorApellido").innerHTML="";
        document.getElementById("errorApellido").innerHTML += `<div style=" color: #DC3545"> Ingrese su apellido </div>`;
        document.getElementById("txt_apellido").classList.add("is-invalid");
        console.log("Apellido: Campo vacio");
        //return false;
    }else
        if(form.txt_apellido.value != ""){
            document.getElementById("errorApellido").innerHTML="";
            document.getElementById("errorApellido").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
            document.getElementById("txt_apellido").classList.add("is-valid");
            document.getElementById("txt_apellido").classList.remove("is-invalid");
            document.getElementById("txt_apellido").classList.add("is-valid");
            console.log("Apellido: "+ document.getElementById("txt_apellido").value);  
            //return true;
            }


    if(form.txt_contraseña.value == ""){
        document.getElementById("errorContraseña").innerHTML="";
        document.getElementById("errorContraseña").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("txt_contraseña").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
        //return false;
    }else
        if(form.txt_contraseña.value != ""){
            if(form.txt_contraseña.value.length <= 4){
                console.log("Entro");
                document.getElementById("errorContraseña").innerHTML="";
                document.getElementById("errorContraseña").innerHTML += `<div style=" color: #DC3545"> Seguridad: Débil </div>`;
                document.getElementById("txt_contraseña").classList.add("is-valid");
                document.getElementById("txt_contraseña").classList.remove("is-invalid");
                document.getElementById("txt_contraseña").classList.add("is-valid");
                console.log("Contraseña: "+ document.getElementById("txt_contraseña").value);
            }else
                if(form.txt_contraseña.value.length > 4 && form.txt_contraseña.value.length <= 8){
                    console.log("Entro");
                    document.getElementById("errorContraseña").innerHTML="";
                    document.getElementById("errorContraseña").innerHTML += `<div style=" color: gray"> Seguridad: Neutra </div>`;
                    document.getElementById("txt_contraseña").classList.add("is-valid");
                    document.getElementById("txt_contraseña").classList.remove("is-invalid");
                    document.getElementById("txt_contraseña").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("txt_contraseña").value); 
            }else
                if(form.txt_contraseña.value.length > 8){
                    console.log("Entro");
                    document.getElementById("errorContraseña").innerHTML="";
                    document.getElementById("errorContraseña").innerHTML += `<div style=" color: green"> Seguridad: Alta </div>`;
                    document.getElementById("txt_contraseña").classList.remove("is-invalid");
                    document.getElementById("txt_contraseña").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("txt_contraseña").value); 
            }
           // return true;
            }
            


    if(form.txt_numero.value == ""){
        document.getElementById("errorNumero").innerHTML="";
        document.getElementById("errorNumero").innerHTML += `<div style=" color: #DC3545"> Ingrese su numero </div>`;
        document.getElementById("txt_numero").classList.add("is-invalid");
        console.log("Numero: Campo vacio");
        //return false;
    }else
        if(validarNumero(form.txt_numero.value) == false){
            document.getElementById("errorNumero").innerHTML="";
            document.getElementById("errorNumero").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("txt_numero").classList.add("is-invalid");
            console.log("Numero: Campo vacio");
           // return false;
        }
    else
        if(form.txt_numero.value != ""){
            document.getElementById("errorNumero").innerHTML="";
            document.getElementById("errorNumero").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
            document.getElementById("txt_numero").classList.add("is-valid");
            document.getElementById("txt_numero").classList.remove("is-invalid");
            document.getElementById("txt_numero").classList.add("is-valid");
            console.log("Numero: "+ document.getElementById("txt_numero").value);  
           // return true;
            }

    if(form.txt_correo.value == ""){
        document.getElementById("errorCorreo").innerHTML="";
        document.getElementById("errorCorreo").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("txt_correo").classList.add("is-invalid");
        console.log("Numero: Campo vacio");
        //return false;
    }else
        if(validarEmail(form.txt_correo.value) == false){
            document.getElementById("errorCorreo").innerHTML="";
            document.getElementById("errorCorreo").innerHTML += `<div style=" color: #DC3545"> El patrón ingresado es incorrecto. Debe ser user@example.com </div>`;
            document.getElementById("txt_correo").classList.add("is-invalid");
            console.log("Correo: Campo vacio");
           // return false;
        }
    else
        if(form.txt_correo.value != ""){
            document.getElementById("errorCorreo").innerHTML="";
            document.getElementById("errorCorreo").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
            document.getElementById("txt_correo").classList.add("is-valid");
            document.getElementById("txt_correo").classList.remove("is-invalid");
            document.getElementById("txt_correo").classList.add("is-valid");
            console.log("Correo: "+ document.getElementById("txt_correo").value);  
           // return true;
            }

    
    if(form.txt_contraseña.value != form.txt_confirmarcontraseña.value){
        document.getElementById("errorCContraseñas").innerHTML="";
        document.getElementById("errorConfirmarContraseña").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("txt_confirmarcontraseña").classList.add("is-invalid");
        console.log("Contraseña confirmada: " + document.getElementById("txt_contraseñaconfirmada").value);
        //return false;
    }else{
        console.log("Entro");
                    document.getElementById("errorConfirmarContraseña").innerHTML="";
                    document.getElementById("errorConfirmarContraseña").innerHTML += `<div style=" color: green"> Contraseñas correctas </div>`;
                    document.getElementById("txt_confirmarcontraseña").classList.remove("is-invalid");
                    document.getElementById("txt_confirmarcontraseña").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("txt_contraseña").value  +"Contraseña confirmada: "+ document.getElementById("txt_confirmarcontraseña").value);
    //return true;
    }

    return false;
    guardarInfo();    

}


//Mostrando Contraseña
function mostrarContrasena(){
    console.log("Contra");

    var tipo = document.getElementById("contraseña");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }


    return false;
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


function validarEmail(email){
    console.log("Entré en la función: "+ email);
    var patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if (!patron.test(email)){
        return false;
    }else {
        return true;
    }
}


function guardarInfo(){
    if(validarFormulario()){
        let informacion = {
            nombre: document.getElementById('txt_nombre').value,
            apellido: document.getElementById('txt_apellido').value,
        };
    
        console.log(JSON.stringify(informacion));
        informaciones.push(informacion);
        console.log(JSON.stringify(informacion));
    }
}


function validarContraseña(){
        var contraseña = document.getElementById('contraseña');
        console.log("Contraseña: "+ contraseña.value);


        if(contraseña.value == ""){
            contraseña.focus();
            console.log("Entro contraseña");
            document.getElementById("errorContraseñas").innerHTML="";
            document.getElementById("errorContraseñas").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
            document.getElementById("contraseña").classList.add("is-invalid");
            console.log("Contraseña: Campo vacio");

            document.getElementById("errorCContraseñas").innerHTML="";
            document.getElementById("errorCContraseñas").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
            document.getElementById("ccontraseña").classList.add("is-invalid");
            ccontraseña.value = "";
            console.log("Contraseña confirmada: " + document.getElementById("ccontraseña").value);

            return false;
        }else
                if(contraseña.value != ""){
                    if(contraseña.value.length <= 4){
                        console.log("Entro");
                        document.getElementById("errorContraseñas").innerHTML="";
                        document.getElementById("errorContraseñas").innerHTML += `<div style=" color: yellow"> Seguridad: Débil </div>`;
                        document.getElementById("contraseña").classList.remove("is-invalid");
                        document.getElementById("contraseña").classList.add("validYellow");
                        console.log("Contraseña: "+ document.getElementById("contraseña").value);
                    }else
                        if(contraseña.value.length > 4 && contraseña.value.length <= 8){
                            console.log("Entro");
                            document.getElementById("errorContraseñas").innerHTML="";
                            document.getElementById("errorContraseñas").innerHTML += `<div style=" color: gray"> Seguridad: Neutra </div>`;
                            document.getElementById("contraseña").classList.add("is-valid");
                            document.getElementById("contraseña").classList.remove("is-invalid");
                            document.getElementById("contraseña").classList.add("is-valid");
                            console.log("Contraseña: "+ document.getElementById("contraseña").value); 
                    }else
                        if(contraseña.value.length > 8){
                            console.log("Entro");
                            document.getElementById("errorContraseñas").innerHTML="";
                            document.getElementById("errorContraseñas").innerHTML += `<div style=" color: green"> Seguridad: Alta </div>`;
                            document.getElementById("contraseña").classList.remove("is-invalid");
                            document.getElementById("contraseña").classList.add("is-valid");
                            console.log("Contraseña: "+ document.getElementById("contraseña").value); 
                    }
                document.getElementById("errorCContraseñas").innerHTML="";
                document.getElementById("errorCContraseñas").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
                document.getElementById("ccontraseña").classList.add("is-invalid");
                console.log("Contraseña confirmada: " + document.getElementById("ccontraseña").value);
                
                return true;
                    }
}


function validarCContraseña(){
    var contraseña = document.getElementById("contraseña");
    var ccontraseña = document.getElementById("ccontraseña");

    console.log("Confirmando contraseña");

    if(contraseña.value != ccontraseña.value){
        document.getElementById("errorCContraseñas").innerHTML="";
        document.getElementById("errorCContraseñas").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("ccontraseña").classList.add("is-invalid");
        console.log("Contraseña confirmada: " + document.getElementById("ccontraseña").value);
        ccontraseña.focus();
        return false;
    } else
        if(contraseña.value == null){
            
            return false;
    }else{
        console.log("Entro");
                    document.getElementById("errorCContraseñas").innerHTML="";
                    document.getElementById("errorCContraseñas").innerHTML += `<div style=" color: green"> Contraseñas correctas </div>`;
                    document.getElementById("ccontraseña").classList.remove("is-invalid");
                    document.getElementById("ccontraseña").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("contraseña").value  +"= Contraseña confirmada: "+ document.getElementById("ccontraseña").value);
    return true;
}
    }






function validarNombre(){
    var nombre = document.getElementById('nombre');
    console.log("Nombre: "+ nombre.value);

    if(nombre.value == ""){
        console.log("I'm free");
        nombre.focus();
        document.getElementById("errorNombres").innerHTML="";
        document.getElementById("errorNombres").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("nombre").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorNombres").innerHTML="";
    document.getElementById("errorNombres").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
    document.getElementById("nombre").classList.add("is-valid");
    document.getElementById("nombre").classList.remove("is-invalid");
    document.getElementById("nombre").classList.add("is-valid");
    console.log("Nombre: "+ nombre.value)
    return true;
}

function validarEstado(){
    console.log("Entro a estado");
    var estado = document.getElementById('estadoUsuario');
    console.log("Estado: "+estado.value);

    if(estado.value == 0){
        console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstados").innerHTML="";
        document.getElementById("errorEstados").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorEstados").innerHTML="";
    document.getElementById("errorEstados").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
    console.log("Estado: "+ estado.value);
    return true;
}

function validarApellido(){
    var apellido = document.getElementById('apellido');
    console.log("Apellido "+ apellido.value);

    if(apellido.value == ""){
        console.log("I'm not free");
        document.getElementById("errorApellidos").innerHTML="";
        document.getElementById("errorApellidos").innerHTML += `<div style=" color: #DC3545"> Ingrese su apellido </div>`;
        document.getElementById("apellido").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
        apellido.focus();
        
        return false;
    }
    document.getElementById("errorApellidos").innerHTML="";
    document.getElementById("errorApellidos").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
    document.getElementById("apellido").classList.add("is-valid");
    document.getElementById("apellido").classList.remove("is-invalid");
    document.getElementById("apellido").classList.add("is-valid");
    console.log("Apellido: "+ apellido.value)
    return true;
}

function validarCorreo(){
    var correo = document.getElementById('correo');
    console.log("Correo: "+ correo.value);


    if(correo.value == ""){
        console.log("I'm not free");
        correo.focus();
        document.getElementById("errorCorreos").innerHTML="";
        document.getElementById("errorCorreos").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correo").classList.add("is-invalid");
        console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreos").innerHTML="";
            document.getElementById("errorCorreos").innerHTML += `<div style=" color: #DC3545"> El patrón ingresado es incorrecto. Debe ser user@example.com </div>`;
            document.getElementById("correo").classList.add("is-invalid");
            console.log("Correo: Campo vacio");
            correo.focus();
        }else{

            document.getElementById("errorCorreos").innerHTML="";
            document.getElementById("errorCorreos").innerHTML += `<div style=" color: green"> Looks Good! </div>`;
            document.getElementById("correo").classList.add("is-valid");
            document.getElementById("correo").classList.remove("is-invalid");
            document.getElementById("correo").classList.add("is-valid");
            console.log("Correo: "+ correo.value);  
            return true;
            
        }
    
    
        

    

}


let estado = ['Distrito Central', 'El Porvenir', 'Lepaterique'];

for(let i=0; i<estado.length; i++){
    document.getElementById("estadoUsuario").innerHTML += `<option value="${estado[i]}">${estado[i]}</option>`;
}

function iniciar(){
    document.getElementById("enviar").addEventListener('click', guardarInformacion, false);
    
}

function validar(e){
    if(validarNombre() && validarApellido() && validarCorreo() && validarEstado() && validarContraseña() && validarCContraseña() ){
        return true;
    }else{

        camposVacios();
        
        
        
    }
}

function limpiarCampos(){

        document.getElementById("errorNombres").innerHTML="";
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").classList.remove("is-valid");

        document.getElementById("errorApellidos").innerHTML="";
        document.getElementById("apellido").value = "";
        document.getElementById("apellido").classList.remove("is-valid");

        document.getElementById("errorCorreos").innerHTML="";
        document.getElementById("correo").value = "";
        document.getElementById("correo").classList.remove("is-valid");

        document.getElementById("errorEstados").innerHTML="";
        document.getElementById("estadoUsuario").value = "";
        document.getElementById("estadoUsuario").classList.remove("is-valid");

        document.getElementById("errorContraseñas").innerHTML="";
        document.getElementById("contraseña").value = "";
        document.getElementById("contraseña").classList.remove("is-valid");
        document.getElementById("contraseña").classList.remove("validYellow");
        

        document.getElementById("errorCContraseñas").innerHTML="";
        document.getElementById("ccontraseña").value = "";
        document.getElementById("ccontraseña").classList.remove("is-valid");
}


function camposVacios(){
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var correo = document.getElementById("correo");
        var contraseña = document.getElementById("contraseña");
        var estado = document.getElementById("estadoUsuario");
        var ccontraseña = document.getElementById("ccontraseña");

    if(nombre.value == ""){
        document.getElementById("errorNombres").innerHTML="";
        document.getElementById("errorNombres").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("nombre").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
    }
    if(apellido.value == ""){
        document.getElementById("errorApellidos").innerHTML="";
        document.getElementById("errorApellidos").innerHTML += `<div style=" color: #DC3545"> Ingrese su apellido </div>`;
        document.getElementById("apellido").classList.add("is-invalid");
        console.log("Apellido: Campo vacio");
    }
    if(correo.value == ""){
        document.getElementById("errorCorreos").innerHTML="";
        document.getElementById("errorCorreos").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correo").classList.add("is-invalid");
        console.log("Correo: Campo vacio")
    }
    if(estado.value == 0){
        console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstados").innerHTML="";
        document.getElementById("errorEstados").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Nombre: Campo vacio");
    if(contraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorContraseñas").innerHTML="";
        document.getElementById("errorContraseñas").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseña").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
    }
    if(ccontraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorCContraseñas").innerHTML="";
        document.getElementById("errorCContraseñas").innerHTML += `<div style=" color: #DC3545"> Complete el campo </div>`;
        document.getElementById("ccontraseña").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
    }

}
}

function guardarInformacion(){
    if(validar()  ){
        
        console.log("Hola");
        let informacion = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            correo: document.getElementById("correo").value,
            estado: document.getElementById("estadoUsuario").value,
            contraseña: document.getElementById("contraseña").value,
        };

    console.log(JSON.stringify(informacion));
    informacioness.push(informacion);
    localStorage.setItem('informacioness',JSON.stringify(informacioness));
    limpiarCampos();
    window.location = "index2.html";
    
    }
}

