function el(id){ return document.getElementById(id); }
function fmt(n){ return new Intl.NumberFormat('es-ES',{maximumFractionDigits:2}).format(n); }
function goTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
function area(){ return el('gameArea'); }

function refreshDash(){
  el('d-turn').innerHTML='🎯 '+G.turn+' / 10';
  el('d-cap').innerHTML='💶 '+fmt(G.capital)+' €';
  G.reputation=Math.max(0,Math.min(100,G.reputation));
  el('d-rep').innerHTML='⭐ '+G.reputation+' / 100';
  G.bar=Math.max(2,Math.min(98,G.bar));
  radixFijarEstilo(el('pmark'),'left',G.bar+'%');
  var p='';
  if(G.bar<20)p='⚠️ Zona crítica de quiebra';
  else if(G.bar<40)p='Riesgo elevado';
  else if(G.bar<60)p='Zona neutra';
  else if(G.bar<80)p='Buena viabilidad';
  else p='🌟 Camino al éxito';
  el('ppct').textContent=G.bar+'% — '+p;
}

function turnImg(t){
  return '<div class="hi'+(t===0?' hi-intro':'')+'"><img src="'+(G.imgs[t]||G.imgs[0])+'" alt="Fase '+t+'"><div class="ov">📍 Fase '+t+' </div></div>';
}

function makeOpts(id,opts,cols,wide,multi){
  var cls=wide?'op opw':'op';
  var h='<div class="ops '+(cols||'c2')+'" id="'+id+'">';
  for(var i=0;i<opts.length;i++){
    var o=opts[i];
    var v=o.v!==undefined?o.v:i;
    h+='<div class="'+cls+'" data-v="'+v+'" data-radix-accion="opcion" data-radix-grupo="'+id+'" data-radix-multiple="'+(multi?'1':'0')+'">';
    if(wide){
      h+='<div class="oi">'+(o.ic||'📌')+'</div><div class="ob"><div class="ot">'+o.t+'</div><div class="od">'+(o.d||'')+'</div></div>';
    } else {
      h+='<span class="oi">'+(o.ic||'📌')+'</span><div class="ot">'+o.t+'</div><div class="od">'+(o.d||'')+'</div>';
    }
    h+='</div>';
  }
  h+='</div>';
  return h;
}

function pickOpt(gid,e){
  var par=e.parentElement;
  var all=par.querySelectorAll('.op');
  for(var i=0;i<all.length;i++) all[i].classList.remove('sel');
  e.classList.add('sel');
  par.setAttribute('data-picked',e.getAttribute('data-v'));
  if(gid==='legalForm'){
    if(getOpt('legalForm')==='indeciso') abrirAyudaFormaJuridica();
    else if(el('aviso-forma-pendiente')) el('aviso-forma-pendiente').remove();
  }
  if(gid==='weekEv') radixProgresoSemana().selected=getOpt('weekEv');
  radixProgramarAutoGuardado();
}

function pickOptMulti(gid,e){
  var par=e.parentElement;
  var v=e.getAttribute('data-v');
  if(gid==='financing'){
    var allOps=par.querySelectorAll('.op');
    if(v==='no'){
      var wasSel=e.classList.contains('sel');
      for(var i=0;i<allOps.length;i++){ allOps[i].classList.remove('sel'); allOps[i].classList.remove('disabled'); }
      if(!wasSel){
        e.classList.add('sel');
        for(var i=0;i<allOps.length;i++){ if(allOps[i]!==e) allOps[i].classList.add('disabled'); }
      }
    } else {
      var noOp=par.querySelector('.op[data-v="no"]');
      if(noOp && noOp.classList.contains('sel')) return;
      e.classList.toggle('sel');
    }
  } else {
    e.classList.toggle('sel');
  }
  var all=par.querySelectorAll('.op.sel');
  var vals=[];
  for(var i=0;i<all.length;i++) vals.push(all[i].getAttribute('data-v'));
  par.setAttribute('data-picked',vals.join(','));
  radixProgramarAutoGuardado();
}

function getOpt(id){
  var e=el(id);
  if(!e)return '';
  return e.getAttribute('data-picked')||'';
}

function getOptMulti(id){
  var v=getOpt(id);
  return v?v.split(','):[];
}

/* ════════════════════════════════════════════════════════════
   FASE 0 — BIENVENIDA
   ════════════════════════════════════════════════════════════ */
function goTurn0(){
  G.turn=0;refreshDash();radixActualizarCodigoUI();
  area().innerHTML=
  '<section class="hero">'+
    '<div class="hb">🏝️ Canarias Emprende</div>'+
    '<h1>Simulador Del Emprendimiento<span class="acc">Radix</span></h1>'+
    '<p class="hsub">Crea tu negocio real paso a paso. Toma decisiones con consecuencias económicas. Obtén tu plan de negocio completo al final.</p>'+
  '</section>'+
  turnImg(0)+
  '<div class="bn">'+
    '<span data-radix-estilo="r4">🏝️</span>'+
    '<h2>Canarias es tierra de oportunidades.</h2>'+
    '<p>Canarias es un territorio lleno de potencial. La economía del archipiélago crece gracias al turismo, la tecnología, el comercio, la artesanía y los servicios. Emprender aquí es un viaje apasionante donde tu idea puede convertirse en un motor de cambio y desarrollo local.</p>'+
    '<p data-radix-estilo="r5">Cada nuevo proyecto aporta valor a nuestras islas. <strong>Radix</strong> es tu simulador: crearás tu empresa real, tomarás decisiones con impacto económico y al final tendrás un <span class="hl">plan de negocio completo</span> que te ayudará en el arranque de tu negocio.</p>'+
  '</div>'+
  '<div class="dv"><span>¿Cómo funciona?</span></div>'+
  '<div class="mg">'+
    '<div class="mc"><div class="mn">1</div><h4>📊 Panel de control</h4><p>Capital disponible y reputación actualizados en cada fase.</p></div>'+
    '<div class="mc"><div class="mn">2</div><h4>📈 Barra Quiebra / Éxito</h4><p>Tu indicador de viabilidad. Empieza al 50%. ¡Las fases 7, 8 y 10 son decisivas porque afectan a tu cuenta de resultados!</p></div>'+
    '<div class="mc"><div class="mn">3</div><h4>🎭 Eventos y dilemas</h4><p>Situaciones reales del mundo empresarial. Cada respuesta tendrá su consecuencias.</p></div>'+
    '<div class="mc"><div class="mn">4</div><h4>📋 Plan de negocio</h4><p>Al completar las 10 fases, toda tu información se convierte en un plan profesional.</p></div>'+
    '<div class="mc"><div class="mn">5</div><h4>🎮 Simulación de 12 meses</h4><p>Tras el plan de negocio, simularás un año completo de actividad con ingresos, gastos y eventos reales.</p></div>'+
    '<div class="mc"><div class="mn">6</div><h4>🏆 Resultado anual</h4><p>Al terminar la simulación verás tu resultado: Arruinado, Con dificultades, Normal, Próspero o Exitoso.</p></div>'+
  '</div>'+
  '<div class="dv"><span>Las 10 fases + simulación</span></div>'+
  '<div class="cd"><div class="ci cigr">🗺️</div><h2>Tu recorrido empresarial</h2>'+
    '<div class="tl">'+
      '<div class="ti"><div class="tt">Fase 1 — El emprendedor</div><div class="td2">Tu perfil y personalidad emprendedora</div></div>'+
      '<div class="ti"><div class="tt">Fase 2 — El negocio</div><div class="td2">Idea, tipo, nombre y forma jurídica</div></div>'+
      '<div class="ti"><div class="tt">Fase 3 — El cliente</div><div class="td2">Público objetivo y perfil del cliente ideal</div></div>'+
      '<div class="ti"><div class="tt">Fase 4 — Ubicación</div><div class="td2">Local, zona y licencias</div></div>'+
      '<div class="ti"><div class="tt">Fase 5 — Personal</div><div class="td2">Equipo, salarios y organización</div></div>'+
      '<div class="ti"><div class="tt">Fase 6 — Marketing</div><div class="td2">Estrategia de comunicación</div></div>'+
      '<div class="ti"><div class="tt">Fase 7 — Inversión ⚡</div><div class="td2">Financiación y gastos de apertura</div></div>'+
      '<div class="ti"><div class="tt">Fase 8 — Costes ⚡</div><div class="td2">Gastos fijos y variables mensuales</div></div>'+
      '<div class="ti"><div class="tt">Fase 9 — Previsiones</div><div class="td2">Proyección financiera a 12 meses</div></div>'+
      '<div class="ti"><div class="tt">Fase 10 — Legal</div><div class="td2">Marco jurídico y sostenibilidad</div></div>'+
      '<div class="ti"><div class="tt">📋 Plan de negocio</div><div class="td2">Documento resumen con todas tus decisiones</div></div>'+
      '<div class="ti"><div class="tt">🎮 Simulación de 12 meses</div><div class="td2">12 meses de actividad empresarial con eventos reales</div></div>'+
      '<div class="ti"><div class="tt">🏆 Resultado anual</div><div class="td2">Beneficio neto, nivel obtenido y previsión económica</div></div>'+
    '</div>'+
  '</div>'+
  '<div class="cd"><div class="ci cio">📌</div><h2>Lo que debes saber, este es un simulador para aprender a gestionar un negocio</h2>'+
    '<p><strong data-radix-estilo="r6">Los cálculos son reales.</strong> Capital, gastos, precios — todo se suma y resta como en la vida real.</p>'+
    '<p><strong data-radix-estilo="r7">Tú investigas los precios.</strong> Te pediré que busques en internet cuánto cuestan las cosas.</p>'+
    '<p><strong data-radix-estilo="r8">Cada decisión cuenta.</strong></p>'+
  '</div>'+
  '<div class="cd">'+
  '<div class="ci cigr">🎓</div>'+
  '<h2>¿En qué se basa Radix?</h2>'+

  '<p>RADIX se ha desarrollado tomando como referencia la metodología "Inicie su Negocio" de la Organización Internacional del Trabajo (OIT), así como contenidos sobre innovación, emprendimiento y nuevas tecnologías basados en materiales de la EPC y la Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura (OEI).</p>'+

  '<p>Cada decisión que tomes tendrá un impacto en la evolución de tu empresa. Gestionarás ingresos y gastos, resolverás situaciones reales, afrontarás imprevistos y aprenderás a transformar una idea en un proyecto empresarial sólido. Al finalizar, habrás construido tu propio Plan de Negocio, elaborado mediante la metodología Business Model Canvas, una de las herramientas más utilizadas a nivel internacional para diseñar y validar modelos de negocio.</p>'+

  '</div>'+
  '<div class="bc"><button class="btn bp" data-radix-click="accion3">🚀 ¡Estoy listo! Comenzar →</button></div>'+ 
  '<div class="cd radix-load-card">'+
    '<div class="ci cib">💾</div>'+
    '<h2>Continuar una partida</h2>'+
    '<p>Si ya tienes un código de partida, puedes continuarla desde este ordenador.</p>'+
    '<div class="fg"><label>Código de partida</label><input id="radixLoadCode" type="text" maxlength="13" placeholder="RADIX-XXXXXX" autocomplete="off" data-radix-keydown="accion4"></div>'+
    '<div id="radixLoadError" class="radix-load-error"></div>'+
    '<div class="bc"><button id="radixLoadBtn" class="btn bs" data-radix-click="accion5">📂 Continuar partida →</button></div>'+
  '</div>';
  radixActualizarCodigoUI();
  goTop();
}

/* ════════════════════════════════════════════════════════════
   FASE 1 — EL EMPRENDEDOR
   ════════════════════════════════════════════════════════════ */
function goTurn1(){
  G.turn=1;refreshDash();radixActualizarCodigoUI();goTop();
  var dafoQ=[
    {q:'1. Ante un problema inesperado en tu negocio, ¿qué haces?',opts:[
      {v:'A',ic:'🔥',t:'Actúo rápido',d:'Tomo decisión inmediata aunque no sea perfecta'},
      {v:'B',ic:'🔍',t:'Analizo primero',d:'Investigo opciones antes de moverme'},
      {v:'C',ic:'🤝',t:'Pido consejo',d:'Busco opiniones de personas de confianza'},
      {v:'D',ic:'⏸️',t:'Espero',d:'Dejo que la situación se aclare sola'}]},
    {q:'2. ¿Cómo describes tu tolerancia al riesgo económico?',opts:[
      {v:'A',ic:'🎰',t:'Alta',d:'Si creo en algo, apuesto fuerte'},
      {v:'B',ic:'⚖️',t:'Moderada',d:'Arriesgo si tengo un plan B'},
      {v:'C',ic:'🛡️',t:'Conservadora',d:'Prefiero ir sobre seguro'},
      {v:'D',ic:'🚫',t:'Muy baja',d:'Evito riesgos siempre que puedo'}]},
    {q:'3. ¿Prefieres trabajar solo o en equipo?',opts:[
      {v:'A',ic:'🐺',t:'Solo siempre',d:'Rindo más controlando todo'},
      {v:'B',ic:'👥',t:'Solo con apoyo',d:'Decido yo pero acepto ayuda'},
      {v:'C',ic:'🤝',t:'En equipo',d:'Me gusta repartir responsabilidades'},
      {v:'D',ic:'🏢',t:'Depende',d:'Me adapto según la situación'}]},
    {q:'4. ¿Cómo gestionas la incertidumbre?',opts:[
      {v:'A',ic:'🚀',t:'Me lanzo igual',d:'La acción disipa la duda'},
      {v:'B',ic:'📊',t:'Pruebo en pequeño',d:'Hago un test antes de apostar todo'},
      {v:'C',ic:'📚',t:'Estudio más',d:'Necesito más datos para decidir'},
      {v:'D',ic:'😰',t:'Me paralizo',d:'La incertidumbre me bloquea'}]},
    {q:'5. ¿Qué hace que abandones un proyecto?',opts:[
      {v:'A',ic:'💪',t:'Casi nada',d:'Soy muy persistente'},
      {v:'B',ic:'📉',t:'Los números',d:'Si los datos dicen que no, paro'},
      {v:'C',ic:'😓',t:'El agotamiento',d:'Si me quemo, necesito parar'},
      {v:'D',ic:'💡',t:'Una idea mejor',d:'Si encuentro algo más interesante, cambio'}]}
  ];
  var h=turnImg(1)+
  '<div class="bn"><h2>Fase 1 — El Emprendedor</h2>'+
    '<p>Antes de hablar de negocios, hablemos de ti. Necesito conocerte para entender qué tipo de emprendedor eres.</p></div>'+
  '<div class="cd"><div class="ci cio">👤</div><h2>Cuéntame sobre ti</h2>'+
    '<p data-radix-estilo="r9">Esta información se usará solo para tu plan de negocio.</p>'+
    '<div class="fg"><label>¿Cuál es tu nombre?</label><input type="text" id="f-name" placeholder="Tu nombre completo"></div>'+
    '<div class="fg"><label>¿Con qué género te identificas?</label><select id="f-gender"><option value="">Selecciona...</option><option value="hombre">Hombre</option><option value="mujer">Mujer</option><option value="otro">Otro</option><option value="nd">Prefiero no decirlo</option></select></div>'+
    '<div class="fg"><label>¿Cuántos años tienes?</label><input type="number" id="f-age" placeholder="Ej: 32" min="16" max="99"></div>'+
    '<div class="fg"><label>¿Cuál es tu nivel de estudios?</label><select id="f-edu"><option value="">Selecciona...</option><option>Sin estudios formales</option><option>ESO / Graduado Escolar</option><option>Bachillerato</option><option>FP Grado Medio</option><option>FP Grado Superior</option><option>Grado Universitario</option><option>Máster / Postgrado</option><option>Doctorado</option></select></div>'+
    '<div class="fg"><label>¿Tienes experiencia laboral previa? ¿En qué sectores?</label><textarea id="f-exp" placeholder="Cuéntame tu trayectoria profesional..."></textarea></div>'+
    '<div class="fg"><label>¿Por qué quieres emprender? ¿Qué te motiva?</label><textarea id="f-motiv" placeholder="¿Libertad, pasión, necesidad, una idea...?"></textarea></div>'+
  '</div>'+
  '<div class="dv"><span>Tu perfil emprendedor</span></div>'+
  '<div class="cd"><div class="ci cib">🧠</div><h2>Análisis de personalidad emprendedora</h2>'+
    '<p data-radix-estilo="r10">Responde con sinceridad. No hay respuestas buenas ni malas.</p>';
  for(var i=0;i<dafoQ.length;i++){
    h+='<h3>'+dafoQ[i].q+'</h3>'+makeOpts('dafo'+i,dafoQ[i].opts,'c4',false);
  }
  h+='</div><div id="t1fb"></div>'+
    '<div class="bc"><button class="btn bp" data-radix-click="accion6">Continuar a la Fase 2 →</button></div>';
  area().innerHTML=h;
  radixRestaurarFormulario(G.turn);
}

