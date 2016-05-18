// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
slideShow();
var slideIndex = 0;

function slideShow(){
  var i;
  var pictures = document.getElementByClassName('fotosShow');
  for(i = 0; i < x.length; i++){
    pictures[i].style.display = "none";
  };
  slideIndex++;
  if(slideIndex > pictures.length) {slideIndex = 1}
  pictures[slideIndex-1].style.display = "block";
  setTimeout(slideShow, 3000); // cambia foto cada 3 segundos
};
