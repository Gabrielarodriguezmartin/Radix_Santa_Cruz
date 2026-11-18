/* La imagen se conserva en el estado de la partida, no en la ruta del archivo local. */
var radixLogoEnProceso = false;
var radixLogoOperacion = 0;
var RADIX_LOGO_MAX_ARCHIVO = 4 * 1024 * 1024;
var RADIX_LOGO_MAX_DATOS = 240000;

function radixLogoValido(valor) {
  return typeof valor === 'string' && valor.length <= RADIX_LOGO_MAX_DATOS &&
    /^data:image\/(?:png|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/.test(valor);
}
function radixMostrarLogo() {
  var vista = document.getElementById('logo-vista');
  var imagen = document.getElementById('logo-imagen');
  if (!vista || !imagen) return;
  var valido = radixLogoValido(G.logoData);
  vista.hidden = !valido;
  if (valido) imagen.src = G.logoData;
  else imagen.removeAttribute('src');
}
function radixIniciarLogo() {
  var input = document.getElementById('f-logo');
  var quitar = document.getElementById('logo-quitar');
  var estado = document.getElementById('logo-estado');
  if (!input || !quitar || !estado) return;
  radixMostrarLogo();
  quitar.addEventListener('click', function() {
    ++radixLogoOperacion;
    radixLogoEnProceso = false;
    G.logoData = '';
    input.value = '';
    estado.textContent = 'Logo eliminado de la partida.';
    radixMostrarLogo();
    radixAutoGuardarAhora();
  });
  input.addEventListener('change', async function() {
    var archivo = input.files && input.files[0];
    if (!archivo) return;
    var operacion = ++radixLogoOperacion;
    var partida = G;
    radixLogoEnProceso = true;
    estado.textContent = 'Preparando el logo…';
    try {
      if (archivo.size > RADIX_LOGO_MAX_ARCHIVO) throw new Error('El archivo supera los 4 MB. Elige una imagen más pequeña.');
      if (archivo.type !== 'image/png' && archivo.type !== 'image/jpeg') throw new Error('Selecciona un archivo PNG o JPG.');
      var bytes = new Uint8Array(await archivo.slice(0, 8).arrayBuffer());
      var png = bytes.length >= 8 && [137,80,78,71,13,10,26,10].every(function(v,i){return bytes[i]===v;});
      var jpg = bytes.length >= 3 && bytes[0]===255 && bytes[1]===216 && bytes[2]===255;
      if ((archivo.type==='image/png' && !png) || (archivo.type==='image/jpeg' && !jpg)) throw new Error('El archivo no es una imagen PNG o JPG válida.');
      var url = URL.createObjectURL(archivo);
      var imagen = new Image();
      try {
        await new Promise(function(resolve,reject){
          imagen.onload=resolve;
          imagen.onerror=function(){reject(new Error('No se pudo abrir la imagen. Prueba con otro archivo.'));};
          imagen.src=url;
        });
        if (!imagen.naturalWidth || !imagen.naturalHeight || imagen.naturalWidth * imagen.naturalHeight > 40000000) throw new Error('La imagen tiene unas dimensiones demasiado grandes.');
        var longitud=512, datos='';
        do {
          var factor=Math.min(1,longitud/Math.max(imagen.naturalWidth,imagen.naturalHeight));
          var lienzo=document.createElement('canvas');
          lienzo.width=Math.max(1,Math.round(imagen.naturalWidth*factor));
          lienzo.height=Math.max(1,Math.round(imagen.naturalHeight*factor));
          var contexto=lienzo.getContext('2d');
          if (!contexto) throw new Error('No se pudo procesar la imagen en este navegador.');
          contexto.drawImage(imagen,0,0,lienzo.width,lienzo.height);
          datos=lienzo.toDataURL(archivo.type,0.86);
          longitud=Math.floor(longitud*0.75);
        } while(datos.length>RADIX_LOGO_MAX_DATOS && longitud>=96);
        if(!radixLogoValido(datos)) throw new Error('No se pudo reducir el logo lo suficiente. Prueba con otra imagen.');
        if(operacion!==radixLogoOperacion || partida!==G) return;
        G.logoData=datos;
        radixMostrarLogo();
        estado.textContent='Logo añadido. Se guardará junto con la partida.';
        radixAutoGuardarAhora();
      } finally { URL.revokeObjectURL(url); }
    } catch(error) {
      if(operacion===radixLogoOperacion && partida===G) estado.textContent=error.message || 'No se pudo preparar el logo.';
    } finally {
      if(operacion===radixLogoOperacion) radixLogoEnProceso=false;
      input.value='';
    }
  });
}
