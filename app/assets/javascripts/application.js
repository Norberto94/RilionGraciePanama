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

// crea el slide show de home
$(document).ready(function(){

  slideShow();
  var slideIndex = 0;

  function slideShow(){
    var i;
    var pictures = document.getElementsByClassName('fotoShow');

    for(i = 0; i < pictures.length; i++){
      $(pictures[i]).hide();
    };

    slideIndex++;
    if(slideIndex > pictures.length) {slideIndex = 1};
    $(pictures[slideIndex-1]).show();
    setTimeout(slideShow, 1500); // cambia foto cada 1.5 segundos
  };
});



