import './preloader.html'

$(()=> {
  $(window).load(()=> {
    $("#loading").fadeOut(500);
  })
})