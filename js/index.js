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

/*message after form submit of get in touch*/
  document.getElementById("btn-form-submit").onclick=function(){
  
  var display=document.querySelector('.dialog').style.display;
  if(display===''|| display==='none')
  {
    document.querySelector('.dialog').style.display='block';
  }
  else{
    document.querySelector('.dialog').style.display='none';
  }


document.querySelector('.dialog .close').onclick=function()
{
  document.querySelector('.dialog').style.display='none';
}

document.getElementById("form-contact").onsubmit();
};
