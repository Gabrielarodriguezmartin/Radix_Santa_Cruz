/* Parámetros simplificados para el simulador; no sustituyen un cálculo fiscal real. */
function obtenerFormaJuridica(valor) {
  return FORMAS_JURIDICAS.find(function (forma) { return forma.v === valor; }) || FORMAS_JURIDICAS[FORMAS_JURIDICAS.length - 1];
}

/* Las aportaciones son financiación propia disponible, no un gasto de apertura. */
function calcularFinanciacionJuridica(forma, propio, socios, prestamo, inversion, minimoCooperativa, capitalDeclarado) {
  function importe(valor) { valor=Number(valor); return Number.isFinite(valor) && valor>0 ? valor : 0; }
  propio=importe(propio); socios=importe(socios); prestamo=importe(prestamo); inversion=importe(inversion);
  var minimo=0, suscrito=0, pendiente=0, faltaDato=false;
  if(forma==='sl' || forma==='sa'){
    var legal=forma==='sl'?1:60000;
    suscrito=capitalDeclarado==null?legal:importe(capitalDeclarado);
    faltaDato=suscrito<legal;
    minimo=forma==='sa'?Math.round(suscrito*25)/100:suscrito;
    pendiente=forma==='sa'?suscrito-minimo:0;
  }
  else if(forma==='cooperativa'){
    faltaDato=minimoCooperativa===null || minimoCooperativa===undefined || String(minimoCooperativa).trim()==='';
    minimo=importe(minimoCooperativa); faltaDato=faltaDato || minimo<=0; suscrito=minimo;
  }
  var aportado=propio+socios;
  if(forma==='sa') pendiente=Math.max(0,suscrito-Math.min(suscrito,aportado));
  return {minimo:minimo,suscrito:suscrito,pendiente:pendiente,faltaDato:faltaDato,
    aportado:aportado,recursos:aportado+prestamo,liquidez:aportado+prestamo-inversion,
    faltaCapital:Math.max(0,minimo-aportado), faltaInversion:Math.max(0,inversion-aportado-prestamo)};
}

// Reserva legal de una SL con capital inferior a 3.000 €, sin salida de caja.
function calcularReservaSL(forma,capital,beneficioNeto,reservaPrevia){
  capital=Number(capital)||0; reservaPrevia=Math.max(0,Number(reservaPrevia)||0);
  if(forma!=='sl' || capital<=0 || capital>=3000 || beneficioNeto<=0) return 0;
  return Math.round(Math.min(beneficioNeto*0.20,Math.max(0,3000-capital-reservaPrevia))*100)/100;
}

// La cuota incluye devolución de principal: solo los intereses son gasto financiero.
function calcularPrincipalDevuelto(importe,interesAnual,plazo,meses){
  var saldo=Math.max(0,Number(importe)||0), tasa=Math.max(0,Number(interesAnual)||0)/1200;
  plazo=Math.max(0,Math.floor(Number(plazo)||0)); meses=Math.min(plazo,Math.max(0,Math.floor(Number(meses)||0)));
  if(!saldo || !plazo || !meses) return 0;
  var cuota=tasa ? saldo*tasa/(1-Math.pow(1+tasa,-plazo)) : saldo/plazo;
  var amortizado=0;
  for(var i=0;i<meses;i++){var principal=Math.min(saldo,Math.max(0,cuota-saldo*tasa));saldo-=principal;amortizado+=principal;}
  return Math.round(amortizado*100)/100;
}
