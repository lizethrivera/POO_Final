console.log(empresaCode = readCookie('empresaCode'));
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

function guardarSucursal(){
    var codigoEmpresa = readCookie('empresaCode');

    var nombreEmpresa = document.getElementById('nombreEmpresa').value;
    var latitudEmpresa = document.getElementById('latitudEmpresa').value;
    var longitudEmpresa = document.getElementById('longitudEmpresa').value;
    var tipo = "Secundaria";

    let orden = {
        nombreSucursal: nombreEmpresa,
        altitudSucursal: latitudEmpresa,
        latitudSucursal: longitudEmpresa,
        tipoSucursal: tipo
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/sucursal.php?id='+codigoEmpresa,
        method: 'POST', 
        data:  JSON.stringify(orden), //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            //mostrarEmpresa(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });

}

function mostrarSucursales(){
    
    var codigoEmpresa = readCookie('empresaCode');
    $.ajax({
        url: '../backEnd-Zotrix/API/bussiness.php?id='+codigoEmpresa,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            llenarTablaSucursal(respuesta);
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
mostrarSucursales();

function llenarTablaSucursal(respuesta){
    document.getElementById('tablaSucursales').innerHTML='';
    for(let i=0; i<respuesta.sucursales.length; i++){
        document.getElementById('tablaSucursales').innerHTML+=`
        <tr>
        <td>${respuesta.sucursales[i].nombreSucursal}</td>
        <td>${respuesta.sucursales[i].altitudSucursal}</td>
        <td>${respuesta.sucursales[i].latitudSucursal}</td>
        <td><a  data-toggle="modal" data-target="#staticBackdrop" onclick="obtenerInfoSucursal('${respuesta.sucursales[i].sucursalCode}')"> <i class="fas fa-edit"></i></a> <a onclick="eliminarSucursal('${respuesta.sucursales[i].sucursalCode}')"> <i class="fas fa-trash-alt"></i></a></td>

        </tr>
        
        
        `
    }
}

function eliminarSucursal(codigoSucursal){
    $.ajax({
        url: '../backEnd-Zotrix/API/sucursal.php?id='+codigoSucursal,
        method: 'DELETE', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            location.reload();
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });

}


function obtenerInfoSucursal(sucursal){
    
    $.ajax({
        url: '../backEnd-Zotrix/API/sucursal.php?id='+sucursal,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            document.getElementById('nombreSucursal').value = respuesta.nombreSucursal;
            document.getElementById('latitudSucursal').value = respuesta.altitudSucursal;
            document.getElementById('longitudSucursal').value = respuesta.latitudSucursal;
            
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}



function obtenerParaEditar(){
    var codigoEmpresa = readCookie('empresaCode');

    var nombreEmpresa = document.getElementById('nombreSucursal').value;
    var latitudEmpresa = document.getElementById('latitudSucursal').value;
    var longitudEmpresa = document.getElementById('longitudSucursal').value;
    var tipo = "Secundaria";

    let orden = {
        nombreSucursal: nombreEmpresa,
        altitudSucursal: latitudEmpresa,
        latitudSucursal: longitudEmpresa,
        tipoSucursal: tipo
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/sucursal.php?id='+codigoEmpresa,
        method: 'PUT', 
        data:  JSON.stringify(orden), //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            //mostrarEmpresa(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });

}

function obtenerCategorias(){
    $.ajax({
        url: '../backEnd-Zotrix/API/categoria.php',
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            llenarCategoria(respuesta);
            
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerCategorias();

function llenarCategoria(categoria){

    for(let i=0; i<categoria.length; i++){
        document.getElementById('categoriaProducto').innerHTML+=`
        <option>${categoria[i].nombreCategoria}</option>
        
        `
    }


}

function guardarProducto(){
    var codigoEmpresa = readCookie('empresaCode');

    var urlProducto = document.getElementById('urlProducto').value;
    var nombreProducto = document.getElementById('nombreProducto').value;
    var descripcionProducto = document.getElementById('descripcionProducto').value;
    var precioProducto = document.getElementById('precioProducto').value;
    var stockProducto = document.getElementById('stockProducto').value;
    var categoriaProducto = document.getElementById('categoriaProducto').value;

    let orden = {
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        imgProducto: urlProducto,
        precioProducto: precioProducto,
        stockProducto: stockProducto,
        categoriaProducto:categoriaProducto 
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/products.php?id='+codigoEmpresa,
        method: 'POST', 
        data:  JSON.stringify(orden), //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta.productos);
            mostrarInformacionProducto(respuesta.productos);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
mostrarInformacionProducto();



function obtenerProductos(){
    $.ajax({
        url: '../backEnd-Zotrix/API/products.php',
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarInformacionProducto(respuesta);
            
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerProductos();

function mostrarInformacionProducto(productos){

    document.getElementById('infoProductos').innerHTML='';
    for(let i=0; i<productos.length; i++){
        document.getElementById('infoProductos').innerHTML+=`
        <tr>
            <td>${productos[i].imgProducto}</td>
            <td>${productos[i].nombreProducto}</td>
            <td>${productos[i].descripcionProducto}</td>
            <td>${productos[i].precioProducto}</td>
            <td>${productos[i].stockProducto}</td>
            <td><a href="#"> <i class="fas fa-edit"></i></a> <a onclick="eliminarProducto('${productos[i].productCode}')"> <i class="fas fa-trash-alt"></i></a></td>

        </tr>
        `
    }

}