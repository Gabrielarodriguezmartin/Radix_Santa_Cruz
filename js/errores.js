
window.addEventListener('error', function(event) {
    var msg = event.message, url = event.filename, lineNo = event.lineno, columnNo = event.colno;
    // Los scripts de otros dominios pueden dar solo "Script error. Line: 0".
    // La petición de Drive informa su propio error en la barra de guardado.
    if(String(msg)==='Script error.' && (!url || /^https?:/i.test(String(url)))){
        console.warn('Error en un script externo; el navegador oculta el detalle.', url||'');
        event.preventDefault();
        return;
    }
    var errDiv = document.createElement('div');
    errDiv.className = 'radix-error-global';
    errDiv.textContent = 'ERROR: ' + msg + ' (línea ' + lineNo + ', columna ' + columnNo + ')';
    document.body.appendChild(errDiv);
});
