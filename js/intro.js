
  // Revela el botón "Empieza a crear tu negocio" pasados unos segundos (no se puede detectar
  // el fin real del vídeo porque el reproductor de Canva va embebido en un iframe externo).
  setTimeout(function(){
    var b=document.getElementById('introContinueBtn');
    var h=document.getElementById('introHint');
    if(b){b.classList.add('rdy');}
    if(h){h.textContent='Pulsa Empieza a crear tu negocio cuando termines de ver el vídeo';}
  }, 11000);

  function closeIntroVideo(){
    var ov=document.getElementById('introOverlay');
    if(!ov) return;
    radixFijarEstilo(ov,'transition','opacity .5s ease');
    radixFijarEstilo(ov,'opacity','0');
    setTimeout(function(){ radixFijarEstilo(ov,'display','none'); }, 500);
  }
