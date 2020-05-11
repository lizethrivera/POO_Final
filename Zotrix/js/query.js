$(document).ready(function(){
    $('#show').mousedown(function(){
        $('#contraseña-login').removeAttr('type');
        $('#show').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#show').mouseup(function(){
        $('#contraseña-login').attr('type','password');
        $('#show').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});

jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$(document).ready(function(){
    $('#showCE').mousedown(function(){
        console.log("Entro");
        $('#contraseñaEmpresa').removeAttr('type');
        $('#showC').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#showCE').mouseup(function(){
        $('#contraseñaEmpresa').attr('type','password');
        $('#showC').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});


$(document).ready(function(){
    $('#showC').mousedown(function(){
        $('#contraseñaUsuario').removeAttr('type');
        $('#showC').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#showC').mouseup(function(){
        $('#contraseñaUsuario').attr('type','password');
        $('#showC').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});

