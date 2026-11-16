/* Hipótesis didácticas: la tributación y cotización reales dependen del caso. */
var FORMAS_JURIDICAS = [
  {v:'autonomo',ic:'👤',t:'Autónomo',d:'Una persona dirige el negocio y responde con su patrimonio.',ss:88.56,tipo:0.20,impuesto:'IRPF estimado (20 %)'},
  {v:'cb',ic:'🤝',t:'Comunidad de bienes',d:'Varias personas comparten bienes y actividad; responden personalmente.',ss:88.56,tipo:0.20,impuesto:'IRPF atribuido estimado (20 %)'},
  {v:'civil',ic:'📄',t:'Sociedad civil',d:'Varias personas colaboran mediante un contrato; su tributación depende de la actividad.',ss:88.56,tipo:0.15,impuesto:'Sociedades estimado (15 %, sociedad civil mercantil nueva que reúne requisitos)'},
  {v:'sl',ic:'🏢',t:'Sociedad Limitada (SL, SLU, SLP, SLL)',d:'Sociedad con responsabilidad generalmente limitada; puede constituirse desde 1 € con condiciones.',ss:350,tipo:0.15,impuesto:'Sociedades estimado (15 %, nueva entidad que reúne requisitos)'},
  {v:'cooperativa',ic:'🌱',t:'Cooperativa',d:'Personas socias gestionan la empresa democráticamente; su régimen depende de los estatutos.',ss:300,tipo:0.12,impuesto:'Sociedades estimado (12 %, cooperativa protegida de nueva creación que cumple requisitos; resultados cooperativos)'},
  {v:'sa',ic:'🏛️',t:'Sociedad anónima',d:'Capital dividido en acciones; requiere 60.000 € de capital suscrito y desembolso inicial mínimo del 25 %.',ss:350,tipo:0.25,impuesto:'Sociedades estimado (25 %)'},
  {v:'indeciso',ic:'❓',t:'No lo tengo claro',d:'Consulta la ayuda para elegir una forma jurídica antes de continuar.',ss:88.56,tipo:0.20,impuesto:'Impuesto provisional estimado (20 %)'}
];
