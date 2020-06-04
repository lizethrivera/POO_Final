
function subir_archivos(form){
    let barra_estado = form.ch
}

var codigoUsuario = readCookie('userCode');
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

// Funcion para agregar un producto nuevo a un usuario 
function guardarUsuario() {
    var nombre = document.getElementById('nombreUsuario').value;
    var apellido = document.getElementById('apellidoUsuario').value;
    var imagenUsuario = document.getElementById('imagenUsuario').value;
    var correoUsuario = document.getElementById('correoUsuario').value;
    var contraseñaUsuario = document.getElementById('contraseñaUsuario').value;
    console.log(nombre);
    console.log(apellido);
    //console.log(imagenUsuario);
    console.log(correoUsuario);
    console.log(contraseñaUsuario);

    let persona = {
        nombreUsuario: nombre,
        apellidoUsuario: apellido,
        imgUsuario: imagenUsuario,
        correoUsuario: correoUsuario,
        passwordUsuario: contraseñaUsuario
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/users.php',
        method: 'POST',
        data: JSON.stringify(persona), //Usamos JSON
        dataType: 'json',

        success: function(respuesta) {
            console.log(respuesta);


        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error) {

                console.error("Aiuda", error);
            } //Función que tiene como parametro el error.
    });

}


function obtenerUsuario(){
    
    var codigoUsuario = readCookie('userCode');
    $.ajax({
        url: '../backEnd-Zotrix/API/users.php?id='+codigoUsuario,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarUsuario(respuesta);

        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerUsuario();


function mostrarUsuario(usuario){
    document.getElementById('nombre').innerHTML+=`
    <div class="input-group-prepend">
        <span class="input-group-text"><i class="fas fa-user foco"></i></span>
    </div>
    <input type="text" class="form-control" id="nombreUsuario" oninput="validarNombreUsuario()" placeholder="${usuario.nombreUsuario}" required>
    
    `;

    document.getElementById('apellidos').innerHTML+=`
    <div class="input-group-prepend">
        <span class="input-group-text"><i class="fas fa-user foco"></i></span>
    </div>
    <input type="text" class="form-control" id="apellidoUsuario" oninput="validarApellidoUsuario()" placeholder="${usuario.apellidoUsuario}" required>
    
    `;

    document.getElementById('img').innerHTML+=`
    <span class="input-group-text inputt"><i class="fas fa-portrait"></i></span> 
    <input type="text" id="imagenUsuario"
    class="form-control inputt" width="100%" placeholder="${usuario.imgUsuario}" name="imagenUsuario" required>
    
    `;

    document.getElementById('correo').innerHTML+=`
    <div class="input-group-prepend" >
        <span class="input-group-text"><i class="far fa-envelope"></i></span>
    </div>
    <input type="text" class="input form-control" id="correoUsuario" placeholder="${usuario.correoUsuario}" oninput="validarCorreoUsuario()" required>
    `;

    document.getElementById('password').innerHTML+=`
    <div class="input-group-prepend">
    <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
    </div>
    <input class="input form-control" placeholder="${usuario.passwordUsuario}" id="contraseñaUsuario"oninput="validarContraseñaUsuario()" type="password" required>
    <div class="input-group-append">
    <span class="input-group-text"><i class="far fa-eye" id="showC"></i></span>
    </div>

    
    
    `;




}

function actualizarUsuario(){
    var codigoUsuario = readCookie('userCode');
    var nombre = document.getElementById('nombreUsuario').value;
    var apellido = document.getElementById('apellidoUsuario').value;
    var imagenUsuario = document.getElementById('imagenUsuario').value;
    var correoUsuario = document.getElementById('correoUsuario').value;
    var contraseñaUsuario = document.getElementById('contraseñaUsuario').value;
    console.log(nombre);
    console.log(apellido);
    //console.log(imagenUsuario);
    console.log(correoUsuario);
    console.log(contraseñaUsuario);

    let persona = {
        nombreUsuario: nombre,
        apellidoUsuario: apellido,
        imgUsuario: imagenUsuario,
        correoUsuario: correoUsuario,
        passwordUsuario: contraseñaUsuario
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/users.php?id='+codigoUsuario,
        method: 'POST',
        data: JSON.stringify(persona), //Usamos JSON
        dataType: 'json',

        success: function(respuesta) {
            console.log(respuesta);


        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error) {

                console.error("Aiuda", error);
            } //Función que tiene como parametro el error.
    });
}