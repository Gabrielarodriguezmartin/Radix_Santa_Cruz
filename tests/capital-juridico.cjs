const fs=require('fs'),vm=require('vm'),assert=require('assert');
const c={}; vm.createContext(c);
for(const file of ['datos.js','calculos.js']) vm.runInContext(fs.readFileSync('js/'+file,'utf8'),c);
function f(forma,own,partners,loan,investment,coop){return c.calcularFinanciacionJuridica(forma,own,partners,loan,investment,coop)}
for(const forma of ['autonomo','cb','civil','indeciso']){let r=f(forma,500,0,500,1200,null);assert.equal(r.minimo,0);assert.equal(r.faltaInversion,200);assert.equal(r.liquidez,-200)}
let sl=f('sl',0,0,10000,1000,null);assert.equal(sl.faltaCapital,1);assert.equal(sl.liquidez,9000);
sl=f('sl',1,0,0,0,null);assert.equal(sl.faltaCapital,0);assert.equal(sl.recursos,1);
let sa=f('sa',10000,0,100000,20000,null);assert.equal(sa.faltaCapital,5000);assert.equal(sa.faltaInversion,0);assert.equal(sa.pendiente,50000);assert.equal(sa.suscrito,60000);
sa=f('sa',10000,5000,20000,25000,null);assert.equal(sa.faltaCapital,0);assert.equal(sa.liquidez,10000);assert.equal(sa.recursos,35000);
let coop=f('cooperativa',1000,0,0,100,null);assert.equal(coop.faltaDato,true);
assert.equal(f('cooperativa',1000,0,0,100,'0').faltaDato,true);
coop=f('cooperativa',1000,500,7000,2000,'2000');assert.equal(coop.faltaCapital,500);assert.equal(coop.faltaInversion,0);
coop=f('cooperativa',1000,1000,0,1500,'2000');assert.equal(coop.faltaCapital,0);assert.equal(coop.liquidez,500);
console.log('Capital y financiación: siete formas, umbrales, préstamos, socios y liquidez comprobados.');

assert.equal(c.calcularReservaSL('sl',1,10000,0),2000);
assert.equal(c.calcularReservaSL('sl',1,30000,0),2999);
assert.equal(c.calcularReservaSL('sl',3000,10000,0),0);
assert.equal(c.calcularReservaSL('sa',1,10000,0),0);
assert.equal(c.calcularPrincipalDevuelto(12000,0,12,3),3000);
assert.equal(c.calcularPrincipalDevuelto(12000,0,12,24),12000);
assert(c.calcularPrincipalDevuelto(12000,6,12,1)<1000);

assert.equal(c.calcularFinanciacionJuridica('sl',100,0,0,0,null,100).minimo,100);
assert.equal(c.calcularFinanciacionJuridica('sa',20000,0,0,0,null,80000).minimo,20000);
assert.equal(c.calcularFinanciacionJuridica('sa',0,0,0,0,null,59999).faltaDato,true);
assert.equal(c.calcularFinanciacionJuridica('sl',0,0,0,0,null,0).faltaDato,true);

assert.equal(c.calcularFinanciacionJuridica('sa',60000,0,0,0,null,60000).pendiente,0);
