let swap = function() {
  this.src = "./assets/img/" + this.id + "_2.jpg";
}

document.getElementById('image1').onmouseenter = swap ;
document.getElementById('image2').onmouseenter = swap ;
document.getElementById('image3').onmouseenter = swap ;
document.getElementById('image4').onmouseenter = swap ;
document.getElementById('image5').onmouseenter = swap ;
