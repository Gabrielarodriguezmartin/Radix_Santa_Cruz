/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
try {
    if (radixModoAyuntamientoSolicitado()) radixIniciarModoAyuntamiento();
    else { goTurn0(); radixActualizarCodigoUI(); }
}
catch(err) { document.getElementById('gameArea').innerHTML='<div data-radix-estilo="r186"><h2>Error:</h2><pre>'+err.message+'</pre></div>'; }
