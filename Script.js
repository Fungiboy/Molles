

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
     
        window.location.hash = hash;
      });
    }
  });
});

/*
$(function(){
  var stickyHeaderTop = $('#container').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyHeaderTop ) {
      $('#container').css({position: 'fixed', top: '0px'});
      $('#sticky').css('display', 'block');
    } else {
      $('#container').css({position: 'static', top: '0px'});
      $('#sticky').css('display', 'none');
    }
  });
});
*/