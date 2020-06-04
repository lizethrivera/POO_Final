var codigoUsuario = readCookie('userCode');
var total=0;
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

function obtenerPedidos(){
    console.log("entro");
    var f = new Date();

    $.ajax({
        url: '../backEnd-Zotrix/API/carrito.php?id='+codigoUsuario,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarPedidos(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerPedidos();

function mostrarPedidos(pedidos){
    
    document.getElementById('pedidos').innerHTML = '';
    for(let i=0; i<pedidos.length; i++){
        document.getElementById('pedidos').innerHTML+=`
        <div class="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
                    <div class="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left"><a class="d-inline-block mx-auto mr-sm-4" href="#" style="width: 10rem;"><img style="width: 10rem;" src="img/products/81b6zZQEM0L._AC_UX500_.jpg" alt="Product"></a>
                        <div class="media-body pt-2">
                        <h3 class="product-title font-size-base mb-2"><a href="#" id="nombreProducto">${pedidos[i].nombreProducto}</a></h3>
                        <div class="font-size-sm"  style="width:auto"><span class="text-muted mr-2">Descripcion:</span>${pedidos[i].descripcionProducto}</div>

                        <div class="font-size-lg text-accent pt-2"><span class="text-muted mr-2">Precio:</span>$${pedidos[i].precioFinal}</div>
                        </div>
                    </div>
                    <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style="max-width: 9rem;">
                        <div class="form-group mb-0">
                        <label class="font-weight-medium" for="quantity1">Cantidad</label>
                        <input class="form-control" type="number" id="quantity1" value="${pedidos[i].cantidad}" disabled="true">
                        </div>
                        <button class="btn btn-link px-0 text-danger" onclick="eliminarPedido('${codigoUsuario}','${pedidos[i].orderCode}')" type="button"><i class="czi-close-circle mr-2"></i><span class="font-size-sm">Eliminar</span></button>
                    </div>
                    </div>
        `;        
    }
    for(let j=0; j<pedidos.length; j++){
        total+=pedidos[j].precioFinal*pedidos[j].cantidad;
    }

    document.getElementById('subtotal').innerHTML='';
    document.getElementById('subtotal').innerHTML+=`
    <h3 class="font-weight-normal">$${total}</h3>
    
    `
    document.getElementById('infoSubtotal').innerHTML='';
    document.getElementById('infoSubtotal').innerHTML+=`
    <label for="validationTextarea">SUBTOTAL</label>
    <div class="input-group input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">USD</span>
        </div>
        <input type="text" class="form-control rounded-right" disabled="true" placeholder="${total}" id="subtotalProducto" required>
    </div>
        
    `
    document.getElementById('impuesto').innerHTML='';
    document.getElementById('impuesto').innerHTML+=`
    <label for="validationTextarea" >IMPUESTO</label>
    <div class="input-group input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">USD</span>
        </div>
        <input type="text" class="form-control rounded-right"  disabled="true" placeholder="${(total*0.15)}" id="impuestoProducto" required>
    </div>

    `
    document.getElementById('total').innerHTML='';
    document.getElementById('total').innerHTML+=`
    <label for="validationTextarea" >TOTAL</label>
    <div class="input-group input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">USD</span>
        </div>
        <input type="text" class="form-control rounded-right"  disabled="true" placeholder="${(total*0.15)+total}" id="totalProducto" required>
    </div>
    
    
    `
    //console.log(+total);
}


function eliminarPedido(codigoUsuario, codigoOrden){
    console.log("entro");
    var f = new Date();

    $.ajax({
        url: '../backEnd-Zotrix/API/carrito.php?id='+codigoUsuario+'&idPedido='+codigoOrden,
        method: 'DELETE', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            
            //mostrarPedidos(respuesta);

        },
        error: function(error){
            obtenerPedidos();
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
    
}

function guardarPedido(){
    var codigo = readCookie('userCode');
    $.ajax({
        url: '../backEnd-Zotrix/API/general.php?id='+codigo,
        method: 'DELETE', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
    swal("Orden Procesada");
    demo();
    location.reload();
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }
   
   function demo() {
     console.log('Taking a break...');
     sleep(2000);
     console.log('Two second later');
   }

function mostrarSiguiendo(siguiendo){


    document.getElementById('siguiendo').innerHTML+=`
    <tr>
        <td>'${siguiendo.nombreEmpresa}'</td>
        <td>${siguiendo.productos.length}</td>
        <td>${siguiendo.sucursales.length}</td>    
    </tr>
    
    `
}
mostrarSiguiendo();


