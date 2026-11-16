/* Acceso a Leo: la consulta y la elección las realiza la persona usuaria. */
function abrirAyudaFormaJuridica() {
  var dialogo = document.getElementById('ayuda-forma-juridica');
  if (!dialogo) {
    dialogo = document.createElement('dialog');
    dialogo.id = 'ayuda-forma-juridica';
    dialogo.setAttribute('aria-labelledby', 'titulo-ayuda-forma');
    dialogo.setAttribute('aria-describedby', 'descripcion-ayuda-forma');
    dialogo.innerHTML =
      '<div class="ayuda-juridica">' +
        '<div class="ayuda-juridica-cabecera"><span class="ayuda-juridica-icono" aria-hidden="true">⚖️</span>' +
        '<div><p class="ayuda-juridica-etiqueta">FORMA JURÍDICA</p><h2 id="titulo-ayuda-forma">Te ayudamos a elegir</h2></div></div>' +
        '<p id="descripcion-ayuda-forma">Consulta a <strong>Leo</strong>, el asistente del Gobierno de Canarias para crear empresas. Puedes contarle cómo será tu negocio y pedirle que te ayude a comparar las opciones.</p>' +
        '<ol class="ayuda-juridica-pasos"><li>Abre Leo en una pestaña nueva.</li><li>Explícale tu idea y responde a sus preguntas.</li><li>Vuelve aquí y selecciona la forma jurídica que hayas elegido.</li></ol>' +
        '<div class="ayuda-juridica-pregunta"><label for="pregunta-leo">Puedes empezar con esta pregunta:</label>' +
        '<textarea id="pregunta-leo" rows="4" readonly>Quiero crear un negocio en Canarias y no tengo clara la forma jurídica. Ayúdame a comparar mis opciones; pregúntame por mi actividad, si tendré socios, la responsabilidad que quiero asumir y el capital disponible.</textarea>' +
        '<button type="button" class="btn bs" id="copiar-pregunta-leo">Copiar pregunta</button><p id="estado-copia-leo" role="status" aria-live="polite"></p></div>' +
        '<p class="ayuda-juridica-nota">La consulta se realiza en un servicio externo. Ningún dato de tu partida se envía automáticamente. La respuesta es orientativa; confirma los requisitos antes de decidir.</p>' +
        '<div class="ayuda-juridica-acciones"><form method="dialog"><button class="btn bs">Volver a las opciones</button></form>' +
        '<a class="btn bp" href="https://tramites.emprenderencanarias.es/" target="_blank" rel="noopener noreferrer">Abrir Leo <span aria-hidden="true">↗</span><span class="ayuda-juridica-sr"> (se abre en una pestaña nueva)</span></a></div>' +
      '</div>';
    document.body.appendChild(dialogo);
    dialogo.querySelector('#copiar-pregunta-leo').addEventListener('click', async function() {
      var pregunta = dialogo.querySelector('#pregunta-leo');
      var estado = dialogo.querySelector('#estado-copia-leo');
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Portapapeles no disponible');
        await navigator.clipboard.writeText(pregunta.value);
        estado.textContent = 'Pregunta copiada. Pégala en Leo y añade los detalles de tu negocio.';
      } catch (error) {
        pregunta.focus();
        pregunta.select();
        estado.textContent = 'Pregunta seleccionada: cópiala con Ctrl+C o con el menú de tu dispositivo.';
      }
    });
  }
  dialogo.querySelector('#estado-copia-leo').textContent = '';
  if (!dialogo.open) dialogo.showModal();
}
