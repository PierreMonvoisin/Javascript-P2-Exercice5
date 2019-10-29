let swap = function() {
  //Changement de la source de l'image en fonction de l'ID de l'image
  this.src = './assets/img/' + this.id + '_2.jpg';
  // this.class = "nouvelleClasse"; NE FONCTIONNE PAS
}

document.getElementById('image1').onmouseenter = swap ;
document.getElementById('image2').onmouseenter = swap ;
document.getElementById('image3').onmouseenter = swap ;
document.getElementById('image4').onmouseenter = swap ;
document.getElementById('image5').onmouseenter = swap ;
