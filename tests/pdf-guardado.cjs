const fs=require('fs'), vm=require('vm'), assert=require('assert');
let fail=false, calls=0, clicks=0;
class Reader { readAsDataURL(){this.result='data:application/pdf;base64,UEZERkFLRQ=='; queueMicrotask(()=>this.onload());} }
const element={click(){clicks++},remove(){}};
const context={console,Math,Intl,FileReader:Reader,URL:{createObjectURL(){return 'blob:demo'},revokeObjectURL(){}},
  document:{addEventListener(){},body:{appendChild(){}},createElement(){return element}},
  window:{addEventListener(){}},setTimeout(){},clearTimeout(){},
  fetch:async()=>{calls++; if(fail) throw Error('sin conexión'); return {type:'opaque',ok:false};}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('js/interfaz.js','utf8'),context);
context.generarPDFActual=async()=>({blob:{},nombre:'demo.pdf',id:'DEMO'});
(async()=>{
  context.DRIVE_WEB_APP_URL='';
  let r=await context.guardarPDFEnDrive('canvas','demo.pdf','landscape');
  assert.equal(r.drive,'no-configurado'); assert.equal(clicks,1); assert.equal(calls,0);
  context.DRIVE_WEB_APP_URL='https://example.invalid';
  fail=true; r=await context.guardarPDFEnDrive('canvas','demo.pdf','landscape',false);
  assert.equal(r.drive,'error'); assert.match(context.radixMensajePDF(r),/No se pudo enviar/);
  fail=false; r=await context.guardarPDFEnDrive('canvas','demo.pdf','landscape',false);
  assert.equal(calls,2); assert.equal(r.drive,'sin-confirmacion'); assert.match(context.radixMensajePDF(r),/no ofrece confirmación/);
  assert(!Object.keys(context.RADIX_PDF_ENVIOS).length);
  console.log('PDF: descarga local, error, reintento y respuesta opaca comprobados.');
})().catch(e=>{console.error(e);process.exitCode=1});