function saveTurn1(){
  radixGuardarFormularioActual(G.turn);
  G.name=el('f-name').value.trim();
  G.gender=el('f-gender').value;
  G.age=parseInt(el('f-age').value)||0;
  G.education=el('f-edu').value;
  G.experience=el('f-exp').value.trim();
  G.motivation=el('f-motiv').value.trim();
  G.dafo=[];
  for(var i=0;i<5;i++) G.dafo.push(getOpt('dafo'+i));
  if(!G.name||!G.gender||!G.age||!G.education){el('t1fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Completa al menos nombre, género edad y estudios.</div>';return;}
  if(G.dafo.indexOf('')>=0){el('t1fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Responde las 5 preguntas de personalidad.</div>';return;}
  goTurn2();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 2 — EL NEGOCIO
   ════════════════════════════════════════════════════════════ */
function goTurn2(){
  G.turn=2;refreshDash();radixActualizarCodigoUI();goTop();
  var bizTypes=[
    {v:'comercio',ic:'🛍️',t:'Comercio',d:'Tienda física o venta de productos'},
    {v:'restauracion',ic:'🍽️',t:'Restauración',d:'Restaurante, bar, cafetería, food truck'},
    {v:'servicios',ic:'✂️',t:'Servicios',d:'Peluquería, consultoría, reparaciones...'},
    {v:'turismo',ic:'🏖️',t:'Turismo',d:'Alojamiento, excursiones, experiencias'},
    {v:'tecnologia',ic:'💻',t:'Tecnología',d:'Desarrollo web, apps, IT, digital'},
    {v:'artesania',ic:'🎨',t:'Artesanía',d:'Productos hechos a mano, arte local'},
    {v:'agricultura',ic:'🌱',t:'Agricultura',d:'Cultivo, producción local, agroturismo'},
    {v:'otro',ic:'🌟',t:'Otro',d:'Mi idea es diferente'}
  ];

  area().innerHTML=turnImg(2)+
  '<div class="bn"><h2>Fase 2 — El Negocio</h2><p>Muy bien, <strong>'+G.name+'</strong>. Ahora viene lo emocionante: hablemos de tu idea de negocio.</p></div>'+

  // --- TIPO DE NEGOCIO PRIMERO ---
  '<div class="cd"><div class="ci cig">💼</div><h2>¿Qué tipo de negocio quieres montar?</h2>'+
    '<p data-radix-estilo="r11">Elige la categoría que mejor describe tu idea:</p>'+
    makeOpts('bizType',bizTypes,'c4',false)+'</div>'+

  // --- SECCIÓN DE NOMBRE DESPUÉS DEL TIPO ---
  '<div class="cd" id="nameCard"><div class="ci cio">✨</div><h2>Nombre para tu negocio</h2>'+
    '<div class="fg"><label>Escribe el nombre que quieras para tu negocio</label><input type="text" id="f-custom" placeholder="Ej: Radix"></div>'+
    '<button class="btn bs" data-radix-estilo="r12" data-radix-click="accion7">✨ Generar ideas de nombres</button>'+
    '<div id="nameFb"></div>'+
    '<div id="nameBox" data-radix-estilo="r13">'+
      '<p data-radix-estilo="r14">O elige una de estas propuestas (borra el texto de arriba para usarlas):</p>'+
      '<div id="nameOpts"></div>'+
    '</div>'+
  '</div>'+
  // -----------------------------------------------------

  '<div class="cd"><div class="ci cio">📝</div><h2>Cuéntame tu idea</h2>'+
    '<div class="fg"><label>Describe tu idea de negocio en 2-3 frases</label><textarea id="f-bizdesc" placeholder="¿Qué harás exactamente? ¿Qué ofreces?"></textarea></div>'+
    '<div class="fg"><label>¿Qué necesidad del mercado local cubre?</label><textarea id="f-need" placeholder="¿Qué problema resuelves?"></textarea><div class="hn" id="needHint"></div></div>'+
    '<div class="fg"><label>Producto o servicio principal</label><input type="text" id="f-product" placeholder="Ej: Cortes de pelo, cenas gastronómicas, tours volcánicos..."></div></div>'+
  '<div class="cd"><div class="ci cib">⚖️</div><h2>Forma jurídica</h2><p data-radix-estilo="r15">¿Cómo te vas a dar de alta?</p>'+
    '<p>Estimaciones didácticas para Canarias: la fiscalidad y la cotización dependen del caso. La sociedad civil se supone mercantil; la cooperativa, protegida y de nueva creación.</p>'+
    makeOpts('legalForm', FORMAS_JURIDICAS, 'c3', true)+
    '</div>'+
  '<div class="cd"><div class="ci cig">🎯</div><h2>Identidad del negocio</h2>'+
    '<div class="fg"><label>Objetivo del negocio</label><textarea id="f-obj" placeholder="¿Qué quieres lograr en 2-3 años?"></textarea></div>'+
    '<div class="fg"><label>Misión</label><input type="text" id="f-mission" placeholder="¿Por qué existe tu negocio?"></div>'+
    '<div class="fg"><label>Visión</label><input type="text" id="f-vision" placeholder="¿Dónde ves tu negocio en 5 años?"></div></div>'+
  '<div class="cd"><div class="ci cib">📚</div><h2>Experiencia y formación</h2>'+
    '<div class="fg"><label>¿Experiencia previa en este sector?</label>'+makeOpts('sectorExp',[{v:'si',ic:'✅',t:'Sí'},{v:'no',ic:'❌',t:'No'}],'c2')+'</div>'+
    '<div class="fg"><label>¿Formación relacionada?</label>'+makeOpts('sectorTrain',[{v:'si',ic:'🎓',t:'Sí'},{v:'no',ic:'📖',t:'No'}],'c2')+'</div></div>'+
  '<div id="t2fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion8">← Atrás</button><button class="btn bp" data-radix-click="accion9">Continuar a la Fase 3 →</button></div>';
}

function genNames(){
  var t=getOpt('bizType');
  if(!t){el('nameFb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Selecciona primero el tipo de negocio arriba.</div>';return;}
  el('nameFb').innerHTML=''; // Limpiamos la alerta si todo va bien
  var nm={
    comercio:['Mi Tienda Local', 'El Rincón Gourmet', 'Comercio Urbano', 'Raíces Modernas', 'Eco Market'],
    restauracion:['Sabor y Tradición', 'La Mesa Compartida', 'Fuego y Sal', 'Terraza Express', 'El Caldero de la Abuela'],
    servicios:['Servicios Pro', 'Estilo y Detalle', 'Studio Creativo', 'Soluciones Globales', 'Atención Express'],
    turismo:['Rutas y Experiencias', 'Aventura Local', 'Isla Secreta Tours', 'Naturaleza Viva', 'Viajes de Ensueño'],
    tecnologia:['Soluciones Digitales', 'Tech Global', 'Innovación Labs', 'Código Activo', 'Dev Studio'],
    artesania:['Hecho a Mano', 'Tierra y Lava Craft', 'Bruma y Arte', 'Taller Artesanal', 'Creadores Locales'],
    agricultura:['Cultivos Naturales', 'Finca Verde', 'Tierra y Cosecha', 'Eco Huerta', 'Del Campo a Casa'],
    otro:['Proyecto Radix', 'Hub Creativo', 'Nueva Idea', 'Espacio Activo', 'Emprendimiento X']
  };
  var list=nm[t]||nm.otro;
  var opts=[];
  for(var i=0;i<list.length;i++) opts.push({v:list[i],ic:'💫',t:list[i],d:''});
  radixFijarEstilo(el('nameBox'),'display','block');
  el('nameOpts').innerHTML=makeOpts('bizName',opts,'c3',false);
}

function saveTurn2(){
  radixGuardarFormularioActual(G.turn);
  if(getOpt('legalForm')==='indeciso'){
    el('t2fb').innerHTML='<div id="aviso-forma-pendiente" class="al al-w" role="alert"><span class="ai">⚠️</span><div>Para continuar, selecciona una forma jurídica. Si necesitas ayuda, vuelve a pulsar «No lo tengo claro» y consulta a Leo.</div></div>';
    el('aviso-forma-pendiente').scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  G.bizType=getOpt('bizType');
  var types={comercio:'Comercio',restauracion:'Restauración',servicios:'Servicios',turismo:'Turismo',tecnologia:'Tecnología',artesania:'Artesanía',agricultura:'Agricultura',otro:'Otro'};
  G.bizTypeLabel=types[G.bizType]||'Otro';
  G.bizDesc=el('f-bizdesc').value.trim();
  G.marketNeed=el('f-need').value.trim();
  G.mainProduct=el('f-product').value.trim();
  var formaAnterior=G.legalForm;
  G.legalForm=getOpt('legalForm');
  if(formaAnterior && formaAnterior!==G.legalForm){G.capitalSuscrito=0;G.capitalMinimo=0;G.capitalPendiente=0;G.coopMinimum=null;G.ssCost=0;G.ssCostEstablecido=false;}
  G.legalFormLabel=obtenerFormaJuridica(G.legalForm).t;
  G.objective=el('f-obj').value.trim();
  G.mission=el('f-mission').value.trim();
  G.vision=el('f-vision').value.trim();
  G.bizName=(el('f-custom').value.trim())||getOpt('bizName')||'';
  G.sectorExp=getOpt('sectorExp')==='si';
  G.sectorTraining=getOpt('sectorTrain')==='si';
  if(!G.bizType||!G.bizDesc||!G.legalForm||!G.bizName){el('t2fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Completa: tipo, descripción, forma jurídica y nombre.</div>';return;}
  if(G.sectorExp&&G.sectorTraining){G.bar+=10;G.decisions.push({t:2,txt:'Experiencia y formación en el sector → +10',imp:10});}
  else if(!G.sectorExp&&!G.sectorTraining){G.bar-=10;G.decisions.push({t:2,txt:'Sin experiencia ni formación → -10',imp:-10});}
  else{G.bar+=3;G.decisions.push({t:2,txt:'Experiencia o formación parcial → +3',imp:3});}
  goTurn3();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 3 — EL CLIENTE
   ════════════════════════════════════════════════════════════ */
function goTurn3(){
  G.turn=3;refreshDash();radixActualizarCodigoUI();goTop();
  area().innerHTML=turnImg(3)+
  '<div class="bn"><h2>Fase 3 — El Cliente Objetivo</h2><p><strong>'+G.name+'</strong>, ya tenemos <strong>"'+G.bizName+'"</strong>. Ahora la pregunta clave: ¿a quién le vendes?</p></div>'+
  '<div class="cd"><div class="ci cio">🎯</div><h2>Define a tu cliente ideal</h2>'+
    '<div class="fg"><label>Describe a tu público objetivo</label><textarea id="f-target" placeholder="¿Quiénes son tus clientes ideales?"></textarea></div>'+
    '<div class="fg"><label>Rango de edad del cliente ideal</label><select id="f-tage"><option value="">Selecciona...</option><option>16-25 años</option><option>25-35 años</option><option>35-50 años</option><option>50-65 años</option><option>65+ años</option><option>Todas las edades</option></select></div></div>'+
  '<div class="cd"><div class="ci cig">🏝️</div><h2>¿Turista o residente?</h2>'+
    makeOpts('targetType',[
      {v:'turista',ic:'✈️',t:'Principalmente turista',d:'Ticket medio más alto. Estacionalidad. Marketing en alemán/inglés.'},
      {v:'residente',ic:'🏠',t:'Principalmente residente',d:'Cliente recurrente. Boca a boca potente. Descuento residente.'},
      {v:'mixto',ic:'🌐',t:'Ambos',d:'Mayor mercado. Doble estrategia de precios.'}
    ],'c3')+'</div>'+
  '<div class="cd"><div class="ci cib">📍</div><h2>Alcance y perfil económico</h2>'+
    '<div class="fg"><label>Zona geográfica</label>'+makeOpts('targetZone',[
      {v:'local',ic:'📌',t:'Local',d:G.municipality||''},
      {v:'isla',ic:'🏝️',t:'La isla',d:G.island||''},
      {v:'canarias',ic:'🇮🇨',t:'Canarias'},
      {v:'nacional',ic:'🇪🇸',t:'Nacional'},
      {v:'internacional',ic:'🌍',t:'Internacional'}
    ],'c3')+'</div>'+
    '<div class="fg"><label>Nivel adquisitivo</label>'+makeOpts('targetIncome',[
      {v:'bajo',ic:'💰',t:'Bajo',d:'Precios económicos'},
      {v:'medio',ic:'💰💰',t:'Medio',d:'Precios de mercado'},
      {v:'alto',ic:'💰💰💰',t:'Alto',d:'Premium o lujo'}
    ],'c3')+'</div>'+
    '<div class="fg"><label>Necesidades del cliente</label><textarea id="f-tneeds" placeholder="¿Qué busca, qué le frustra, qué necesita?"></textarea></div></div>'+
  '<div class="dv"><span>Evento narrativo</span></div>'+
  '<div class="ev"><h3>📱 ¡Mensaje en Instagram!</h3>'+
    '<p data-radix-estilo="r16">Un posible cliente te escribe preguntando por tus precios... <strong>¡antes de que hayas abierto!</strong> ¿Qué haces?</p>'+
    makeOpts('igEvent',[
      {v:'A',ic:'📋',t:'Respondo con todos los detalles',d:''},
      {v:'B',ic:'📝',t:'Le pido su contacto',d:''},
      {v:'C',ic:'🙈',t:'No respondo',d:''}
    ],'c3')+'</div>'+
  '<div id="t3fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion10">← Atrás</button><button class="btn bp" data-radix-click="accion11">Continuar a la Fase 4 →</button></div>';
}

function saveTurn3(){
  radixGuardarFormularioActual(G.turn);
  G.targetDesc=el('f-target').value.trim();
  G.targetAge=el('f-tage').value;
  G.targetType=getOpt('targetType');
  G.targetZone=getOpt('targetZone');
  G.targetIncome=getOpt('targetIncome');
  G.targetNeeds=el('f-tneeds').value.trim();
  G.igEvent=getOpt('igEvent');
  if(!G.targetType||!G.igEvent){el('t3fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Selecciona tipo de cliente y responde al evento.</div>';return;}
  if(G.igEvent==='A'){G.reputation+=5;G.decisions.push({t:3,txt:'Respondiste con detalles → +5 reputación',imp:5});}
  else if(G.igEvent==='B'){G.reputation+=8;G.decisions.push({t:3,txt:'Pediste contacto → +8 reputación',imp:8});}
  else{G.reputation-=10;G.decisions.push({t:3,txt:'Ignoraste al cliente → -10 reputación',imp:-10});}
  goTurn4();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 4 — UBICACIÓN
   ════════════════════════════════════════════════════════════ */
function goTurn4(){
  G.turn=4;refreshDash();radixActualizarCodigoUI();goTop();
  var licMap={
    comercio:['Licencia de apertura','Alta en IAE','Certificado de manipulador (si alimentos)','Permiso de rotulación'],
    restauracion:['Licencia de apertura','Permiso sanitario (ACIISI)','Registro sanitario canario','Certificado manipulador de alimentos','Licencia de terraza','Plan APPCC'],
    servicios:['Licencia de apertura','Alta en IAE','Seguro de responsabilidad civil','Certificaciones profesionales'],
    turismo:['Registro Turismo de Canarias','Licencia actividad turística','Seguro responsabilidad civil','Hojas de reclamaciones'],
    tecnologia:['Alta en IAE','LOPD/RGPD','Aviso legal y cookies','Registro de marca (opcional)'],
    artesania:['Alta en IAE','Licencia apertura (si taller)','Carnet artesano de Canarias'],
    agricultura:['Registro explotación agraria','Cuaderno de campo','Certificación ecológica (si aplica)','Registro sanitario'],
    otro:['Licencia de apertura','Alta en IAE','Seguro de responsabilidad civil']
  };
  var lics=licMap[G.bizType]||licMap.otro;
  var licHTML='';
  var licHtml='';for(var i=0;i<lics.length;i++)licHtml+='<li>'+lics[i]+'</li>';
  
  area().innerHTML=turnImg(4)+
  '<div class="bn"><h2>Fase 4 — Ubicación y Local</h2><p><strong>'+G.name+'</strong>, ¿dónde se instalará <strong>"'+G.bizName+'"</strong>?</p></div>'+
  
  // SECCIÓN 1: SELECCIÓN DE ISLA Y MUNICIPIO (NUEVO)
  '<div class="cd"><div class="ci cio">🏝️</div><h2>¿En qué isla y municipio emprendes?</h2>'+
    '<p data-radix-estilo="r17">Tu isla determina el contexto local de precios de alquiler y medios de comunicación en las siguientes fases.</p>'+
    makeOpts('islaChoice',[
      {v:'tenerife',   ic:'🌴', t:'Tenerife',        d:''},
      {v:'grancanaria',ic:'🏖️', t:'Gran Canaria',     d:''},
      {v:'lanzarote',  ic:'🌵', t:'Lanzarote',        d:''},
      {v:'fuerteventura',ic:'🐪',t:'Fuerteventura',   d:''},
      {v:'lapalma',    ic:'🌿', t:'La Palma',          d:''},
      {v:'lagomera',   ic:'🌲', t:'La Gomera',         d:''},
      {v:'elhierro',   ic:'💚', t:'El Hierro',          d:''}
    ],'c4')+
    '<div class="fg hidden" id="munBox" data-radix-estilo="r18"><label>Selecciona tu municipio</label>'+
    '<select id="munSelect" data-radix-estilo="r19"><option value="">Selecciona...</option></select></div>'+
  '</div>'+

  '<div class="cd"><div class="ci cio">🏪</div><h2>Tipo de presencia</h2>'+
    makeOpts('locType',[
      {v:'fisico',ic:'🏬',t:'Local físico',d:'Local a pie de calle'},
      {v:'online',ic:'🌐',t:'Online',d:'100% digital'},
      {v:'mixto',ic:'🔄',t:'Mixto',d:'Local + presencia online'}
    ],'c3')+'</div>'+
    
  '<div class="cd"><div class="ci cig">📍</div><h2>Ubicación</h2>'+
    '<div class="fg"><label>Zona o municipio</label><input type="text" id="f-zone" value="' + (G.municipality || '') + '" placeholder="Selecciona el municipio arriba" readonly></div>'+
    '<div class="fg"><label>Tipo de local</label>'+makeOpts('localType',[
      {v:'alquiler',ic:'🔑',t:'Alquiler',d:'Menor inversión inicial'},
      {v:'propio',ic:'🏠',t:'Propio',d:'Ya tengo local'},
      {v:'compra',ic:'💰',t:'Compra',d:'Gran inversión'}
    ],'c3')+'</div>'+
    '<div class="fg"><label>¿Reformas necesarias?</label>'+makeOpts('reformLvl',[
      {v:'completa',ic:'🔨',t:'Completa',d:'Obra completa'},
      {v:'parcial',ic:'🪛',t:'Parcial',d:'Instalaciones, distribución'},
      {v:'minima',ic:'🖌️',t:'Mínima',d:'Pintura, pequeños arreglos'},
      {v:'no',ic:'✅',t:'No aplica',d:'Listo para usar o es online'}
    ],'c4')+'</div>'+
    '<div class="fg"><label>Coste estimado de reforma (€)</label><input type="number" id="f-reform" placeholder="0" min="0"></div>'+
    '<div class="fg"><label>Mobiliario y equipamiento necesario</label><textarea id="f-furn" placeholder="Lista lo que necesitas. Busca precios reales en internet."></textarea></div></div>'+
    
  '<div class="cd"><div class="ci cib">🏷️</div><h2>Alquiler mensual</h2>'+
    '<div class="fg"><label>Alquiler mensual estimado (€/mes)</label><input type="number" id="f-rent4" placeholder="Ej: 600" min="0"><div class="hn" id="rentHintBox">Busca en Idealista o Fotocasa cuánto cuestan los locales en tu municipio. Selecciona isla y municipio para ver referencias.</div></div></div>'+
  
  '<div class="cd"><div class="ci cib">📜</div><h2>Licencias para '+G.bizTypeLabel+'</h2>'+
    '<p data-radix-estilo="r20">Según tu tipo de negocio, necesitarás:</p><ul>'+licHtml+'</ul>'+
    '<div class="al al-i"><span class="ai">ℹ️</span>Para más información sobre este tipo de gestiones, acude a la Concejalía de Comercio del Ayuntamiento, a la Oficina del Emprendedor o a la Cámara de Comercio.</div></div>'+

  '<div class="dv"><span>Dilema de ubicación</span></div>'+
  '<div class="ev"><h3>🏘️ Dos locales disponibles</h3><p data-radix-estilo="r21">¿Cuál eliges?</p>'+
    makeOpts('locChoice',[
      {v:'A',ic:'🏙️',t:'Centro de la ciudad',d:'900 €/mes | Alta visibilidad | Sin reforma'},
      {v:'B',ic:'🏡',t:'Zona residencial',d:'450 €/mes | Reforma ~3.000 € | Menor visibilidad'}
    ],'c2',true)+'</div>'+
  '<div id="t4fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion12">← Atrás</button><button class="btn bp" data-radix-click="accion13">Continuar a la Fase 5 →</button></div>';

  // Listeners dinámicos de selección de isla y municipio
  setTimeout(function(){
    var ic=el('islaChoice');
    if(ic) ic.addEventListener('click',function(){
      var v=getOpt('islaChoice');
      if(!v) return;
      var data=ISLAS[v];
      var sel=el('munSelect');
      sel.innerHTML='<option value="">Selecciona...</option>';
      for(var i=0;i<data.municipios.length;i++){
        var opt=document.createElement('option');
        opt.value=data.municipios[i];
        opt.textContent=data.municipios[i];
        if(G.municipality === data.municipios[i]) opt.selected = true;
        sel.appendChild(opt);
      }
      el('munBox').classList.remove('hidden');
      
      // Guardar datos temporales de la isla
      G.island = data.nombre;
      G.islandAdjective = data.adjetivo;
      G.rentHint = data.rentHint;
      G.localMedia = data.media;
      
      // Actualizar el pie de página
      var fp = el('footer-plan'); if(fp) fp.innerHTML = '🌋 Plan Radix ' + G.island;
      
      updateRentHintText();
    });
    
    var sel = el('munSelect');
    if(sel) sel.addEventListener('change', function(){
      var mun = sel.value;
      G.municipality = mun;
      var fz = el('f-zone');
      if(fz) fz.value = mun;
      
      // Actualizar el pie de página
      var fm = el('footer-municipio'); if(fm) fm.innerHTML = '🏛️ Emprendiendo en ' + G.municipality;
      
      updateRentHintText();
    });

    // Cargar previamente si ya hay selección
    if(G.island) {
       var btn = ic.querySelector('[data-v="' + G.island.toLowerCase().replace(' ', '') + '"]');
       if(btn) btn.click();
    }
  },100);
}

function updateRentHintText() {
  var rhBox = el('rentHintBox');
  if(rhBox && G.island && G.municipality) {
    rhBox.innerHTML = G.rentHint;
  }
}

function saveTurn4(){
  radixGuardarFormularioActual(G.turn);
  var isl=getOpt('islaChoice');
  var mun=el('munSelect')?el('munSelect').value:'';
  if(!isl||!mun){el('t4fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Elige una isla y un municipio para continuar.</div>';return;}
  
  G.locationType=getOpt('locType');
  G.locationZone=el('f-zone').value.trim();
  G.localType=getOpt('localType');
  G.reformLevel=getOpt('reformLvl');
  G.furniture=el('f-furn').value.trim();G.locationChoice=getOpt('locChoice');
  G.reformCostInput=parseFloat(el('f-reform').value)||0;
  var rent4=parseFloat(el('f-rent4')&&el('f-rent4').value)||0;
  if(rent4>=0) G.monthlyRent=rent4;
  if(!G.locationType||!G.locationChoice){el('t4fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Selecciona tipo de presencia y elige un local.</div>';return;}
  if(radixModoAyuntamientoSolicitado()){
    G.reformCost=G.reformCostInput;
    G.decisions.push({t:4,txt:'Zona residencial: reforma '+fmt(G.reformCost)+' €',imp:0});
  }else{
    if(G.locationChoice==='A'){G.reformCost=0;G.bar+=3;G.decisions.push({t:4,txt:'Local céntrico: alta visibilidad',imp:3});}
    else{G.reformCost=3000;G.decisions.push({t:4,txt:'Zona residencial: reforma 3.000 €',imp:0});}
    var rc={completa:25000,parcial:8000,minima:1500,no:0};
    if(G.locationChoice==='B'&&G.reformLevel!=='no')G.reformCost+=rc[G.reformLevel]||0;
    else if(G.locationChoice==='A'&&G.reformLevel!=='no')G.reformCost=rc[G.reformLevel]||0;
  }
  goTurn7();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 5 — INVERSIÓN INICIAL ⚡
   ════════════════════════════════════════════════════════════ */
function goTurn5(){
  G.turn=7;refreshDash();radixActualizarCodigoUI();goTop();
  area().innerHTML=turnImg(7)+
  '<div class="bn"><h2>Fase 7 — Inversión Inicial ⚡</h2>'+
    '<p><strong>'+G.name+'</strong>, vamos a poner números reales. ¿Cuánto cuesta abrir <strong>"'+G.bizName+'"</strong>?</p>'+
    '<p data-radix-estilo="r22"><strong class="hl">⚡ FASE DECISIVA — Mayor impacto en tu barra de viabilidad.</strong></p></div>'+
  '<div class="cd"><div class="ci cio">💰</div><h2>Capital y financiación</h2>'+
    '<div class="fg"><label>Dinero propio aportado (€)</label><input type="number" id="f-own" placeholder="15000" min="0" step="0.01"></div>'+
    '<div class="fg"><label>Aportaciones de otros socios o inversores (€)</label><input type="number" id="f-socios" min="0" step="0.01" value="'+(G.partnerMoney||0)+'"></div>'+
    ((G.legalForm==='sl'||G.legalForm==='sa')?'<div class="fg"><label>Capital social suscrito (€)</label><input type="number" id="f-capital-social" min="'+(G.legalForm==='sl'?'1':'60000')+'" step="0.01" value="'+(G.capitalSuscrito||(G.legalForm==='sl'?1:60000))+'"><p>'+(G.legalForm==='sl'?'Mínimo 1 €, íntegramente desembolsado.':'Mínimo 60.000 €, con al menos el 25 % desembolsado inicialmente.')+'</p></div>':'')+
    (G.legalForm==='cooperativa'?'<div class="fg"><label>Capital social mínimo fijado en los estatutos (€)</label><input type="number" id="f-coop-min" min="0" step="0.01" value="'+(G.coopMinimum==null?'':G.coopMinimum)+'"><p>En Canarias el mínimo lo establecen los estatutos y debe estar desembolsado.</p></div>':'')+
    '<p>Las aportaciones de socios quedan disponibles para el negocio y no son un gasto. El préstamo de la empresa no sustituye el desembolso de capital social.</p>'+
    '<div class="fg"><label>¿Necesitas financiación adicional? (puedes elegir varias)</label>'+makeOpts('financing',[
      {v:'prestamo',ic:'🏦',t:'Préstamo',d:'Con intereses'},
      {v:'subvencion',ic:'🎁',t:'Subvención',d:'A fondo perdido'},
      {v:'inversor',ic:'🤝',t:'Inversor',d:'A cambio de participación'},
      {v:'no',ic:'💪',t:'No necesito',d:'Lo cubro yo'}
    ],'c4',false,true)+
    '<div class="al al-i" data-radix-estilo="r23"><span class="ai">ℹ️</span> En Canarias existen líneas de subvención para nuevos emprendedores, como las ayudas del SCE (Servicio Canario de Empleo) al establecimiento por cuenta propia, el Programa Emprende Canarias, o las líneas del Cabildo/Ayuntamiento a través de fondos como el FDCAN. Consulta los requisitos y plazos vigentes en la web de tu Cabildo.</div>'+
    '</div></div>'+
  '<div class="cd hidden" id="loanBox"><div class="ci cib">🧮</div><h2>Simulador de préstamo</h2>'+
    '<div class="ls"><div class="lg2">'+
      '<div class="fg"><label>Capital (€)</label><input type="number" id="f-loan" placeholder="10000" min="0" data-radix-input="accion14"></div>'+
      '<div class="fg"><label>Interés anual (%)</label><input type="number" id="f-int" value="6" step="0.5" data-radix-input="accion14"></div>'+
      '<div class="fg"><label>Plazo (meses)</label><input type="number" id="f-months" value="60" min="12" data-radix-input="accion14"></div>'+
    '</div><div class="lr" id="loanRes"><p data-radix-estilo="r24">Introduce datos</p></div></div></div>'+
  '<div class="dv"><span>Desglose de gastos</span></div>'+
  '<div class="cd"><div class="ci cig">📊</div><h2>Inversión inicial detallada</h2>'+
    '<p data-radix-estilo="r25">Rellena cada partida con importes sin IGIC deducible; incluye el impuesto cuando no sea deducible. El simulador no calcula ni liquida el IGIC.</p>'+
    '<div class="tw"><table>'+
      '<tr><th>Concepto</th><th>Importe (€)</th></tr>'+
      '<tr><td>Cuota mensual del local (1er mes)</td><td><input type="number" id="e-rent" value="'+(G.monthlyRent||0)+'" readonly data-radix-estilo="r26"></td></tr>'+
      '<tr><td>Fianza del local (2 meses)</td><td><input type="number" id="e-dep" value="'+Math.round((G.monthlyRent||0)*2)+'" readonly data-radix-estilo="r27"></td></tr>'+
      '<tr><td>Reforma del local</td><td><input type="number" id="e-ref" value="'+G.reformCostInput+'" readonly data-radix-estilo="r28"></td></tr>'+
      '<tr><td>Mobiliario e inventario inicial</td><td><input type="number" id="e-furn" value="0"></td></tr>'+
      '<tr><td>Suministros: agua, luz, internet</td><td><input type="number" id="e-sup" value="0"></td></tr>'+
      '<tr><td>Gastos legales: alta, asesoría, seguros</td><td><input type="number" id="e-leg" value="0"></td></tr>'+
      '<tr><td>Maquinaria y herramientas</td><td><input type="number" id="e-maq" value="0"></td></tr>'+
      '<tr><td>Software, suscripciones, web</td><td><input type="number" id="e-soft" value="0"></td></tr>'+
      '<tr><td>Marketing de lanzamiento</td><td><input type="number" id="e-mkt" value="0"></td></tr>'+
      '<tr class="tr-t"><td><strong>TOTAL GASTOS</strong></td><td><strong id="e-total">0 €</strong></td></tr>'+
    '</table></div></div>'+
  '<div class="dv"><span>Reservas</span></div>'+
  '<div class="cd"><div class="ci cib">🛟</div><h2>Colchón y fondo de imprevistos</h2>'+
    '<p data-radix-estilo="r29">Este dinero no se gasta en la apertura: es capital que reservas y que sigue disponible cuando pases a la Fase 8.</p>'+
    '<div class="tw"><table>'+
      '<tr><th>Concepto</th><th>Importe (€)</th></tr>'+
      '<tr><td>Colchón (recomendable que equivalga a 3-6 meses de gastos fijos básicos)</td><td><input type="number" id="e-cush" value="0"></td></tr>'+
      '<tr><td>Fondo para imprevistos</td><td><input type="number" id="e-cont" value="0"></td></tr>'+
    '</table></div>'+
    '<div class="bc" data-radix-estilo="r30"><button class="btn bs" data-radix-click="accion15">🧮 Calcular total</button></div>'+
    '<div id="invAlerts"></div></div>'+
  '<div class="dv"><span>Evento de crisis</span></div>'+
  '<div class="ev"><h3>⚡ Crisis: Problema eléctrico</h3>'+
    '<p data-radix-estilo="r31">El propietario informa que <strong>la instalación eléctrica necesita renovación completa</strong>. Coste: <strong>4.500 €</strong>.</p>'+
    makeOpts('crisis',[
      {v:'A',ic:'💸',t:'Asumo el coste',d:'-4.500 € de capital'},
      {v:'B',ic:'🤝',t:'Negocio con el dueño',d:'Él lo paga, tú 3 años permanencia'},
      {v:'C',ic:'🔄',t:'Busco otro local',d:'-1.500 € en trámites perdidos'}
    ],'c3')+'</div>'+
  '<div id="t5fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion16">← Atrás</button><button class="btn bp" data-radix-click="accion17">Continuar a la Fase 8 →</button></div>';

  // show/hide loan
  setTimeout(function(){
    var fg=el('financing');
    if(fg)fg.addEventListener('click',function(){el('loanBox').classList.toggle('hidden',getOptMulti('financing').indexOf('prestamo')===-1);});
  },100);
}

function doLoan(){
  var P=parseFloat(el('f-loan').value)||0;
  var tasa=parseFloat(el('f-int').value);
  var r=(Number.isFinite(tasa)&&tasa>=0?tasa:6)/100/12;
  var n=parseInt(el('f-months').value)||60;
  if(P<=0){el('loanRes').innerHTML='<p data-radix-estilo="r32">Introduce un importe</p>';return;}
  var pay=r ? P*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1) : P/n;
  G.loanPayment=pay;
  el('loanRes').innerHTML='<div class="big">'+fmt(pay)+' €/mes</div><p data-radix-estilo="r33">Total: '+fmt(pay*n)+' € | Intereses: '+fmt(pay*n-P)+' €</p>';
}

function doTotal(){
  var ids=['e-rent','e-dep','e-ref','e-furn','e-sup','e-leg','e-maq','e-soft','e-mkt'];
  var tot=0;for(var i=0;i<ids.length;i++)tot+=(parseFloat(el(ids[i]).value)||0);
  G.totalInvestment=tot;
  el('e-total').textContent=fmt(tot)+' €';
  var cush=parseFloat(el('e-cush').value)||0;
  var own=parseFloat(el('f-own').value)||0;
  var loan=getOptMulti('financing').indexOf('prestamo')>=0?(parseFloat(el('f-loan')&&el('f-loan').value)||0):0;
  var socios=parseFloat(el('f-socios').value)||0;
  var minimoCoop=el('f-coop-min')?el('f-coop-min').value:null;
  var capitalDeclarado=el('f-capital-social')?el('f-capital-social').value:null;
  var calculo=calcularFinanciacionJuridica(G.legalForm,own,socios,loan,tot,minimoCoop,capitalDeclarado);
  var avail=calculo.recursos;var h='';
  if(G.legalForm==='indeciso') h+='<div class="al al-i">Forma pendiente: no se aplica todavía un capital social mínimo.</div>';
  else if((G.legalForm==='sl' || G.legalForm==='sa') && calculo.faltaDato) h+='<div class="al al-w">El capital suscrito debe ser al menos '+(G.legalForm==='sl'?'1':'60.000')+' €.</div>';
  else if(G.legalForm==='cooperativa' && calculo.faltaDato) h+='<div class="al al-w">Indica un capital mínimo positivo previsto en los estatutos de la cooperativa.</div>';
  else if(calculo.minimo>0){
    h+='<div class="al al-i"><div><strong>Capital social:</strong> '+fmt(calculo.suscrito)+' € suscritos; desembolso inicial mínimo '+fmt(calculo.minimo)+' €. Aportaciones disponibles de socios: '+fmt(calculo.aportado)+' €.'+(calculo.pendiente?' Quedan '+fmt(calculo.pendiente)+' € por desembolsar por los accionistas en los plazos que correspondan.':'')+(G.legalForm==='sl'?' Con capital inferior a 3.000 € existen reglas especiales de reserva y responsabilidad.':'')+'</div></div>';
    if(calculo.faltaCapital>0) h+='<div class="al al-d">Faltan '+fmt(calculo.faltaCapital)+' € de aportaciones para el desembolso mínimo. El préstamo de la empresa no lo cubre.</div>';
  } else h+='<div class="al al-i">No se aplica un capital social mínimo general a esta forma en el modelo.</div>';
  if(cush<tot*0.1)h+='<div class="al al-d"><span class="ai">⚠️</span><div><strong>Sin colchón suficiente.</strong> Tu colchón ('+fmt(cush)+' €) es inferior al 10% de los gastos de apertura ('+fmt(tot*0.1)+' €).</div></div>';
  if(calculo.faltaInversion>0)h+='<div class="al al-d"><span class="ai">🔴</span><div><strong>Financiación insuficiente.</strong> Necesitas '+fmt(tot)+' € para la apertura y dispones de '+fmt(avail)+' €. Faltan '+fmt(calculo.faltaInversion)+' €.</div></div>';
  else h+='<div class="al al-s"><span class="ai">✅</span><div><strong>Financiación suficiente para la apertura.</strong> Dispones de '+fmt(avail)+' € para '+fmt(tot)+' € de gastos; quedarían '+fmt(calculo.liquidez)+' € antes de otros eventos.</div></div>';
  el('invAlerts').innerHTML=h;
  return calculo;
}

function saveTurn5(){
  radixGuardarFormularioActual(G.turn);
  G.ownMoney=Math.max(0,parseFloat(el('f-own').value)||0);
  G.partnerMoney=Math.max(0,parseFloat(el('f-socios').value)||0);
  G.coopMinimum=el('f-coop-min') ? el('f-coop-min').value : null;
  G.financingTypes=getOptMulti('financing');
  G.financingType=G.financingTypes[0]||'';
  G.loanAmount=G.financingTypes.indexOf('prestamo')>=0?Math.max(0,parseFloat(el('f-loan')&&el('f-loan').value)||0):0;
  if(G.loanAmount){
    var interes=parseFloat(el('f-int').value); G.loanInterest=Number.isFinite(interes)&&interes>=0?interes:6;
    G.loanMonths=Math.max(1,parseInt(el('f-months').value)||60); doLoan();
  } else G.loanPayment=0;
  G.crisisChoice=getOpt('crisis');
  if(!G.crisisChoice){el('t5fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Decide sobre la crisis eléctrica.</div>';return;}
  var calculo=doTotal();
  if(calculo.faltaDato || calculo.faltaCapital>0){el('t5fb').innerHTML='<div class="al al-w">Revisa el capital social y las aportaciones antes de continuar.</div>';return;}
  G.capitalSuscrito=calculo.suscrito; G.capitalMinimo=calculo.minimo; G.capitalPendiente=calculo.pendiente;
  G.capital=G.ownMoney+G.partnerMoney+G.loanAmount;
  G.capital-=G.mktInitialCost||0;
  G.capital-=G.hiringEventCost||0;
  G.expenses={rent:parseFloat(el('e-rent').value)||0,deposit:parseFloat(el('e-dep').value)||0,reform:parseFloat(el('e-ref').value)||0,furniture:parseFloat(el('e-furn').value)||0,supplies:parseFloat(el('e-sup').value)||0,legal:parseFloat(el('e-leg').value)||0,machinery:parseFloat(el('e-maq').value)||0,software:parseFloat(el('e-soft').value)||0,marketing:parseFloat(el('e-mkt').value)||0,cushion:parseFloat(el('e-cush').value)||0,contingency:parseFloat(el('e-cont').value)||0};
  G.monthlyRent=G.expenses.rent;G.reformCost=G.expenses.reform;
  if(G.crisisChoice==='A'){G.capital-=4500;G.decisions.push({t:5,txt:'Asumiste coste eléctrico: -4.500 €',imp:-4500});}
  else if(G.crisisChoice==='B'){G.decisions.push({t:5,txt:'Negociaste reforma eléctrica: sin coste, 3 años permanencia',imp:0});}
  else{G.capital-=1500;G.decisions.push({t:5,txt:'Buscaste otro local: -1.500 € perdidos',imp:-1500});}
  G.capital-=G.totalInvestment;
  var cush=G.expenses.cushion||0;
  if(G.capital>=0&&cush>=G.totalInvestment*0.1){G.bar+=15;G.decisions.push({t:5,txt:'Inversión equilibrada y colchón → +15 barra',imp:15});}
  else if(G.capital>=0){G.bar+=5;G.decisions.push({t:5,txt:'Capital suficiente, colchón escaso → +5',imp:5});}
  else{G.bar-=20;G.decisions.push({t:5,txt:'Capital insuficiente → -20 barra ⚠️',imp:-20});}
  goTurn6();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 6 — COSTES FIJOS Y VARIABLES ⚡
   ════════════════════════════════════════════════════════════ */
function goTurn6(){
  G.turn=8;refreshDash();radixActualizarCodigoUI();goTop();
  var ssc=G.ssCostEstablecido ? G.ssCost : (G.ssCost || obtenerFormaJuridica(G.legalForm).ss);
  var wagesTotal=Math.round((G.numWorkers||0)*(G.workerSalary||0));
  area().innerHTML=turnImg(8)+
  '<div class="bn"><h2>Fase 8 — Costes Fijos y Variables ⚡</h2>'+
    '<p>¿Cuánto cuesta mantener <strong>"'+G.bizName+'"</strong> abierto cada mes? Conocer tus costes es vital para saber cuánto debes vender para no perder dinero.</p>'+
    '<p data-radix-estilo="r34"><strong class="hl">⚡ SEGUNDA FASE DECISIVA</strong></p></div>'+
  '<p>Introduce costes sin IGIC deducible e incluye el impuesto si no puedes deducirlo. El simulador no calcula la liquidación de IGIC.</p>'+
  '<div class="cd"><div class="ci cio">📋</div><h2>Costes fijos mensuales</h2>'+
    '<div class="tw"><table><tr><th>Concepto</th><th>€/mes</th></tr>'+
      '<tr><td>Alquiler</td><td><input type="number" id="gf-rent" value="'+G.monthlyRent+'" readonly data-radix-estilo="r35"></td></tr>'+
      '<tr><td>Seguridad Social ('+G.legalFormLabel+')</td><td><input type="number" id="gf-ss" value="'+ssc+'" readonly data-radix-estilo="r36"></td></tr>'+
      '<tr><td>Nóminas empleados (bruto total)</td><td><input type="number" id="gf-wages" value="'+wagesTotal+'" readonly data-radix-estilo="r37"></td></tr>'+
      '<tr><td>Seguridad Social empleados</td><td><input type="number" id="gf-ssemp" value="'+(G.ssEmployees||0)+'" readonly data-radix-estilo="r38"></td></tr>'+
      '<tr><td>Asesoría/gestoría</td><td><input type="number" id="gf-adv" value="0"></td></tr>'+
      '<tr><td>Seguros</td><td><input type="number" id="gf-ins" value="0"></td></tr>'+
      '<tr><td>Internet y teléfono</td><td><input type="number" id="gf-tel" value="0"></td></tr>'+
      '<tr><td>Publicidad mensual fija</td><td><input type="number" id="gf-ads" value="'+(G.marketingBudget||0)+'" readonly data-radix-estilo="r39"></td></tr>'+
      '<tr><td>Cuota préstamo</td><td><input type="number" id="gf-loan" value="'+(G.loanPayment?G.loanPayment.toFixed(2):0)+'" readonly data-radix-estilo="r40"></td></tr>'+
      '<tr class="tr-t"><td><strong>Total fijos</strong></td><td><strong id="gf-total">0 €</strong></td></tr>'+
    '</table></div></div>'+
  '<div class="cd"><div class="ci cig">📦</div><h2>Costes variables mensuales</h2>'+
    '<div class="tw"><table><tr><th>Concepto</th><th>€/mes est.</th></tr>'+
      '<tr><td>Proveedores y materiales</td><td><input type="number" id="gv-sup" value="0"></td></tr>'+
      '<tr><td>Transporte</td><td><input type="number" id="gv-tra" value="0"></td></tr>'+
      '<tr><td>Comisiones</td><td><input type="number" id="gv-com" value="0"></td></tr>'+
      '<tr><td>Suministros (agua, luz, gas)</td><td><input type="number" id="gv-uti" value="0"></td></tr>'+
      '<tr><td>Imprevistos mensuales</td><td><input type="number" id="gv-mis" value="0"></td></tr>'+
      '<tr class="tr-t"><td><strong>Total variables</strong></td><td><strong id="gv-total">0 €</strong></td></tr>'+
    '</table></div></div>'+
  '<div class="bc" data-radix-estilo="r41"><button class="btn bs" data-radix-click="accion18">🧮 Calcular totales</button></div>'+
  '<div id="costAlerts"></div>'+
  '<div class="cd" id="costSummaryBox" data-radix-estilo="r42"><div class="ci" data-radix-estilo="r43">📊</div><h2>Resumen de Costes</h2>'+
    '<div data-radix-estilo="r44">'+
      '<div data-radix-estilo="r45"><div data-radix-estilo="r46">Fijos/mes</div><div id="cs-fixed" data-radix-estilo="r47">0 €</div></div>'+
      '<div data-radix-estilo="r48"><div data-radix-estilo="r49">Variables/mes</div><div id="cs-var" data-radix-estilo="r50">0 €</div></div>'+
      '<div data-radix-estilo="r51"><div data-radix-estilo="r52">Total costes/mes</div><div id="cs-total" data-radix-estilo="r53">0 €</div></div>'+
    '</div></div>'+
  '<div id="t6fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion19">← Atrás</button><button class="btn bp" data-radix-click="accion20">Continuar a la Fase 9 →</button></div>';
}

function doCosts(){
  var fi=['gf-rent','gf-ss','gf-wages','gf-ssemp','gf-adv','gf-ins','gf-tel','gf-ads','gf-loan'];
  var vi=['gv-sup','gv-tra','gv-com','gv-uti','gv-mis'];
  var tf=0,tv=0;
  for(var i=0;i<fi.length;i++)tf+=(parseFloat(el(fi[i]).value)||0);
  for(var i=0;i<vi.length;i++)tv+=(parseFloat(el(vi[i]).value)||0);
  G.totalFixed=tf;G.totalVariable=tv;
  el('gf-total').textContent=fmt(tf)+' €';el('gv-total').textContent=fmt(tv)+' €';
  var h='<div class="al al-i"><span class="ai">📊</span><div><strong>Total mensual:</strong> '+fmt(tf)+' (fijos) + '+fmt(tv)+' (variables) = <strong>'+fmt(tf+tv)+' €/mes</strong></div></div>';
  if(tf>(tf+tv)*0.85)h+='<div class="al al-d"><span class="ai">🔴</span><div><strong>Estructura peligrosa.</strong> Fijos > 85% del total. Revisa qué puedes reducir.</div></div>';
  el('costAlerts').innerHTML=h;
  var sb=el('costSummaryBox');if(sb)radixFijarEstilo(sb,'display','block');
  if(el('cs-fixed'))el('cs-fixed').textContent=fmt(tf)+' €';
  if(el('cs-var'))el('cs-var').textContent=fmt(tv)+' €';
  if(el('cs-total'))el('cs-total').textContent=fmt(tf+tv)+' €';
}

function saveTurn6(){
  radixGuardarFormularioActual(G.turn);
  doCosts();
  G.fixedCosts={rent:parseFloat(el('gf-rent').value)||0,ss:parseFloat(el('gf-ss').value)||0,wages:parseFloat(el('gf-wages').value)||0,ssEmployees:parseFloat(el('gf-ssemp').value)||0,advisory:parseFloat(el('gf-adv').value)||0,insurance:parseFloat(el('gf-ins').value)||0,telecom:parseFloat(el('gf-tel').value)||0,ads:parseFloat(el('gf-ads').value)||0,loan:parseFloat(el('gf-loan').value)||0};
  G.variableCosts={supplies:parseFloat(el('gv-sup').value)||0,transport:parseFloat(el('gv-tra').value)||0,commissions:parseFloat(el('gv-com').value)||0,utilities:parseFloat(el('gv-uti').value)||0,misc:parseFloat(el('gv-mis').value)||0};
  var ratio=G.totalFixed/(G.totalFixed+G.totalVariable+0.01);
  if(ratio<0.65){G.bar+=10;G.decisions.push({t:6,txt:'Costes equilibrados → +10',imp:10});}
  else if(ratio<0.8){G.bar+=3;G.decisions.push({t:6,txt:'Fijos algo elevados → +3',imp:3});}
  else{G.bar-=15;G.decisions.push({t:6,txt:'Fijos demasiado altos → -15 ⚠️',imp:-15});}
  goTurn9();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 7 — PERSONAL
   ════════════════════════════════════════════════════════════ */
function goTurn7(){
  G.turn=5;refreshDash();radixActualizarCodigoUI();goTop();
  area().innerHTML=turnImg(5)+
  '<div class="bn"><h2>Fase 5 — Personal</h2><p><strong>'+G.name+'</strong>, ¿vas a trabajar solo o necesitas equipo?</p></div>'+
  '<div class="cd"><div class="ci cio">👥</div><h2>Organización</h2>'+
    '<div class="fg"><label>¿Solo o con empleados?</label>'+makeOpts('workAlone',[
      {v:'solo',ic:'🐺',t:'Solo/a',d:'Yo me encargo de todo'},
      {v:'empleados',ic:'👥',t:'Con empleados',d:'Necesito contratar'}
    ],'c2')+'</div>'+
    '<div id="empBox" class="hidden">'+
      '<div class="fg"><label>Número de trabajadores</label><input type="number" id="f-nw" value="1" min="1" data-radix-input="accion21"></div>'+
      '<div class="fg"><label>Salario bruto mensual por empleado (€)</label><input type="number" id="f-ws" placeholder="1221" data-radix-input="accion21"><div class="hn">SMI 2026: 1.221 €/mes brutos (14 pagas). Recuerda añadir Seguridad Social patronal (~29,9% adicional, incluye MEI 0,75%).</div></div>'+
    '</div>'+
    '<div class="fg"><label>Tu salario propio mensual (€)</label><input type="number" id="f-os" placeholder="1500"></div>'+
    '<div class="fg"><label>Horario de apertura</label><select id="f-sch"><option value="">Selecciona...</option><option value="Mañanas (8-15h)">Mañanas (8-15h)</option><option value="Tardes (16-22h)">Tardes (16-22h)</option><option value="Partido (9-14h / 17-21h)">Partido (9-14h / 17-21h)</option><option value="Continuo (10-20h)">Continuo (10-20h)</option><option value="24/7 o turnos">24/7 o turnos</option><option value="Solo fines de semana">Solo fines de semana</option></select></div>'+
    '<div class="fg"><label>Formación necesaria</label><textarea id="f-train" placeholder="Cursos, certificaciones..."></textarea></div></div>'+
  '<div class="cd" id="ssCalc"><div class="ci cib">🧮</div><h2>Coste Seguridad Social</h2>'+
    '<div class="fg"><label>Cuota mensual estimada de la persona emprendedora (€)</label><input type="number" id="f-ss-own" min="0" step="0.01" value="'+(G.ssCostEstablecido ? G.ssCost : (G.ssCost || obtenerFormaJuridica(G.legalForm).ss))+'" data-radix-input="accion21"><p>Es una hipótesis editable, no una cuota oficial. Depende de tu régimen, rendimientos y posibles reducciones.</p></div>'+
    '<p>En Canarias puede existir una subvención de cuota cero sujeta a convocatoria y requisitos; no se aplica automáticamente ni elimina el pago inicial.</p><div id="ssRes"><p>Selecciona solo o empleados.</p></div></div>'+
  '<div class="dv"><span>Evento</span></div>'+
  '<div class="ev"><h3>🎉 ¡Más clientes de los esperados!</h3>'+
    '<p data-radix-estilo="r54">No das abasto. ¿Qué haces?</p>'+
    makeOpts('hiringEv',[
      {v:'A',ic:'👤',t:'Contrato a alguien',d:''},
      {v:'B',ic:'💪',t:'Lo asumo yo',d:''},
      {v:'C',ic:'🚫',t:'Rechazo clientes',d:''}
    ],'c3')+'</div>'+
  '<div id="t7fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion22">← Atrás</button><button class="btn bp" data-radix-click="accion23">Continuar a la Fase 6 →</button></div>';
  setTimeout(function(){
    var wa=el('workAlone');
    if(wa)wa.addEventListener('click',function(){
      el('empBox').classList.toggle('hidden',getOpt('workAlone')!=='empleados');
      doSS();
    });
  },100);
}

function doSS(){
  var alone=getOpt('workAlone')!=='empleados';
  var inputCuota=el('f-ss-own');
  var importeCuota=inputCuota && inputCuota.value!==''?Number(inputCuota.value):obtenerFormaJuridica(G.legalForm).ss;
  var ssOwn=Number.isFinite(importeCuota)&&importeCuota>=0?importeCuota:obtenerFormaJuridica(G.legalForm).ss;
  G.ssCostEstablecido=true;
  var ssLabel=fmt(ssOwn)+' €/mes (estimación orientativa; depende de la situación de la persona)';
  var h='<div class="al al-i"><span class="ai">📋</span><div><strong>Tu SS:</strong> '+ssLabel+'</div></div>';
  if(!alone){
    var n=parseInt(el('f-nw')&&el('f-nw').value)||1;
    var sal=parseFloat(el('f-ws')&&el('f-ws').value)||1200;
    var ssW=Math.round(sal*0.3065);
    h+='<div class="al al-i"><span class="ai">👥</span><div><strong>SS empleados:</strong> ~'+fmt(ssW)+' €/mes × '+n+' = '+fmt(ssW*n)+' €<br><strong>Total SS:</strong> '+fmt(ssOwn+ssW*n)+' €/mes</div></div>';
    G.ssCost=ssOwn;
    G.ssEmployees=ssW*n;
  } else { G.ssCost=ssOwn; G.ssEmployees=0; }
  el('ssRes').innerHTML=h;
}

function saveTurn7(){
  radixGuardarFormularioActual(G.turn);
  G.workAlone=getOpt('workAlone')==='solo';
  G.numWorkers=G.workAlone?0:(parseInt(el('f-nw')&&el('f-nw').value)||0);
  G.ownSalary=parseFloat(el('f-os').value)||0;
  G.workerSalary=parseFloat(el('f-ws')&&el('f-ws').value)||0;
  G.schedule=el('f-sch').value.trim();
  G.trainingNeeded=el('f-train').value.trim();
  G.hiringChoice=getOpt('hiringEv');
  if(!G.hiringChoice){el('t7fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Decide sobre el evento.</div>';return;}
  doSS();
  if(G.hiringChoice==='A'){G.reputation+=10;var ec=(G.workerSalary||1200)*1.33;G.hiringEventCost=ec;G.decisions.push({t:5,txt:'Contrataste personal: +10 rep, -'+fmt(ec)+' €',imp:10});}
  else if(G.hiringChoice==='B'){G.reputation-=5;G.decisions.push({t:5,txt:'Asumiste todo solo → -5 reputación',imp:-5});}
  else{G.reputation-=15;G.decisions.push({t:5,txt:'Rechazaste clientes → -15 reputación',imp:-15});}
  goTurn8();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 8 — MARKETING
   ════════════════════════════════════════════════════════════ */
function goTurn8(){
  G.turn=6;refreshDash();radixActualizarCodigoUI();goTop();
  var rec={comercio:'A',restauracion:'D',servicios:'A',turismo:'A',tecnologia:'A',artesania:'D',agricultura:'B'};
  var best=rec[G.bizType]||'A';
  area().innerHTML=turnImg(6)+
  '<div class="bn"><h2>Fase 6 — Marketing</h2><p>De nada sirve el mejor negocio si nadie sabe que existes. ¿Cómo darás a conocer <strong>"'+G.bizName+'"</strong>?</p></div>'+
  '<div class="cd"><div class="ci cio">📣</div><h2>Estrategia</h2>'+
    '<div class="fg"><label>¿Marketing?</label>'+makeOpts('doMkt',[
      {v:'si',ic:'📢',t:'Sí',d:'El marketing es inversión'},
      {v:'no',ic:'🤷',t:'No, boca a boca',d:'Confío en que vendrán'}
    ],'c2')+'</div>'+
    '<div class="fg" id="mktBudgetBox" data-radix-estilo="r55"><label>Presupuesto mensual marketing (€)</label><input type="number" id="f-mktb" placeholder="200"></div>'+
    '<div class="fg"><label>Promociones de apertura</label><textarea id="f-promos" placeholder="Ej: 20% descuento primera semana..."></textarea></div>'+
    '<div class="fg"><label>Colaboraciones con otros negocios</label><textarea id="f-collabs" placeholder="¿Piensas colaborar?"></textarea></div></div>'+
  '<div class="dv"><span>Elige tu estrategia principal</span></div>'+
  '<div class="cd"><div class="ci cig">🎯</div><h2>El gran dilema de marketing</h2>'+
    '<p data-radix-estilo="r56">Cada opción tiene diferente rentabilidad para tu negocio ('+G.bizTypeLabel+'):</p>'+
    makeOpts('mktChoice',[
      {v:'A',ic:'📱',t:'Meta Ads — 300 €',d:'Alcance masivo, turistas, jóvenes.'+(best==='A'?' ⭐ RECOMENDADA':'')},
      {v:'B',ic:'📻',t:'Radio local — 250 €',d:'Residente tradicional, confianza.'+(best==='B'?' ⭐ RECOMENDADA':'')},
      {v:'C',ic:'📰',t:'Periódico local — 200 €',d:G.localMedia + ' | Credibilidad corporativa.'+(best==='C'?' ⭐ RECOMENDADA':'')},
      {v:'D',ic:'🎉',t:'Evento apertura — 300 €',d:'Boca a boca, impacto comunidad.'+(best==='D'?' ⭐ RECOMENDADA':'')},
      {v:'E',ic:'🚗',t:'Coche con altavoz — 150 €',d:'Recorre ' + G.municipality + ' anunciando ofertas.'+(best==='E'?' ⭐ RECOMENDADA':'')}
    ],'c2',true)+'</div>'+
  '<div id="t8fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion24">← Atrás</button><button class="btn bp" data-radix-click="accion25">Continuar a la Fase 7 →</button></div>';
  setTimeout(function(){
    var fg=el('doMkt');
    if(fg)fg.addEventListener('click',function(){
      var v=getOpt('doMkt');
      radixFijarEstilo(el('mktBudgetBox'),'display',v==='si'?'block':'none');
    });
  },0);
}

function saveTurn8(){
  radixGuardarFormularioActual(G.turn);
  G.doMarketing=getOpt('doMkt')==='si';
  G.marketingBudget=G.doMarketing?(parseFloat(el('f-mktb').value)||0):0;
  G.openingPromo=el('f-promos').value.trim();
  G.collabs=el('f-collabs').value.trim();
  G.marketingChoice=getOpt('mktChoice');
  if(!G.marketingChoice){el('t8fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Elige una estrategia.</div>';return;}
  var costs={A:300,B:250,C:200,D:300,E:150};var labs={A:'Meta Ads',B:'Radio local',C:'Periódico',D:'Evento apertura',E:'Coche con altavoz'};
  G.mktInitialCost=costs[G.marketingChoice]||0;
  G.decisions.push({t:6,txt:labs[G.marketingChoice]+': -'+G.mktInitialCost+' €',imp:-(G.mktInitialCost)});
  if(!G.doMarketing){G.bar-=5;G.reputation-=5;G.decisions.push({t:6,txt:'Sin marketing → -5 barra y reputación',imp:-5});}
  else{G.bar+=3;G.reputation+=5;}
  goTurn5();
  radixRestaurarFormulario(G.turn);
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FASE 9 — PREVISIONES
   ════════════════════════════════════════════════════════════ */
function goTurn9(){
  G.turn=9;refreshDash();radixActualizarCodigoUI();goTop();
  area().innerHTML=turnImg(9)+
  '<div class="bn"><h2>Fase 9 — Previsiones Económicas</h2><p>La verdad financiera, <strong>'+G.name+'</strong>. ¿Es viable <strong>"'+G.bizName+'"</strong>?</p></div>'+
  '<div class="cd"><div class="ci cio">💰</div><h2>Ingresos estimados</h2><p>Introduce importes sin IGIC repercutido. El simulador no liquida el impuesto; los regímenes y tipos varían según la operación.</p>'+
    '<div class="fg"><label>Ventas o servicios al mes</label><input type="number" id="f-sales" placeholder="200" min="0"></div>'+
    '<div class="fg"><label>Precio medio por venta (€)</label><input type="number" id="f-price" placeholder="25" min="0" step="0.5"></div>'+
    '<div class="bc" data-radix-estilo="r57"><button class="btn bs" data-radix-click="accion26">📊 Calcular previsiones</button></div></div>'+
  '<div id="projBox" class="hidden">'+
    '<div class="cd"><div class="ci cig">📈</div><h2>Resumen financiero</h2><div id="finSum"></div></div>'+
    '<div class="cd"><div class="ci cib">📅</div><h2>Previsión a 12 meses</h2><p data-radix-estilo="r58">Mes 1-3: arranque | Mes 4-8: crecimiento | Mes 9-12: estabilización</p><div class="tw" id="projTbl"></div></div>'+
  '</div>'+
  '<div class="dv"><span>Evento de mercado</span></div>'+
  '<div class="ev"><h3>🌡️ Ola de calor en julio</h3><p data-radix-estilo="r59">Reduce turismo un 20% durante 3 semanas.</p>'+
    makeOpts('heatEv',[
      {v:'A',ic:'🏷️',t:'Promoción residentes',d:'-5% margen, mantienes volumen'},
      {v:'B',ic:'📚',t:'Reformas y formación',d:'Pierdes ingresos, ganas valor'},
      {v:'C',ic:'⏳',t:'No hago nada',d:'Pierdes 20% ingresos'}
    ],'c3')+'</div>'+
  '<div id="t9fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion27">← Atrás</button><button class="btn bp" data-radix-click="accion28">Continuar a la Fase 10 →</button></div>';
}

function doProj(){
  var s=parseFloat(el('f-sales').value)||0;
  var p=parseFloat(el('f-price').value)||0;
  if(s<=0||p<=0)return;
  G.monthlySales=s;G.avgPrice=p;G.monthlyRevenue=s*p;
  G.monthlyProfit=G.monthlyRevenue-G.totalFixed-G.totalVariable;
  G.profitMargin=G.monthlyRevenue>0?((G.monthlyProfit/G.monthlyRevenue)*100):0;
  G.breakEven=p>0?Math.ceil((G.totalFixed+G.totalVariable)/p):0;
  el('projBox').classList.remove('hidden');
  var pc=G.monthlyProfit>=0?'cqp':'cqn';
  el('finSum').innerHTML='<div data-radix-estilo="r60">'+
    '<div class="al al-i" data-radix-estilo="r61"><span class="ai">💶</span><div><strong>Facturación</strong><br>'+fmt(G.monthlyRevenue)+' €/mes</div></div>'+
    '<div class="cq '+pc+'"><strong>Beneficio neto</strong><br>'+fmt(G.monthlyProfit)+' €/mes</div>'+
    '<div class="al al-i" data-radix-estilo="r62"><span class="ai">📊</span><div><strong>Margen</strong><br>'+G.profitMargin.toFixed(1)+'%</div></div>'+
    '<div class="al al-'+(G.breakEven<=s?'s':'d')+'" data-radix-estilo="r63"><span class="ai">'+(G.breakEven<=s?'✅':'⚠️')+'</span><div><strong>Equilibrio</strong><br>'+G.breakEven+' uds (vendes '+s+')</div></div></div>';
  var gr=[0.5,0.6,0.7,0.8,0.85,0.9,0.95,1.0,0.95,0.93,0.95,1.0];
  var cum=0;var rows='<table><tr><th>Mes</th><th>Ventas</th><th>Ingresos</th><th>Costes</th><th>Beneficio</th><th>Acumulado</th></tr>';
  for(var m=0;m<12;m++){
    var sv=Math.round(s*gr[m]);var rev=sv*p;var cost=G.totalFixed+G.totalVariable*gr[m];var prof=rev-cost;cum+=prof;
    var clr=prof>=0?'var(--suc)':'var(--dng)';
    var clr2=cum>=0?'var(--suc)':'var(--dng)';
    rows+='<tr><td>Mes '+(m+1)+'</td><td>'+sv+'</td><td>'+fmt(rev)+' €</td><td>'+fmt(cost)+' €</td><td data-radix-estilo="r64" data-radix-dinamico="'+radixEstiloDinamico([clr])+'">'+fmt(prof)+' €</td><td data-radix-estilo="r65" data-radix-dinamico="'+radixEstiloDinamico([clr2])+'">'+fmt(cum)+' €</td></tr>';
  }
  rows+='</table>';el('projTbl').innerHTML=rows;
}

function saveTurn9(){
  radixGuardarFormularioActual(G.turn);
  G.heatChoice=getOpt('heatEv');
  if(!G.heatChoice){el('t9fb').innerHTML='<div class="al al-w"><span class="ai">⚠️</span>Decide sobre la ola de calor.</div>';return;}
  doProj();
  if(G.heatChoice==='A'){G.profitMargin-=5;G.decisions.push({t:9,txt:'Promoción residentes → -5% margen',imp:0});}
  else if(G.heatChoice==='B'){G.bar+=3;G.decisions.push({t:9,txt:'Formación durante ola de calor → +3 barra',imp:3});}
  else{G.bar-=3;G.decisions.push({t:9,txt:'No hiciste nada → -3 barra',imp:-3});}
  if(G.monthlyProfit>0){G.bar+=5;G.decisions.push({t:9,txt:'Previsiones con beneficio → +5',imp:5});}
  else{G.bar-=8;G.decisions.push({t:9,txt:'Previsiones con pérdidas → -8 ⚠️',imp:-8});}
  goTurn10();
  radixRestaurarFormulario(G.turn);
}

/* ════════════════════════════════════════════════════════════
   FASE 10 — LEGAL Y SOSTENIBILIDAD
   ════════════════════════════════════════════════════════════ */
function goTurn10(){
  G.planScreen='phase10';
  G.turn=10;refreshDash();radixActualizarCodigoUI();goTop();
  var nc=!G.workAlone&&G.numWorkers>0;
  area().innerHTML=turnImg(10)+
  '<div class="bn"><h2>Fase 10 — Legal y Sostenibilidad</h2>'+
    '<p>Última Fase, <strong>'+G.name+'</strong>. Asegurémonos de que <strong>"'+G.bizName+'"</strong> cumple la normativa.</p>'+
    '<p data-radix-estilo="r66"><strong class="hl">⚡ FASE DECISIVA — Cada trámite no cubierto penaliza.</strong></p></div>'+
  '<div class="cd"><div class="ci cio">⚖️</div><h2>Cumplimiento legal</h2>'+
    '<div class="tw"><table><tr><th>Trámite</th><th>Estado</th></tr>'+
      '<tr><td>Alta de autónomo o empresa</td><td><select id="lg-alta"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>'+
      '<tr><td>Alta en el IGIC</td><td><select id="lg-igic"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>'+
      (nc?'<tr><td>Contratos trabajadores</td><td><select id="lg-cont"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>':'')+
      '<tr><td>Licencias municipales</td><td><select id="lg-lic"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>'+
      '<tr><td>Protección de datos (LOPD/RGPD)</td><td><select id="lg-lopd"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>'+
      '<tr><td>Prevención riesgos laborales</td><td><select id="lg-prl"><option value="si">✅ En regla</option><option value="tramite">🔄 En trámite</option><option value="no">❌ No</option></select></td></tr>'+
    '</table></div></div>'+
  '<div class="cd"><div class="ci cig">🌱</div><h2>Sostenibilidad e impacto social</h2>'+
    '<div class="fg"><label>¿Materiales o procesos sostenibles?</label><textarea id="f-sust" placeholder="Envases eco, proveedores locales..."></textarea></div>'+
    '<div class="fg"><label>Impacto ambiental del negocio</label><textarea id="f-env" placeholder="¿Residuos? ¿Energía? ¿Cómo minimizarlo?"></textarea></div>'+
    '<div class="fg"><label>¿Empleo local o inclusión social?</label>'+makeOpts('localEmp',[
      {v:'si',ic:'🤝',t:'Sí',d:'Contrataré ' + G.islandAdjective + 's locales'},
      {v:'parcial',ic:'🌱',t:'Parcialmente',d:'Cuando crezca'},
      {v:'no',ic:'👤',t:'No directamente'}
    ],'c3')+'</div>'+
    '<div class="fg"><label>¿Digitalización?</label>'+makeOpts('digi',[
      {v:'si',ic:'💻',t:'Totalmente',d:'Web, redes, gestión digital'},
      {v:'parcial',ic:'📱',t:'Parcialmente'},
      {v:'no',ic:'📋',t:'No, todo manual'}
    ],'c3')+'</div></div>'+
  '<div id="t10fb"></div>'+
  '<div class="bc"><button class="btn bs" data-radix-click="accion29">← Atrás</button><button class="btn bp" data-radix-estilo="r67" data-radix-click="accion30">🏆 Ver mi plan de negocio →</button></div>';
  radixRestaurarFormulario(G.turn);
}

function saveTurn10(){
  radixGuardarFormularioActual(G.turn);
  if(G._turn10Saved) return; // evita doble ejecución por doble clic → evita PDF de Canvas duplicado
  G._turn10Saved = true;
  var lgIds=['lg-alta','lg-igic','lg-cont','lg-lic','lg-lopd','lg-prl'];
  var pen=0;
  for(var i=0;i<lgIds.length;i++){
    var e=el(lgIds[i]);if(e){var v=e.value;if(v==='no'){pen++;G.bar-=5;}else if(v==='tramite'){pen+=0.5;G.bar-=2;}G.legal[lgIds[i].replace('lg-','')]=v;}
  }
  if(pen>0){G.decisions.push({t:10,txt:pen+' trámites no cubiertos → -'+Math.round(pen*5)+' barra',imp:-Math.round(pen*5)});}
  else{G.bar+=5;G.decisions.push({t:10,txt:'Todos los trámites en regla → +5',imp:5});}
  G.sustainable=el('f-sust')?el('f-sust').value.trim():'';
  G.envImpact=el('f-env')?el('f-env').value.trim():'';
  G.localEmploy=getOpt('localEmp');G.digitalize=getOpt('digi');
  if(G.localEmploy==='si'){G.bar+=3;G.reputation+=5;}
  if(G.digitalize==='si')G.bar+=2;
  refreshDash();goPlanCanvas();
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   PDF + GOOGLE DRIVE — almacenamiento automático por partida
   ════════════════════════════════════════════════════════════ */
var DRIVE_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzEpmqg9tcE34tjHbG7fLxWTWyGHpV6ULOnU2HSnDCDMl0I4EnStanER1eTTcKnMTTE/exec';
var RADIX_DRIVE_TOKEN = 'RADIX7_2026_GUARDADO_PDFS_8f4K2m9Q';

function radixGenerarNuevoCodigo(){
  var codigo='';
  try{
    if(window.crypto && window.crypto.getRandomValues){
      var bytes=new Uint8Array(6);
      window.crypto.getRandomValues(bytes);
      var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      for(var i=0;i<6;i++) codigo+=chars.charAt(bytes[i]%chars.length);
    }
  }catch(e){}
  if(codigo.length!==6) codigo=Math.random().toString(36).slice(2,8).toUpperCase();
  return 'RADIX-'+codigo;
}

// Cada vez que se abre el videojuego se genera un código nuevo.
var RADIX_PARTIDA_ID = radixGenerarNuevoCodigo();
// Elimina la copia local creada por versiones anteriores; ya no se usa.
try{localStorage.removeItem('RADIX_PARTIDA_BACKUP');}catch(e){}

function radixNuevaSimulacion(){
  location.reload();
}

function radixActualizarCodigoUI(){
  var box=el('radixPartidaCode');
  if(box) box.textContent=RADIX_PARTIDA_ID;
  var bar=el('radixSaveBar');
  if(bar) radixFijarEstilo(bar,'display',(G.turn>=1)?'flex':'none');
}

function radixInstalarComportamientoMovilGuardado(){
  if(window._radixMobileSaveScrollInstalled)return;
  window._radixMobileSaveScrollInstalled=true;
  var ultimaY=Math.max(0,window.pageYOffset||0),direccion=0,distancia=0;
  window.addEventListener('scroll',function(){
    var barra=el('radixSaveBar');
    if(!barra)return;
    var esMovil=window.matchMedia&&window.matchMedia('(max-width: 768px)').matches;
    var y=Math.max(0,window.pageYOffset||0);
    if(!esMovil||y<36){barra.classList.remove('is-scroll-hidden');ultimaY=y;direccion=0;distancia=0;return;}
    var delta=y-ultimaY;ultimaY=y;
    if(Math.abs(delta)<1)return;
    var nuevaDireccion=delta>0?1:-1;
    if(nuevaDireccion!==direccion){direccion=nuevaDireccion;distancia=0;}
    distancia+=Math.abs(delta);
    if(distancia>=8){
      if(direccion>0)barra.classList.add('is-scroll-hidden');
      else barra.classList.remove('is-scroll-hidden');
    }
  },{passive:true});
  window.addEventListener('resize',function(){
    if(!window.matchMedia||!window.matchMedia('(max-width: 768px)').matches){
      var barra=el('radixSaveBar');if(barra)barra.classList.remove('is-scroll-hidden');
    }
  });
}

function radixGuardarFormularioActual(turn){
  if(!turn || !area() || G.simulationStarted || (turn===10 && G.planScreen && G.planScreen!=='phase10')) return;
  if(!G._pageStates) G._pageStates={};
  var state={fields:{},options:{},blocks:{}};
  var root=area();
  var fields=root.querySelectorAll('input,select,textarea');
  for(var i=0;i<fields.length;i++){
    var e=fields[i];
    if(!e.id) continue;
    state.fields[e.id]={
      value:e.value,
      checked:!!e.checked,
      selectedIndex:(typeof e.selectedIndex==='number'?e.selectedIndex:-1),
      className:e.className
    };
  }
  var opts=root.querySelectorAll('[data-picked]');
  for(var j=0;j<opts.length;j++){
    if(opts[j].id) state.options[opts[j].id]=opts[j].getAttribute('data-picked')||'';
  }
  var ids=root.querySelectorAll('[id]');
  for(var k=0;k<ids.length;k++){
    var b=ids[k];
    if(b.id && b.className) state.blocks[b.id]=String(b.className);
  }
  G._pageStates[String(turn)]=state;
}

function radixRestaurarFormulario(turn){
  if(!G._pageStates || !G._pageStates[String(turn)]) return;
  var state=G._pageStates[String(turn)];
  var id,e,f;

  if(state.fields){
    for(id in state.fields){
      if(!Object.prototype.hasOwnProperty.call(state.fields,id)) continue;
      e=el(id); f=state.fields[id];
      if(!e) continue;
      if(typeof f.value!=='undefined') e.value=f.value;
      if('checked' in f) e.checked=!!f.checked;
      if(typeof f.selectedIndex==='number' && f.selectedIndex>=0 && typeof e.selectedIndex==='number') e.selectedIndex=f.selectedIndex;
      if(typeof f.className==='string') e.className=f.className;
    }
  }

  // Las propuestas se crean dinámicamente. Hay que recrearlas antes de
  // restaurar la opción elegida al volver a la fase 2.
  if(Number(turn)===2 && state.options && state.options.bizName && el('nameOpts')){
    var tipo=el('bizType');
    if(tipo && state.options.bizType) tipo.setAttribute('data-picked',state.options.bizType);
    genNames();
  }

  if(state.options){
    for(id in state.options){
      if(!Object.prototype.hasOwnProperty.call(state.options,id)) continue;
      e=el(id); if(!e) continue;
      e.setAttribute('data-picked',state.options[id]||'');
      var vals=(state.options[id]||'').split(',');
      var all=e.querySelectorAll('.op');
      for(var i=0;i<all.length;i++){
        var v=all[i].getAttribute('data-v');
        if(vals.indexOf(v)>=0) all[i].classList.add('sel');
        else all[i].classList.remove('sel');
      }
    }
  }

  // Compatibilidad con guardados antiguos sin instantánea del campo.
  if(Number(turn)===2 && el('f-custom') &&
     (!state.fields || !state.fields['f-custom']) &&
     (!state.options || !state.options.bizName) && G.bizName){
    el('f-custom').value=G.bizName;
  }

  if(state.blocks){
    for(id in state.blocks){
      if(!Object.prototype.hasOwnProperty.call(state.blocks,id)) continue;
      e=el(id);
      if(e && typeof state.blocks[id]==='string') e.className=state.blocks[id];
    }
  }

  if(radixModoAyuntamientoSolicitado()){
    if(Number(turn)===5){if(el('empBox'))el('empBox').classList.remove('hidden');doSS();}
    if(Number(turn)===6 && el('mktBudgetBox'))radixFijarEstilo(el('mktBudgetBox'),'display',G.doMarketing?'block':'none');
    if(Number(turn)===7){if(el('loanBox'))el('loanBox').classList.remove('hidden');doLoan();doTotal();}
    if(Number(turn)===8)doCosts();
    if(Number(turn)===9)doProj();
  }
}

function radixEstadoGuardable(){
  var estado={};
  for(var k in G){
    if(!Object.prototype.hasOwnProperty.call(G,k)) continue;
    if(k==='imgs') continue;
    estado[k]=G[k];
  }
  return estado;
}

var RADIX_AUTO_SAVE_TIMER=null;
var RADIX_SAVE_DIRTY=false;
var RADIX_SAVE_PENDING=null;
var RADIX_SAVE_ACTIVE=false;
var RADIX_SAVE_COMPLETION=Promise.resolve();
var RADIX_LOAD_REQUEST=0;

function radixProgramarAutoGuardado(){
  if(!G || G.turn<1) return;
  RADIX_SAVE_DIRTY=true;
  var status=el('radixSaveStatus');
  if(status) status.textContent='Guardando…';
  clearTimeout(RADIX_AUTO_SAVE_TIMER);
  // Agrupa las pulsaciones mientras se escribe; los cambios de pantalla
  // se guardan inmediatamente mediante radixAutoGuardarAhora().
  RADIX_AUTO_SAVE_TIMER=setTimeout(function(){
    RADIX_AUTO_SAVE_TIMER=null;
    radixGuardarPartida();
  },800);
}

function radixInstalarAutoGuardado(){
  if(window._radixAutoGuardadoInstalado) return;
  window._radixAutoGuardadoInstalado=true;
  document.addEventListener('input',radixProgramarAutoGuardado,true);
  document.addEventListener('change',radixProgramarAutoGuardado,true);
}

function radixAutoGuardarAhora(){
  if(G.turn<1) return;
  clearTimeout(RADIX_AUTO_SAVE_TIMER);
  RADIX_AUTO_SAVE_TIMER=null;
  radixGuardarPartida();
}

function radixConsultarPartida(codigo, timeoutMs, action, nonce){
  return new Promise(function(resolve,reject){
    var callback='radixRespuesta_'+(++RADIX_LOAD_REQUEST);
    var script=document.createElement('script');
    var terminado=false;
    var timer=setTimeout(function(){
      terminar(new Error('La consulta a Google Drive ha tardado demasiado. Comprueba la conexión y el despliegue de Apps Script.'));
    },timeoutMs||20000);
    function terminar(error,data){
      if(terminado) return;
      terminado=true;
      clearTimeout(timer);
      if(script.parentNode) script.parentNode.removeChild(script);
      try{delete window[callback];}catch(e){window[callback]=undefined;}
      if(error) reject(error); else resolve(data);
    }
    window[callback]=function(data){terminar(null,data);};
    script.addEventListener('error',function(){
      terminar(new Error('La consulta de comprobación no recibió respuesta de Apps Script.'));
    });
    script.addEventListener('load',function(){
      // onload también se dispara si el servidor respondió con HTML o JSON
      // que no ejecutó nuestro callback de JSONP.
      if(!terminado) terminar(new Error('Apps Script respondió sin una respuesta JSONP válida.'));
    });
    var accion=action||'loadGame';
    script.src=DRIVE_WEB_APP_URL+'?action='+encodeURIComponent(accion)+
      '&partidaId='+encodeURIComponent(codigo)+
      (nonce?'&nonce='+encodeURIComponent(nonce):'')+
      '&callback='+callback+'&_='+Date.now();
    document.head.appendChild(script);
  });
}

function radixIrAFase(numero){
  var funciones={1:goTurn1,2:goTurn2,3:goTurn3,4:goTurn4,
    5:goTurn7,6:goTurn8,7:goTurn5,8:goTurn6,9:goTurn9,10:goTurn10};
  if(!funciones[numero]) throw new Error('Fase desconocida: '+numero);
  funciones[numero]();
}

function radixVolverFase(turnActual){
  // Guardamos la fase actual, pero la navegación hacia atrás es inmediata.
  try{ radixGuardarFormularioActual(turnActual); }catch(e){}

  var anteriores={2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8,10:9};
  var destino=anteriores[turnActual];
  if(!destino) return;
  radixIrAFase(destino);
  try{ radixRestaurarFormulario(destino); }catch(e){}
  try{ radixGuardarPartida(); }catch(e){}
}

function radixGuardarPartida(){
  if(!G || G.turn<1) return Promise.resolve();
  clearTimeout(RADIX_AUTO_SAVE_TIMER);
  RADIX_AUTO_SAVE_TIMER=null;
  try{radixGuardarFormularioActual(G.turn);}catch(e){}
  var estado=radixEstadoGuardable();
  estado._radixSaveNonce=Date.now()+'-'+Math.random().toString(36).slice(2);
  RADIX_SAVE_PENDING={partidaId:RADIX_PARTIDA_ID,estado:estado};
  RADIX_SAVE_DIRTY=false;
  var status=el('radixSaveStatus');
  if(status) status.textContent='Guardando…';

  if(!RADIX_SAVE_ACTIVE){
    RADIX_SAVE_ACTIVE=true;
    RADIX_SAVE_COMPLETION=Promise.resolve().then(radixProcesarGuardados);
  }
  return RADIX_SAVE_COMPLETION;
}

async function radixConfirmarGuardado(trabajo){
  var ultimoError=null;
  for(var intento=0;intento<3;intento++){
    if(RADIX_SAVE_PENDING) return false;
    try{
      // La nueva versión de Apps Script devuelve únicamente true/false.
      var respuesta=await radixConsultarPartida(
        trabajo.partidaId,12000,'checkGame',trabajo.estado._radixSaveNonce
      );
      if(respuesta && respuesta.action==='checkGame'){
        if(respuesta.ok && respuesta.confirmed===true) return true;
        throw new Error((respuesta&&respuesta.error)||'Drive aún no muestra este guardado.');
      }
      // Compatibilidad temporal con el Apps Script anterior.
      var antigua=await radixConsultarPartida(trabajo.partidaId,15000);
      if(antigua && antigua.ok && antigua.estado &&
         antigua.estado._radixSaveNonce===trabajo.estado._radixSaveNonce) return true;
      throw new Error((antigua&&antigua.error)||(respuesta&&respuesta.error)||
        'Drive aún no muestra este guardado.');
    }catch(e){
      ultimoError=e;
    }
    if(RADIX_SAVE_PENDING) return false;
    if(intento<2){
      await new Promise(function(resolve){setTimeout(resolve,600*(intento+1));});
    }
  }
  throw ultimoError||new Error('Drive no confirmó el guardado.');
}

async function radixProcesarGuardados(){
  try{
    while(RADIX_SAVE_PENDING){
      // Conserva solo el estado más nuevo mientras hay una petición activa.
      var trabajo=RADIX_SAVE_PENDING;
      RADIX_SAVE_PENDING=null;
      var status=el('radixSaveStatus');
      try{
        // La respuesta no-cors es opaca; se comprueba después con JSONP.
        await fetch(DRIVE_WEB_APP_URL,{
          method:'POST',
          mode:'no-cors',
          headers:{'Content-Type':'text/plain;charset=utf-8'},
          body:JSON.stringify({
            action:'saveGame',
            token:RADIX_DRIVE_TOKEN,
            partidaId:trabajo.partidaId,
            estado:trabajo.estado
          })
        });
        // Si ya hay cambios posteriores, enviarlos antes de comprobar Drive.
        if(RADIX_SAVE_PENDING) continue;
        var confirmado=await radixConfirmarGuardado(trabajo);
        if(RADIX_SAVE_PENDING) continue;
        if(!confirmado) throw new Error('Google Drive no confirmó este guardado.');
        if(status && !RADIX_SAVE_DIRTY) status.textContent='✓ Guardado en Google Drive';
      }catch(e){
        console.error('Guardado RADIX:',e);
        if(status && !RADIX_SAVE_PENDING && !RADIX_SAVE_DIRTY){
          status.textContent='⚠️ Drive no confirmó este guardado. Pulsa Guardar ahora para reintentar.';
        }
      }
    }
  }finally{
    RADIX_SAVE_ACTIVE=false;
    if(RADIX_SAVE_PENDING){
      RADIX_SAVE_ACTIVE=true;
      RADIX_SAVE_COMPLETION=radixProcesarGuardados();
    }
  }
}

async function radixCargarPartida(codigo){
  var code=String(codigo||'').trim().toUpperCase();
  if(!/^RADIX-[A-Z0-9]{6}$/.test(code)){
    radixMostrarErrorCarga('El código debe tener el formato RADIX-XXXXXX.');
    return;
  }

  var btn=el('radixLoadBtn');
  if(btn){btn.disabled=true;btn.textContent='Cargando…';}
  try{
    var data=await radixConsultarPartida(code,20000);
    if(!data || !data.ok){
      throw new Error((data&&data.error)||'El servidor no devolvió una partida válida.');
    }
    var estado=data.estado;
    if(!estado || typeof estado!=='object' || Array.isArray(estado)){
      throw new Error('El archivo de la partida no contiene un estado válido.');
    }
    for(var k in estado){
      if(Object.prototype.hasOwnProperty.call(estado,k) && k!=='imgs') G[k]=estado[k];
    }
    if(estado.simScreen==='yearlyForecast' && typeof estado.yearlyForecastTaxApplied!=='boolean') G.yearlyForecastTaxApplied=true;
    if(!G.simulationStarted && Number(G.simMonth)>=1 && Array.isArray(G.weekQuestions) && G.weekQuestions.length){
      G.simulationStarted=true;
    }
    RADIX_PARTIDA_ID=code;
    radixActualizarCodigoUI();
    try{
      radixReanudarPartida();
    }catch(e){
      throw new Error('La partida se descargó, pero falló al abrir la pantalla: '+(e&&e.message||e));
    }
  }catch(e){
    console.error('Carga RADIX:',e);
    radixMostrarErrorCarga((e&&e.message)||'No se pudo cargar la partida.');
  }finally{
    if(btn){btn.disabled=false;btn.textContent='📂 Continuar partida →';}
  }
}

function radixMostrarErrorCarga(msg){
  var box=el('radixLoadError');
  if(!box) return;
  var aviso=document.createElement('div');
  aviso.className='al al-w';
  var icono=document.createElement('span');
  icono.className='ai';
  icono.textContent='⚠️';
  aviso.appendChild(icono);
  aviso.appendChild(document.createTextNode(String(msg)));
  box.textContent='';
  box.appendChild(aviso);
}

function radixReanudarPartida(){
  // Si la partida ya estaba en la simulación de preguntas, se recupera
  // exactamente esa pantalla y semana, en lugar de volver al Plan de Negocio.
  if(G.simulationStarted && G.simMonth>=1){
    // Guardados anteriores no tenían una marca de 'semana resuelta'.
    // Si conservan una respuesta, preguntamos antes de repetir su impacto.
    if(G.simScreen==='week' && !G.weekProgress){
      var anterior=G._pageStates && G._pageStates['10'];
      var opcion=anterior && anterior.options && anterior.options.weekEv;
      if(opcion!==undefined && opcion!==''){
        G.weekProgress={month:G.simMonth,week:G.simWeek,opened:true,
          selected:String(opcion),resolved:false,feedbackHtml:'',legacyUncertain:true};
      }
    }
    if(G.simScreen==='monthSummary'){
      showMonthSummary();
    }else if(G.simScreen==='yearlyForecast'){
      showYearlyForecast();
    }else{
      showWeek();
    }
    return;
  }
  if(G.turn===10 && (G.planScreen==='simIntro')){
    goSimIntro();
    return;
  }
  if(G.turn===10 && (G.planScreen==='canvas' || (!G.planScreen && G._turn10Saved))){
    goPlanCanvas();
    return;
  }
  if(G.turn>=1 && G.turn<=10){
    radixIrAFase(G.turn);
    radixRestaurarFormulario(G.turn);
    return;
  }
  if(G.turn===0){
    goTurn0();
  }
}

radixInstalarAutoGuardado();
radixInstalarComportamientoMovilGuardado();

function radixPdfReady(){
  return window.html2canvas && window.jspdf && window.jspdf.jsPDF;
}

function radixWait(ms){ return new Promise(function(resolve){setTimeout(resolve,ms||500);}); }

async function generarPDFActual(tipo, nombreArchivo, orientacion){
  if(!radixPdfReady()) throw new Error('No se han cargado las librerías de PDF. Comprueba la conexión a Internet.');
  await radixWait(700);
  var source=document.getElementById('gameArea');
  if(!source) throw new Error('No se encontró el contenido del documento.');

  var clone=source.cloneNode(true);
  clone.querySelectorAll('.no-print,button,#radixPdfStatus').forEach(function(e){e.remove();});
  clone.classList.add('radix-pdf-clone', orientacion==='landscape'?'radix-pdf-apaisado':'radix-pdf-vertical');
  // Copiar el contenido dibujado de los <canvas> (Chart.js, etc.), ya que
  // cloneNode() clona el elemento pero NO copia los píxeles ya pintados.
  var origCanvases=source.querySelectorAll('canvas');
  var cloneCanvases=clone.querySelectorAll('canvas');
  for(var ci=0;ci<origCanvases.length;ci++){
    var oc=origCanvases[ci], cc=cloneCanvases[ci];
    if(oc && cc && oc.width>0 && oc.height>0){
      try{ cc.getContext('2d').drawImage(oc,0,0,oc.width,oc.height,0,0,cc.width,cc.height); }
      catch(chartErr){ console.warn('No se pudo copiar un gráfico al PDF:',chartErr); }
    }
  }
  document.body.appendChild(clone);

  try{
    var canvas=await html2canvas(clone,{scale:2,useCORS:true,allowTaint:false,backgroundColor:'#fff',logging:false,windowWidth:clone.scrollWidth});
    var jsPDF=window.jspdf.jsPDF;
    var pdf=new jsPDF({orientation:orientacion==='landscape'?'landscape':'portrait',unit:'mm',format:'a4',compress:true});
    var pageW=orientacion==='landscape'?297:210;
    var pageH=orientacion==='landscape'?210:297;
    var margin=8;
    var usableW=pageW-margin*2;
    var imgW=canvas.width;
    var imgH=canvas.height;
    // El Canvas debe mantenerse unido; el resto de documentos conservan un tamaño legible.
    var ratio=tipo==='canvas' ? Math.min(usableW/imgW,(pageH-margin*2)/imgH) : usableW/imgW;
    var pagePx=Math.ceil((pageH-margin*2)/ratio);
    var lineas=[], bloques=[];
    if(tipo!=='canvas'){
      var base=clone.getBoundingClientRect().top;
      var escala=imgH/clone.getBoundingClientRect().height;
      clone.querySelectorAll('.cd, canvas, tr').forEach(function(elemento){
        var rect=elemento.getBoundingClientRect();
        var inicio=(rect.top-base)*escala, fin=(rect.bottom-base)*escala;
        if(rect.height>0 && fin-inicio<pagePx) bloques.push({inicio:inicio,fin:fin});
      });
      // Mantener cada título junto al comienzo de su contenido.
      clone.querySelectorAll('h1,h2,h3,h4').forEach(function(titulo){
        var rect=titulo.getBoundingClientRect();
        if(rect.height>0) bloques.push({inicio:(rect.top-base)*escala,fin:(rect.bottom-base+80)*escala});
      });
      var walker=document.createTreeWalker(clone,NodeFilter.SHOW_TEXT);
      while(walker.nextNode()){
        var nodo=walker.currentNode;
        if(!nodo.nodeValue.trim()) continue;
        var rango=document.createRange(); rango.selectNodeContents(nodo);
        Array.from(rango.getClientRects()).forEach(function(rect){
          if(rect.height>0) lineas.push({inicio:(rect.top-base)*escala,fin:(rect.bottom-base)*escala});
        });
      }
    }
    var y=0, page=0;
    while(y<imgH){
      var limite=Math.min(y+pagePx,imgH);
      if(limite<imgH){
        // No cortar una línea de texto entre dos páginas.
        var anterior;
        do {
          anterior=limite;
          bloques.forEach(function(bloque){
            if(bloque.inicio>y+1 && bloque.inicio<limite && bloque.fin>limite) limite=Math.floor(bloque.inicio);
          });
          lineas.forEach(function(linea){if(linea.inicio<limite && linea.fin>limite) limite=Math.floor(linea.inicio);});
        } while(limite<anterior && limite>y);
        if(limite<=y) limite=Math.min(y+pagePx,imgH);
      }
      var sliceH=limite-y;
      var slice=document.createElement('canvas');
      slice.width=imgW; slice.height=sliceH;
      var ctx=slice.getContext('2d');
      ctx.fillStyle='#fff'; ctx.fillRect(0,0,imgW,sliceH);
      ctx.drawImage(canvas,0,y,imgW,sliceH,0,0,imgW,sliceH);
      if(page>0) pdf.addPage();
      pdf.addImage(slice.toDataURL('image/jpeg',0.92),'JPEG',margin+(usableW-imgW*ratio)/2,margin,imgW*ratio,sliceH*ratio,undefined,'FAST');
      y+=sliceH; page++;
    }
    var blob=pdf.output('blob');
    return {blob:blob,nombre:nombreArchivo,id:RADIX_PARTIDA_ID};
  }finally{
    clone.remove();
  }
}

// Solo se comparten envíos simultáneos. Una respuesta opaca no confirma el guardado.
var RADIX_PDF_ENVIOS = {};
function radixLeerPDFBase64(blob){
  return new Promise(function(resolve,reject){
    var reader=new FileReader();
    reader.onload=function(){
      if(typeof reader.result!=='string' || reader.result.indexOf(',')<0){ reject(new Error('No se pudo leer el PDF.')); return; }
      resolve(reader.result.split(',')[1]);
    };
    reader.onerror=function(){reject(reader.error || new Error('No se pudo leer el PDF.'));};
    reader.onabort=function(){reject(new Error('Se interrumpió la lectura del PDF.'));};
    reader.readAsDataURL(blob);
  });
}
async function guardarPDFEnDrive(tipo,nombreArchivo,orientacion,descargarLocal){
  var resultado=await generarPDFActual(tipo,nombreArchivo,orientacion);
  if(descargarLocal !== false){
    var url=URL.createObjectURL(resultado.blob);
    var a=document.createElement('a');
    a.href=url; a.download=nombreArchivo; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},3000);
  }
  if(!DRIVE_WEB_APP_URL || DRIVE_WEB_APP_URL.indexOf('PEGAR_AQUI')===0){
    resultado.drive='no-configurado';
    return resultado;
  }
  var clave=resultado.id+':'+tipo;
  if(!RADIX_PDF_ENVIOS[clave]){
    RADIX_PDF_ENVIOS[clave]=(async function(){
      var base64=await radixLeerPDFBase64(resultado.blob);
      var respuesta=await fetch(DRIVE_WEB_APP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({
        token:RADIX_DRIVE_TOKEN,partidaId:resultado.id,tipo:tipo,nombre:resultado.nombre,mimeType:'application/pdf',base64:base64
      })});
      if(respuesta.type!=='opaque' && !respuesta.ok) throw new Error('El servidor rechazó el envío.');
      // no-cors no permite comprobar si Apps Script guardó el fichero.
      return 'sin-confirmacion';
    })();
  }
  var envio=RADIX_PDF_ENVIOS[clave];
  try{ resultado.drive=await envio; }
  catch(error){ resultado.drive='error'; resultado.errorDrive=error; }
  finally{ if(RADIX_PDF_ENVIOS[clave]===envio) delete RADIX_PDF_ENVIOS[clave]; }
  return resultado;
}

function avisarPDF(texto){
  var box=document.getElementById('radixPdfStatus');
  if(box) box.textContent=texto;
}

function radixMensajePDF(resultado){
  if(resultado.drive==='error') return 'Descarga iniciada. No se pudo enviar el PDF a Drive; puedes intentarlo de nuevo.';
  if(resultado.drive==='sin-confirmacion') return 'Descarga iniciada. El envío a Drive no ofrece confirmación de guardado.';
  return 'Descarga iniciada. Drive no está configurado.';
}

async function guardarPDFAutomatico(tipo,nombreArchivo,orientacion){
  if(!DRIVE_WEB_APP_URL || DRIVE_WEB_APP_URL.indexOf('PEGAR_AQUI')===0) return;
  try{ var resultado=await guardarPDFEnDrive(tipo,nombreArchivo,orientacion,false); if(resultado.drive==='error') console.warn('No se pudo enviar el PDF a Drive:',resultado.errorDrive); }
  catch(e){ console.warn('Guardado automático PDF:',tipo,e); }
}

async function guardarPDFPrevision(){
  try{avisarPDF('Generando y guardando la previsión…');var r=await guardarPDFEnDrive('prevision','01_Previsión_Anual.pdf','portrait');avisarPDF(radixMensajePDF(r));}
  catch(e){console.error(e);avisarPDF('No se pudo generar la previsión: '+e.message);}
}

async function guardarPDFCanvas(){
  try{avisarPDF('Generando y guardando el Canvas…');var r=await guardarPDFEnDrive('canvas','02_Business_Model_Canvas.pdf','landscape');avisarPDF(radixMensajePDF(r));}
  catch(e){console.error(e);avisarPDF('No se pudo generar el Canvas: '+e.message);}
}

async function guardarPDFPlanFinal(){
  try{avisarPDF('Generando y guardando el Plan de Negocio…');var r=await guardarPDFEnDrive('plan_final','03_Plan_de_Negocio_Final.pdf','portrait');avisarPDF(radixMensajePDF(r));}
  catch(e){console.error(e);avisarPDF('No se pudo generar el plan: '+e.message);}
}

function goPlanCanvas(){
  var modoAyuntamiento=radixModoAyuntamientoSolicitado();
  G.planScreen='canvas';
  G.turn=10;
  if(modoAyuntamiento){refreshDash();radixActualizarCodigoUI();}
  goTop();
  var tc=G.totalFixed||0,tv=G.totalVariable||0,ingr=G.monthlyRevenue||0,ben=G.monthlyProfit||0;
  var annualProfit=ben*12;
  if(G.monthlySales&&G.avgPrice){
    var grA=[0.5,0.6,0.7,0.8,0.85,0.9,0.95,1.0,0.95,0.93,0.95,1.0];
    var cumA=0;
    for(var mA=0;mA<12;mA++){
      var svA=Math.round(G.monthlySales*grA[mA]);
      var flujoA=(svA*G.avgPrice)-(tc+tv*grA[mA]);
      cumA+=flujoA;
    }
    annualProfit=cumA;
  }
  var sector={comercio:'Comercio / Tienda',restauracion:'Restauración / Hostelería',servicios:'Servicios',turismo:'Turismo',tecnologia:'Tecnología / Digital',artesania:'Artesanía',agricultura:'Agricultura / Alimentación'}[G.bizType]||G.bizType||'—';
  var forma=G.legalFormLabel||'—';
  var mktEstr={A:'Instagram / Redes Sociales',B:'Radio local',C:G.localMedia||'Periódico local',D:'Evento de apertura',E:'Coche con altavoz'}[G.marketingChoice]||'—';

  // CSS de impresión inyectado en el head (genérico: aplica a cualquier pantalla, ocultando solo lo marcado como .no-print)
  document.body.classList.add('radix-print');

  var h=
  '<div data-radix-estilo="r68">'+
  '<div class="no-print" data-radix-estilo="r69">'+
    '<h2 data-radix-estilo="r70">📋 Business Model Canvas</h2><p data-radix-estilo="r71">Plan de negocio de <strong>'+G.bizName+'</strong></p>'+
  '</div>'+

  // CABECERA imprimible
  '<div data-radix-estilo="r72">'+
    '<div data-radix-estilo="r73">Business Model Canvas</div>'+
    '<div data-radix-estilo="r74">'+G.bizName+'</div>'+
    '<div data-radix-estilo="r75">'+sector+' · '+forma+' · '+G.name+'</div>'+
  '</div>'+

  // FILA 1: Socios clave | Actividades clave | Propuesta de valor | Relación con clientes | Segmento clientes
  '<div class="canvas-wrap canvas-row1" data-radix-estilo="r76">'+
    cBlock('🤝','1. Socios clave',
      '¿Con quién colaboras?\n\n'+(G.collabs||'—')+'\n\nCanales de marketing: '+mktEstr,
      '#E3F2FD','#1565C0')+
    '<div class="canvas-pair" data-radix-estilo="r77">'+
      cBlock('⚙️','2. Actividades clave',
        'Forma jurídica: '+forma+'\n'+
        'Horario: '+(G.schedule||'—')+'\n'+
        'Apertura: '+(G.openingPromo||'—'),
        '#E8F5E9','#2E7D32')+
      cBlock('🧠','3. Recursos clave',
        'Capital inicial: '+fmt(G.capital)+' €\n'+
        'Inversión total: '+fmt(G.totalInvestment||0)+' €\n'+
        'Equipo: '+(G.workAlone?'Solo/a':G.numWorkers+' empleado/s')+'\n'+
        (G.workerSalary?'Salario/empleado: '+fmt(G.workerSalary)+' €':''),
        '#E8F5E9','#2E7D32')+
    '</div>'+
    '<div class="canvas-value">'+cBlock('💡','4. Propuesta de valor',
      G.bizDesc||G.bizName||'—',
      '#FFF8E1','#E65100',true)+'</div>'+
    '<div class="canvas-pair" data-radix-estilo="r78">'+
      cBlock('❤️','5. Relación clientes',
        'Perfil: '+(G.targetDesc||'—')+'\n'+
        'Edad: '+(G.targetAge||'—')+'\n'+
        'Ingresos: '+(G.targetIncome||'—'),
        '#FCE4EC','#880E4F')+
      cBlock('📢','6. Canales',
        'Estrategia: '+mktEstr+'\n'+
        'Presupuesto mkt: '+fmt(G.marketingBudget||0)+' €/mes\n'+
        (G.openingPromo?'Apertura: '+G.openingPromo:''),
        '#FCE4EC','#880E4F')+
    '</div>'+
    cBlock('👥','7. Segmento de clientes',
      'Tipo: '+(G.targetType||'—')+'\n'+
      'Zona: '+(G.targetZone||'—')+'\n'+
      'Necesidad: '+(G.targetNeeds||'—'),
      '#EDE7F6','#4527A0')+
  '</div>'+

  // FILA 2: Estructura de costes | Flujos de ingresos
  '<div class="canvas-wrap canvas-row2" data-radix-estilo="r79">'+
    cBlock('💸','8. Estructura de costes',
      'Costes fijos/mes: '+fmt(tc)+' €\n'+
      'Costes variables/mes: '+fmt(tv)+' €\n'+
      'Total mensual: '+fmt(tc+tv)+' €\n\n'+
      'Principales:\n'+
      '· Alquiler: '+fmt(G.monthlyRent||0)+' €/mes\n'+
      '· SS autónomo: '+fmt(G.ssCost||0)+' €/mes\n'+
      (G.numWorkers?'· SS empleados: '+fmt(G.ssEmployees||0)+' €/mes\n':'')+
      (G.numWorkers?'· Nóminas: '+fmt((G.numWorkers||0)*(G.workerSalary||0))+' €/mes\n':'')+
      (G.loanPayment?'· Préstamo: '+fmt(G.loanPayment)+' €/mes':''),
      '#FFF3E0','#E65100')+
    cBlock('💰','9. Fuentes de ingresos',
      'Ventas estimadas/mes: '+(G.monthlySales||'—')+' uds\n'+
      'Precio medio: '+fmt(G.avgPrice||0)+' €\n'+
      'Facturación: '+fmt(ingr)+' €/mes\n'+
      'Beneficio neto: '+fmt(ben)+' €/mes\n'+
      'Margen de beneficio: '+(G.profitMargin||0).toFixed(1)+'%\n\n'+
      'Previsión anual: '+fmt(annualProfit)+' €',
      '#E8F5E9','#1B5E20')+
  '</div>'+

  // BOTONES debajo del canvas
  '<div class="no-print" data-radix-estilo="r80">'+
    '<button class="btn bs" data-radix-click="accion31">📄 Guardar PDF</button><span id="radixPdfStatus" role="status" aria-live="polite"></span>'+
    (modoAyuntamiento
      ? '<button class="btn bp" data-radix-click="accion32">Empezar las 12 preguntas →</button>'
      : '<button class="btn bp" data-radix-click="accion33">Continuar a simulación →</button>')+
  '</div>'+

  // PIE
  '</div>';

  area().innerHTML=h;
  if(!modoAyuntamiento)setTimeout(function(){guardarPDFAutomatico('canvas','02_Business_Model_Canvas.pdf','landscape');},900);
}

function cBlock(emoji,title,body,bg,col,tall){
  var minH=tall?'140px':'90px';
  var lines=body.split('\n');
  var content='';
  for(var i=0;i<lines.length;i++){
    var l=lines[i];
    content+=l?'<div data-radix-estilo="r81">'+l+'</div>':'<div data-radix-estilo="r82"></div>';
  }
  return '<div data-radix-estilo="r83" data-radix-dinamico="'+radixEstiloDinamico([bg,(col)+'33',minH])+'">' +
    '<div data-radix-estilo="r84" data-radix-dinamico="'+radixEstiloDinamico([col])+'">'+emoji+' '+title+'</div>'+
    '<div data-radix-estilo="r85">'+content+'</div>'+
  '</div>';
}

function goSimIntro(){
  G.planScreen='simIntro';
  G.turn=10;goTop();
  area().innerHTML=
  '<div class="rh"><p data-radix-estilo="r86">Siguiente etapa</p>'+
    '<h1>🎮 Simulación de 12 meses</h1>'+
    '<p>Has completado las 10 fases. Ahora empieza lo más emocionante: hacer funcionar tu negocio.</p></div>'+
  '<div class="cd"><div class="ci" data-radix-estilo="r87">📅</div>'+
    '<h2>¿Qué va a pasar?</h2>'+
    '<p data-radix-estilo="r88">Durante los próximos pasos simularás <strong>12 meses</strong> de actividad real de <strong>"'+G.bizName+'"</strong>. Cada mes se divide en 4 semanas, y cada semana te enfrentarás a decisiones y eventos del día a día.</p>'+
    '<p data-radix-estilo="r89">Los ingresos y gastos se calcularán en base a todo lo que has configurado: tu equipo, tus costes, tu estrategia de marketing y tus previsiones.</p>'+
    '<p>Al final de los 12 meses verás tu <strong>resultado anual</strong>: beneficio neto, nivel obtenido y tu posición en la escala de emprendedores.</p></div>'+
  '<div class="cd"><div class="ci cig">📊</div><h2>Tu situación de partida</h2>'+
    '<div data-radix-estilo="r90">'+
      '<div data-radix-estilo="r91"><div data-radix-estilo="r92">Capital inicial</div><div data-radix-estilo="r93">'+fmt(G.capital)+' €</div></div>'+
      '<div data-radix-estilo="r94"><div data-radix-estilo="r95">Reputación</div><div data-radix-estilo="r96">'+G.reputation+' / 100</div></div>'+
    '</div></div>'+
  '<div class="al al-i" data-radix-estilo="r97"><span class="ai">💡</span><div>Cada decisión importa. Los eventos son aleatorios e imprevisibles, igual que en la vida real. ¡Buena suerte!</div></div>'+
  '<div class="bc" data-radix-estilo="r98"><button class="btn bp" data-radix-estilo="r99" data-radix-click="accion34">🚀 Empezar simulación →</button></div>';
  radixAutoGuardarAhora();
}

/* ════════════════════════════════════════════════════════════
   FINAL — PLAN DE NEGOCIO
   ════════════════════════════════════════════════════════════ */
function calcProfile(){
  var d=G.dafo;var sc={inn:0,eje:0,pru:0,est:0,pio:0};
  if(d[0]==='A'){sc.eje+=2;sc.pio+=1;}else if(d[0]==='B'){sc.est+=2;sc.pru+=1;}else if(d[0]==='C'){sc.pru+=1;sc.est+=1;}else{sc.pru+=2;}
  if(d[1]==='A'){sc.pio+=2;sc.inn+=1;}else if(d[1]==='B'){sc.est+=2;sc.eje+=1;}else if(d[1]==='C'){sc.pru+=2;}else{sc.pru+=2;}
  if(d[2]==='A'){sc.eje+=1;sc.pio+=1;}else if(d[2]==='B'){sc.eje+=2;}else if(d[2]==='C'){sc.inn+=1;sc.est+=1;}else{sc.est+=2;}
  if(d[3]==='A'){sc.pio+=2;sc.eje+=1;}else if(d[3]==='B'){sc.inn+=2;sc.est+=1;}else if(d[3]==='C'){sc.pru+=1;sc.est+=1;}else{sc.pru+=2;}
  if(d[4]==='A'){sc.eje+=2;sc.pio+=1;}else if(d[4]==='B'){sc.est+=2;sc.pru+=1;}else if(d[4]==='C'){sc.pru+=1;}else{sc.inn+=2;sc.pio+=1;}
  var top='est',mx=-99;for(var k in sc){if(sc[k]>mx){mx=sc[k];top=k;}}
  var pr={
    inn:{n:'El Innovador',em:'💡',desc:'Persona creativa que busca nuevas formas de hacer las cosas.',str:['Creatividad y pensamiento lateral','Capacidad de adaptación','Visión de oportunidades'],weak:['Puede dispersarse','A veces falta constancia','Necesita perfiles operativos']},
    eje:{n:'El Decidido',em:'⚡',desc:'Persona de acción. Tu capacidad de ejecución es tu superpoder.',str:['Velocidad de ejecución','Persistencia ante obstáculos','Autonomía'],weak:['Puede actuar sin planificar','Riesgo de quemarse','Debe aprender a delegar']},
    pru:{n:'El Prudente',em:'🛡️',desc:'Persona cuidadosa y metódica. Excelente gestor del riesgo.',str:['Excelente gestión del riesgo','Planificación financiera sólida','Decisiones basadas en datos'],weak:['Puede tardar en decidir','Exceso de cautela','Más tolerancia a la incertidumbre']},
    est:{n:'El Estratega',em:'♟️',desc:'Persona analítica y planificadora. Visión a largo plazo.',str:['Visión estratégica','Equilibrio acción-análisis','Liderazgo'],weak:['Puede sobre-analizar','Prioriza perfección sobre velocidad','Confiar más en intuición']},
    pio:{n:'El Pionero',em:'🚀',desc:'Persona valiente y visionaria. No le asusta lo desconocido.',str:['Valentía para lo nuevo','Alta tolerancia al riesgo','Capacidad de inspirar'],weak:['Puede infravalorar riesgos','Necesita perfiles conservadores','Falta paciencia con lo lento']}
  };
  return pr[top]||pr.est;
}

function goFinal(){
  goTop();
  var oldStyle = document.getElementById('print-style');
  if (oldStyle) oldStyle.remove();
  var pf=calcProfile();
  var barTxt=G.bar>=70?'¡Alta viabilidad! 🌟':G.bar>=50?'Viable con precauciones':'Necesita ajustes ⚠️';
  var barCls=G.bar>=70?'rbg':G.bar>=50?'rbo':'rbr';
  var decRows='';for(var i=0;i<G.decisions.length;i++){var d=G.decisions[i];var clr=d.imp>=0?'var(--suc)':'var(--dng)';decRows+='<tr><td>T'+d.t+'</td><td>'+d.txt+'</td><td data-radix-estilo="r100" data-radix-dinamico="'+radixEstiloDinamico([clr])+'">'+(d.imp>=0?'+':'')+d.imp+'</td></tr>';}
  var gr=[0.5,0.6,0.7,0.8,0.85,0.9,0.95,1.0,0.95,0.93,0.95,1.0];var projR='',cum=0;
  for(var m=0;m<12;m++){var sv=Math.round(G.monthlySales*gr[m]);var rev=sv*G.avgPrice;var cost=G.totalFixed+G.totalVariable*gr[m];var prof=rev-cost;cum+=prof;var c1=prof>=0?'var(--suc)':'var(--dng)';var c2=cum>=0?'var(--suc)':'var(--dng)';projR+='<tr><td>Mes '+(m+1)+'</td><td>'+sv+'</td><td>'+fmt(rev)+' €</td><td>'+fmt(cost)+' €</td><td data-radix-estilo="r101" data-radix-dinamico="'+radixEstiloDinamico([c1])+'">'+fmt(prof)+' €</td><td data-radix-estilo="r102" data-radix-dinamico="'+radixEstiloDinamico([c2])+'">'+fmt(cum)+' €</td></tr>';}
  var zn={local:'Local',isla:'La isla',canarias:'Canarias',nacional:'Nacional',internacional:'Internacional'};
  var inc={bajo:'Bajo',medio:'Medio',alto:'Alto'};
  var loc={fisico:'Físico',online:'Online',mixto:'Mixto'};
  var lsi=function(v){return v==='si'?'✅':v==='tramite'?'🔄':'❌';};
  var mkLab={A:'Meta Ads (300 €)',B:'Radio local (250 €)',C:(G.localMedia||'Periódico local') + ' (200 €)',D:'Evento apertura (300 €)',E:'Coche con altavoz (150 €)'};

  area().innerHTML=
  '<div class="plan-final">'+
  '<div class="rh"><p data-radix-estilo="r103">Plan de Negocio Final</p>'+ 
    '<h1>📋 '+G.bizName+'</h1><p>Generado a partir de tu simulación en 10 fases</p>'+
    '<p data-radix-estilo="r104"><span class="rb '+barCls+'" data-radix-estilo="r105">'+barTxt+' — '+G.bar+'%</span></p></div>'+

  '<div class="cd"><div class="ci cio">🧠</div><h2>1. Perfil de emprendedor</h2>'+
    '<div class="prl"><span class="em">'+pf.em+'</span><h3>'+pf.n+'</h3><p>'+pf.desc+'</p></div>'+
    '<h3>Fortalezas</h3><ul>'+pf.str.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul>'+
    '<h3>Puntos de mejora</h3><ul>'+pf.weak.map(function(w){return '<li>'+w+'</li>';}).join('')+'</ul></div>'+

  '<div class="cd"><div class="ci cig">📊</div><h2>2. Historial de decisiones</h2>'+
    '<div class="tw"><table><tr><th>Fase</th><th>Decisión</th><th>Impacto</th></tr>'+decRows+
    '<tr class="tr-t"><td colspan="2"><strong>Barra final</strong></td><td><strong>'+G.bar+'%</strong></td></tr></table></div></div>'+

  '<div class="cd"><div class="ci cib">📄</div><h2>3. Resumen ejecutivo</h2>'+
    '<p><strong>'+G.bizName+'</strong> — '+G.bizTypeLabel+' en '+G.locationZone+', '+G.island+'. '+G.bizDesc+'</p>'+
    '<p>Emprendedor: <strong>'+G.name+'</strong>, '+G.age+' años. '+G.education+'. Forma jurídica: <strong>'+G.legalFormLabel+'</strong>.</p>'+
    '<p>Inversión: <strong>'+fmt(G.totalInvestment)+' €</strong> | Capital propio: <strong>'+fmt(G.ownMoney)+' €</strong>'+(G.loanAmount>0?' | Préstamo: <strong>'+fmt(G.loanAmount)+' €</strong>':'')+'</p></div>'+

  '<div class="cd"><div class="ci cio">💼</div><h2>4. Negocio</h2>'+
    '<p><strong>Producto:</strong> '+(G.mainProduct||'—')+'</p>'+
    '<p><strong>Necesidad:</strong> '+(G.marketNeed||'—')+'</p>'+
    '<p><strong>Misión:</strong> '+(G.mission||'—')+' | <strong>Visión:</strong> '+(G.vision||'—')+'</p></div>'+

  '<div class="cd"><div class="ci cig">🎯</div><h2>5. Cliente objetivo</h2>'+
    '<p><strong>Público:</strong> '+(G.targetDesc||'—')+' | <strong>Edad:</strong> '+(G.targetAge||'—')+' | <strong>Tipo:</strong> '+(G.targetType||'—')+'</p>'+
    '<p><strong>Zona:</strong> '+(zn[G.targetZone]||'—')+' | <strong>Nivel:</strong> '+(inc[G.targetIncome]||'—')+'</p>'+
    '<div class="per"><div class="pav">👤</div><div class="pin"><h4>Buyer Persona</h4>'+
    '<p><strong>Necesidades:</strong> '+(G.targetNeeds||'Busca calidad en ' + G.municipality)+'</p>'+
    '<p><strong>'+G.bizName+' le ofrece:</strong> '+(G.mainProduct||'Un servicio diferenciado')+'</p></div></div></div>'+

  '<div class="cd"><div class="ci cib">📍</div><h2>6. Ubicación</h2>'+
    '<p><strong>Tipo:</strong> '+(loc[G.locationType]||'—')+' | <strong>Zona:</strong> '+G.locationZone+' | <strong>Alquiler:</strong> '+fmt(G.monthlyRent)+' €/mes | <strong>Reforma:</strong> '+fmt(G.reformCost)+' €</p></div>'+

  '<div class="cd"><div class="ci cio">💰</div><h2>7. Inversión inicial</h2>'+
    '<div class="tw"><table><tr><th>Concepto</th><th>€</th></tr>'+
    '<tr><td>Alquiler 1er mes</td><td>'+fmt(G.expenses.rent||0)+' €</td></tr>'+
    '<tr><td>Fianza</td><td>'+fmt(G.expenses.deposit||0)+' €</td></tr>'+
    '<tr><td>Reforma</td><td>'+fmt(G.expenses.reform||0)+' €</td></tr>'+
    '<tr><td>Mobiliario</td><td>'+fmt(G.expenses.furniture||0)+' €</td></tr>'+
    '<tr><td>Suministros</td><td>'+fmt(G.expenses.supplies||0)+' €</td></tr>'+
    '<tr><td>Legales</td><td>'+fmt(G.expenses.legal||0)+' €</td></tr>'+
    '<tr><td>Maquinaria</td><td>'+fmt(G.expenses.machinery||0)+' €</td></tr>'+
    '<tr><td>Software/web</td><td>'+fmt(G.expenses.software||0)+' €</td></tr>'+
    '<tr><td>Marketing</td><td>'+fmt(G.expenses.marketing||0)+' €</td></tr>'+
    '<tr><td>Colchón</td><td>'+fmt(G.expenses.cushion||0)+' €</td></tr>'+
    '<tr><td>Imprevistos</td><td>'+fmt(G.expenses.contingency||0)+' €</td></tr>'+
    '<tr class="tr-t"><td><strong>TOTAL</strong></td><td><strong>'+fmt(G.totalInvestment)+' €</strong></td></tr></table></div></div>'+

  '<div class="cd"><div class="ci cig">📋</div><h2>8. Costes mensuales</h2>'+
     '<div class="plan-cost-grid" data-radix-estilo="r106">'+
    '<div><h3>Fijos</h3><div class="tw"><table><tr><th>Concepto</th><th>€</th></tr>'+
      '<tr><td>Alquiler</td><td>'+fmt(G.fixedCosts.rent||0)+'</td></tr>'+
      '<tr><td>SS</td><td>'+fmt(G.fixedCosts.ss||0)+'</td></tr>'+
      '<tr><td>Nóminas</td><td>'+fmt(G.fixedCosts.wages||0)+'</td></tr>'+
      '<tr><td>Asesoría</td><td>'+fmt(G.fixedCosts.advisory||0)+'</td></tr>'+
      '<tr><td>Seguros</td><td>'+fmt(G.fixedCosts.insurance||0)+'</td></tr>'+
      '<tr><td>Telecom</td><td>'+fmt(G.fixedCosts.telecom||0)+'</td></tr>'+
      '<tr><td>Publicidad</td><td>'+fmt(G.fixedCosts.ads||0)+'</td></tr>'+
      '<tr><td>Préstamo</td><td>'+fmt(G.fixedCosts.loan||0)+'</td></tr>'+
      '<tr class="tr-t"><td><strong>Total</strong></td><td><strong>'+fmt(G.totalFixed)+'</strong></td></tr></table></div></div>'+
    '<div><h3>Variables</h3><div class="tw"><table><tr><th>Concepto</th><th>€</th></tr>'+
      '<tr><td>Proveedores</td><td>'+fmt(G.variableCosts.supplies||0)+'</td></tr>'+
      '<tr><td>Transporte</td><td>'+fmt(G.variableCosts.transport||0)+'</td></tr>'+
      '<tr><td>Comisiones</td><td>'+fmt(G.variableCosts.commissions||0)+'</td></tr>'+
      '<tr><td>Suministros</td><td>'+fmt(G.variableCosts.utilities||0)+'</td></tr>'+
      '<tr><td>Imprevistos</td><td>'+fmt(G.variableCosts.misc||0)+'</td></tr>'+
      '<tr class="tr-t"><td><strong>Total</strong></td><td><strong>'+fmt(G.totalVariable)+'</strong></td></tr></table></div></div></div></div>'+

  '<div class="cd"><div class="ci cib">👥</div><h2>9. Personal</h2>'+
    '<p><strong>Equipo:</strong> '+(G.workAlone?'Solo/a':G.numWorkers+' empleados')+' | <strong>Salario propio:</strong> '+fmt(G.ownSalary)+' €/mes'+(!G.workAlone?' | <strong>Salario empleados:</strong> '+fmt(G.workerSalary)+' €/mes bruto':'')+'</p>'+
    '<p><strong>Horario:</strong> '+(G.schedule||'—')+' | <strong>SS total:</strong> '+fmt((G.ssCost||0)+(G.ssEmployees||0))+' €/mes</p></div>'+

  '<div class="cd"><div class="ci cio">📣</div><h2>10. Marketing</h2>'+
    '<p><strong>Presupuesto:</strong> '+fmt(G.marketingBudget)+' €/mes | <strong>Estrategia:</strong> '+(mkLab[G.marketingChoice]||'—')+'</p>'+
    (G.openingPromo?'<p><strong>Promociones:</strong> '+G.openingPromo+'</p>':'')+
    (G.collabs?'<p><strong>Colaboraciones:</strong> '+G.collabs+'</p>':'')+'</div>'+

  '<div class="cd"><div class="ci cig">📈</div><h2>11. Previsiones a 12 meses</h2>'+
     '<div class="plan-metrics-grid" data-radix-estilo="r107">'+
      '<div class="al al-i" data-radix-estilo="r108"><span class="ai">💶</span><div><strong>Facturación</strong><br>'+fmt(G.monthlyRevenue)+' €/mes</div></div>'+
      '<div class="al al-'+(G.monthlyProfit>=0?'s':'d')+'" data-radix-estilo="r109"><span class="ai">'+(G.monthlyProfit>=0?'✅':'⚠️')+'</span><div><strong>Beneficio</strong><br>'+fmt(G.monthlyProfit)+' €/mes</div></div>'+
      '<div class="al al-i" data-radix-estilo="r110"><span class="ai">📊</span><div><strong>Margen</strong><br>'+G.profitMargin.toFixed(1)+'%</div></div>'+
      '<div class="al al-i" data-radix-estilo="r111"><span class="ai">⚖️</span><div><strong>Equilibrio</strong><br>'+G.breakEven+' uds/mes</div></div>'+
    '</div><div class="tw"><table><tr><th>Mes</th><th>Ventas</th><th>Ingresos</th><th>Costes</th><th>Beneficio</th><th>Acumulado</th></tr>'+projR+'</table></div></div>'+

  '<div class="cd"><div class="ci cib">⚖️</div><h2>12. Marco legal</h2>'+
    '<p><strong>Forma jurídica:</strong> '+G.legalFormLabel+'</p>'+
    (G.capitalMinimo>0?'<p>Capital social del modelo: '+fmt(G.capitalSuscrito)+' €; desembolso inicial mínimo: '+fmt(G.capitalMinimo)+' €'+(G.capitalPendiente?'; desembolso pendiente de accionistas: '+fmt(G.capitalPendiente)+' €':'')+'. Las aportaciones están incluidas en la financiación, no son gastos.</p>':'')+
    '<ul><li>'+lsi(G.legal.alta)+' Alta autónomo/empresa</li>'+
    '<li>'+lsi(G.legal.igic)+' Alta IGIC</li>'+
    (!G.workAlone?'<li>'+lsi(G.legal.cont)+' Contratos</li>':'')+
    '<li>'+lsi(G.legal.lic)+' Licencias municipales</li>'+
    '<li>'+lsi(G.legal.lopd)+' LOPD/RGPD</li>'+
    '<li>'+lsi(G.legal.prl)+' Prevención riesgos</li></ul></div>'+

  '<div class="cd"><div class="ci cig">🌱</div><h2>13. Sostenibilidad</h2>'+
    (G.sustainable?'<p><strong>Sostenibilidad:</strong> '+G.sustainable+'</p>':'<p>No se definieron medidas específicas.</p>')+
    (G.envImpact?'<p><strong>Impacto ambiental:</strong> '+G.envImpact+'</p>':'')+
    '<p><strong>Empleo local:</strong> '+(G.localEmploy==='si'?'Sí':G.localEmploy==='parcial'?'Parcialmente':'No directamente')+' | <strong>Digital:</strong> '+(G.digitalize==='si'?'Sí':G.digitalize==='parcial'?'Parcial':'No')+'</p>'+
    '<div class="al al-i"><span class="ai">💡</span><div>Recomendaciones: proveedores locales, LED, reducir plásticos, paneles solares.</div></div></div>'+

  '<div class="cd"><div class="ci cio">⚠️</div><h2>14. Análisis de riesgos</h2>'+
    '<div class="tw"><table><tr><th>Riesgo</th><th>Prob.</th><th>Impacto</th><th>Contingencia</th></tr>'+
    '<tr><td>Estacionalidad</td><td>'+(G.targetType==='turista'?'Alta':'Media')+'</td><td>Alto</td><td>Diversificar a residentes</td></tr>'+
    '<tr><td>Subida alquiler</td><td>Media</td><td>Alto</td><td>Contratos largos</td></tr>'+
    '<tr><td>Evento natural</td><td>Baja</td><td>Muy alto</td><td>Seguros, plan evacuación</td></tr>'+
    '<tr><td>Competencia</td><td>Alta</td><td>Medio</td><td>Diferenciación y fidelización</td></tr>'+
    '</table></div></div>'+

  '<div class="cd"><div class="ci cigr">🏆</div><h2>15. Estado final</h2>'+
    '<div data-radix-estilo="r112">'+
      '<div data-radix-estilo="r113">'+(G.bar>=70?'🌟':G.bar>=50?'👍':'⚠️')+'</div>'+
      '<div class="rb '+barCls+'" data-radix-estilo="r114">'+G.bar+'% — '+barTxt+'</div>'+
      '<p data-radix-estilo="r115">'+
        (G.bar>=70?'¡Felicidades, '+G.name+'! Tu plan tiene una base sólida.':
         G.bar>=50?'Buen trabajo, '+G.name+'. Viable pero revisa los puntos débiles.':
         G.name+', tu plan necesita ajustes importantes. Revisa las decisiones negativas.')+
      '</p>'+
      '<div data-radix-estilo="r116"><p><strong>Rentabilidad estimada en un año (neta de impuestos):</strong> <span data-radix-estilo="r117" data-radix-dinamico="'+radixEstiloDinamico([(G.capital>=0?'var(--suc)':'var(--dng)')])+'">'+fmt(G.capital)+' €</span></p>'+
      '<p><strong>Reputación:</strong> '+G.reputation+'/100</p></div>'+
    '</div></div>'+

  '<div class="bc" data-radix-estilo="r118">'+
    '<button class="btn bs" data-radix-click="accion35">📄 Guardar Plan en PDF</button><span id="radixPdfStatus" data-radix-estilo="r119"></span>'+
    '<button class="btn bp" data-radix-click="accion36">🔄 Nueva simulación</button></div></div>';
  if(!G._planFinalSaved){ G._planFinalSaved = true; setTimeout(function(){guardarPDFAutomatico('plan_final','03_Plan_de_Negocio_Final.pdf','portrait');},900); }
}


/* ════════════════════════════════════════════════════════════
   SIMULACION 12 MESES
   ════════════════════════════════════════════════════════════ */
