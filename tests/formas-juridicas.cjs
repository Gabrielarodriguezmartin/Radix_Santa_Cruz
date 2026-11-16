const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const nodes = new Map();
function element(id) {
  if (!nodes.has(id)) nodes.set(id, {innerHTML:'', value:'', classList:{add(){}}, style:{}});
  return nodes.get(id);
}
const ctx = {
  document:{addEventListener(){}, getElementById:element, body:{classList:{add(){}}}, head:{appendChild(){}}, createElement(){return {}}},
  window:{innerWidth:1024, scrollTo(){}, addEventListener(){}},
  setTimeout(){}, Chart:function(){}, console, Intl, Math,
  radixEstiloDinamico(){return 'test'},
};
vm.createContext(ctx);
for (const file of ['datos.js','calculos.js','interfaz.js','simulacion.js']) vm.runInContext(fs.readFileSync('js/'+file,'utf8'),ctx,{filename:file});
ctx.area=()=>element('gameArea'); ctx.goTop=()=>{}; ctx.el=element;
const campos=['ingresos_operativos','ingresos_financieros','subvenciones','compras','servicios','impuestos','suministros','asesoria','publicidad','personal','alquiler','seguros','otros_gastos','costos_financieros'];
const detalle=Object.fromEntries(campos.map(k=>[k,0]));
const expected={autonomo:[88.56,.20],cb:[88.56,.20],civil:[88.56,.15],sl:[350,.15],cooperativa:[300,.12],sa:[350,.25],indeciso:[88.56,.20]};
for (const [forma,[ss,tipo]] of Object.entries(expected)) {
  ctx.G={legalForm:forma,capital:10000,pnlHistory:[{month:1,ingresos:15000,gastos:5000,beneficio:10000,detalle}],yearlyForecastTaxApplied:false};
  ctx.getOpt=()=> 'solo';
  ctx.doSS(); assert.strictEqual(ctx.G.ssCost,ss,forma+' cotización');
  ctx.showYearlyForecast(); assert.strictEqual(ctx.G.capital,10000-10000*tipo,forma+' impuesto');
  assert(element('gameArea').innerHTML.includes(ctx.obtenerFormaJuridica(forma).impuesto),forma+' etiqueta');
  ctx.showYearlyForecast(); assert.strictEqual(ctx.G.capital,10000-10000*tipo,forma+' doble aplicación');
  ctx.G.pnlHistory[0].beneficio=-100; ctx.G.capital=10000; ctx.G.yearlyForecastTaxApplied=false;
  ctx.showYearlyForecast(); assert.strictEqual(ctx.G.capital,10000,forma+' pérdidas');
  console.log(forma+': cotización, impuesto, aplicación única y pérdidas OK');
}


// La amortización del principal no debe minorar la base imponible.
ctx.G={legalForm:'sa',capital:10000,loanAmount:12000,loanInterest:0,loanMonths:12,fixedCosts:{loan:1000},pnlHistory:[{month:1,ingresos:2000,gastos:2000,beneficio:0,detalle}],yearlyForecastTaxApplied:false};
ctx.showYearlyForecast();
assert.strictEqual(ctx.G.capital,9750,'el principal se excluye de los gastos fiscales');
assert(element('gameArea').innerHTML.includes('Base fiscal orientativa'));
// La cuota editable puede ser cero y debe conservarse como valor explícito.
ctx.G={legalForm:'autonomo'}; element('f-ss-own').value='0'; ctx.getOpt=()=> 'solo'; ctx.doSS();
assert.strictEqual(ctx.G.ssCost,0); assert.strictEqual(ctx.G.ssCostEstablecido,true);
element('f-ss-own').value='250'; ctx.doSS(); assert.strictEqual(ctx.G.ssCost,250);
