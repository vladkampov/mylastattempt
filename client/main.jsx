import '../imports/ui/body.jsx';

$(() => {
    $('a[href^="#"]').click((e)=> {
        e.preventDefault()
        destination = $(e.target).parent().attr('href')
        $('body').animate({scrollTop: $(destination).offset().top}, 500)
    })
});
