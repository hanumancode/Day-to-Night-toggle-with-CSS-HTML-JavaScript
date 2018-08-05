$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('body').toggleClass('dark')
        $('h2').toggleClass('dark')
    })
});