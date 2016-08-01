import './preloader.html'

$(()=> {
  $(window).load(()=> {
  	$('html, body').removeAttr('style');
    $("#loading").fadeOut(500);

    random = parseInt(Math.random() * 10);
    if(random > 5) {
      random = 1;
    }
    console.log(random);
    $('body').css({
      'background-image': 'url(/img/bg/' + random + '.jpg)'
    });
  });
});
