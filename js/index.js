function aboutToggle(){
    $('.about-toggle-item-title').on('click', function () {
        $(this).closest('.about-toggle').find('.about-toggle-item-body').slideUp();
        $(this).closest('.about-toggle-item').find('.about-toggle-item-body').slideToggle();
    });
}



/*function aboutToggle()
{
$('.about-toggle-item-title').on('click',function(){
  $(this).closest('.about-toggle-item').find('.about-toggle-item-body').slideToggle();
});
}*/
aboutToggle();
$('.main-content').css('opacity','1');