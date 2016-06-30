import './preloader.html'

$(()=> {
  $(window).load(()=> {
  	$('html, body').removeAttr('style')
    $("#loading").fadeOut(500)
  })
})