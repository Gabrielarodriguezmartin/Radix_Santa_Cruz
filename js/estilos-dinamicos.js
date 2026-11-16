/* Valores dinámicos de reglas CSS: evita atributos style en las plantillas. */
var radixHojaDinamica = document.createElement('style');
radixHojaDinamica.id = 'radix-estilos-dinamicos';
document.head.appendChild(radixHojaDinamica);
var radixNumeroEstilo = 0;
var radixCacheEstilos = new Map();
function radixEstiloDinamico(valores) {
  var clave = JSON.stringify(valores);
  if (radixCacheEstilos.has(clave)) return radixCacheEstilos.get(clave);
  var id = 'd' + (++radixNumeroEstilo);
  var hoja = radixHojaDinamica.sheet;
  var indice = hoja.insertRule('[data-radix-dinamico="' + id + '"] {}', hoja.cssRules.length);
  var regla = hoja.cssRules[indice];
  valores.forEach(function(valor, i) { regla.style.setProperty('--rdx-' + (i + 1), String(valor)); });
  radixCacheEstilos.set(clave, id);
  return id;
}

// Reglas de estado para cambios visuales durante la partida y la exportación.
function radixFijarEstilo(elemento, propiedad, valor, prioridad) {
  if (!elemento) return;
  if (!elemento._radixReglaEstado) {
    var id = 'e' + (++radixNumeroEstilo);
    elemento.setAttribute('data-radix-estado', id);
    var hoja = radixHojaDinamica.sheet;
    var indice = hoja.insertRule(':is(#radix-prioridad-estilos, [data-radix-estado="' + id + '"]) {}', hoja.cssRules.length);
    elemento._radixReglaEstado = hoja.cssRules[indice];
  }
  if (valor === '') elemento._radixReglaEstado.style.removeProperty(propiedad);
  else elemento._radixReglaEstado.style.setProperty(propiedad, valor, prioridad || '');
}
