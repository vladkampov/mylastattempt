import '../imports/ui/body.jsx';

$(() => {
    $('a[href^="#"]').click((e)=> {
        e.preventDefault()
        destination = $(e.target).attr('href');
        $('body, html').animate({scrollTop: $(destination).offset().top}, 500, 'swing')
    })
});
