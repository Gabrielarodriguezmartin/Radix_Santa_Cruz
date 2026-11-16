/* Acciones delegadas para contenido estático y generado. */
var RADIX_ACCIONES = {
  accion1: function(event, element) { closeIntroVideo(); },
  accion2: function(event, element) { radixGuardarPartida(); },
  accion3: function(event, element) { radixModoAyuntamientoSolicitado()?goPlanCanvas():goTurn1(); },
  accion4: function(event, element) { if(event.key==='Enter')radixCargarPartida(el('radixLoadCode').value); },
  accion5: function(event, element) { radixCargarPartida(el('radixLoadCode').value); },
  accion6: function(event, element) { saveTurn1(); },
  accion7: function(event, element) { genNames(); },
  accion8: function(event, element) { radixVolverFase(2); },
  accion9: function(event, element) { saveTurn2(); },
  accion10: function(event, element) { radixVolverFase(3); },
  accion11: function(event, element) { saveTurn3(); },
  accion12: function(event, element) { radixVolverFase(4); },
  accion13: function(event, element) { saveTurn4(); },
  accion14: function(event, element) { doLoan(); },
  accion15: function(event, element) { doTotal(); },
  accion16: function(event, element) { radixVolverFase(7); },
  accion17: function(event, element) { saveTurn5(); },
  accion18: function(event, element) { doCosts(); },
  accion19: function(event, element) { radixVolverFase(8); },
  accion20: function(event, element) { saveTurn6(); },
  accion21: function(event, element) { doSS(); },
  accion22: function(event, element) { radixVolverFase(5); },
  accion23: function(event, element) { saveTurn7(); },
  accion24: function(event, element) { radixVolverFase(6); },
  accion25: function(event, element) { saveTurn8(); },
  accion26: function(event, element) { doProj(); },
  accion27: function(event, element) { radixVolverFase(9); },
  accion28: function(event, element) { saveTurn9(); },
  accion29: function(event, element) { radixVolverFase(10); },
  accion30: function(event, element) { saveTurn10(); },
  accion31: function(event, element) { guardarPDFCanvas(); },
  accion32: function(event, element) { radixEmpezarAyuntamiento(); },
  accion33: function(event, element) { goSimIntro(); },
  accion34: function(event, element) { initSimulation(); },
  accion35: function(event, element) { guardarPDFPlanFinal(); },
  accion36: function(event, element) { radixNuevaSimulacion(); },
  accion37: function(event, element) { radixConfirmarSemanaAnterior(true); },
  accion38: function(event, element) { radixConfirmarSemanaAnterior(false); },
  accion39: function(event, element) { advanceWeek(); },
  accion40: function(event, element) { abrirCorreo(); },
  accion41: function(event, element) { abrirWhatsapp(); },
  accion42: function(event, element) { abrirNoticia(); },
  accion43: function(event, element) { resolveWeek(); },
  accion44: function(event, element) { guardarPDFPrevision(); },
  accion45: function(event, element) { goFinal(); },
};
['click','input','keydown'].forEach(function(tipo) {
  document.addEventListener(tipo, function(event) {
    var elemento = event.target.closest('[data-radix-'+tipo+']');
    if (elemento && RADIX_ACCIONES[elemento.getAttribute("data-radix-"+tipo)]) RADIX_ACCIONES[elemento.getAttribute("data-radix-"+tipo)](event, elemento);
  });
});
// La selección debe actualizarse antes de los listeners de sus contenedores.
document.addEventListener('click', function(event) {
  var opcion = event.target.closest('[data-radix-accion=opcion]');
  if (opcion) (opcion.dataset.radixMultiple === '1' ? pickOptMulti : pickOpt)(opcion.dataset.radixGrupo, opcion);
}, true);
