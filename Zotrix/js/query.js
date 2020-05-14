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

$('#input-search').hide();

function mostrarOcultarBusqueda(){
	console.log("Lo tengo");
	//var togg= document.getElementById("buton").title;

	if ( $('#lupa').hasClass('fa-search') ) { 
		console.log("Entro");
		$('#input-search').show();
		$('#lupa').removeClass('fa-search');
		$('#lupa').addClass('fas fa-search-minus');
	}else{
		if ( $('#lupa').hasClass('fa-search-minus') ) { 
			console.log("asd");
			$('#input-search').hide();
			//console.log(togg);
			//togg= document.getElementById("buton").title = "Agregar Sucursal";
			//console.log(togg);
			$('#lupa').removeClass('fas fa-search-minus');
			$('#lupa').addClass('fas fa-search');
	}
}
}


$(document).ready(function() {    
    $('#example').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                },
                "sProcessing":"Procesando...",
            }
    });     
});

$('#info-Bunch').hide();
//$('#guardarSucursal').hide();

function mostrarOcultarContenido(){
    var togg= document.getElementById("nuevoSucursal").text;
	console.log("Lo tengo");
	//var togg= document.getElementById("buton").title;

	if ( $('#nuevoSucursal').hasClass('agregar') ) { 
		console.log("Entro");
		$('#info-Bunch').show();
		$('#nuevoSucursal').removeClass('agregar');
        $('#nuevoSucursal').addClass('cancelar');
        $('#guardar').append('<button type="button" class="btn agregar" id="guardarSucursal" onclick="">Guardar</button>');
        document.getElementById("guardar").innerHTML += `
        
        `
        $("#nuevoSucursal").html('Cancelar');
	}else{
		if ( $('#nuevoSucursal').hasClass('cancelar') ) { 
			console.log("asd");
			$('#info-Bunch').hide();
			//console.log(togg);
			//togg= document.getElementById("buton").title = "Agregar Sucursal";
			//console.log(togg);
			$('#nuevoSucursal').removeClass('cancelar');
            $('#nuevoSucursal').addClass('agregar');
            $('#guardar').empty('');
            $("#nuevoSucursal").html('Agregar');
	}
}
}