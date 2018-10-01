console.log("javascript is loaded!")


$(function(){

$(window).on('scroll', function(){
  if($(window).scrollTop()>600){
    var status = $('.picStat div');
    var speed = [3000, 1200, 1500, 1200,3000, 4000, 1800, 4000,1900, 2500,3000,3000,2100, 1000,4000]
    var barLength = ['100%', '95%','80%','80%','40%','40%','64%','75%','64%','65%','68%','40%']
    for(i=0; i< status.length; i++){
      status.eq(i).animate({width: barLength[i]}, {duration: speed[i]});
    }
  }
})
//achievement slideDown
var achievement = $('.acWrapper');
  achievement.hide();
  $(window).on('scroll', function(){
    if($(window).scrollTop()>800){
      achievement.slideDown(1000);
    }
  })

  //portfolio slideDown menu
var projects = $('.portfolioWrapper');
    projects.hide();
$(window).on('scroll', function(){
  if($(window).scrollTop()>1200){
      projects.slideDown(800);
  }
})

//testimonials slideDown
var testimon = $('.reWrapper');
  testimon.hide();
  $(window).on('scroll', function(){
    if($(window).scrollTop()>1600){
      testimon.slideDown(1000);
    }
  })


//Portfolio selector click -> Display
$('.projectSelector div p').each(function(){
  $(this).on('click', function(){
    var displaySection = $(this).attr("href");
    $('section').hide(0);
    $(displaySection).slideDown(700);
  })
})

//FORM VALIDATION
$('form').on('submit', function(event){
  event.preventDefault();
  $('form input, form textarea').each(function() {
    if ($(this).val() === ""){
      $(this).addClass('error');
      $(this).next('#insertSomething').show();
    } else {
      $(this).removeClass("error");
      $(this).next('#insertSomething').hide();
    }
  })
})



// IMAGE SLIDERS
// https://snook.ca/archives/javascript/simplest-jquery-slideshow
  setInterval(function(){
  $('.slider div:first-child').addClass('hidden').removeClass('reveal').css("z-index", -10)
  .next('div').removeClass('hidden').addClass('reveal').css("z-index", 20)
  .end('').appendTo('.slider').css("z-index", 1)} //orignal element returns to slider (first-child is going back to the back of slider)
  ,4000); //execute function every 4000 milliseconds


//Image Slider with help from https://www.youtube.com/watch?v=64tNZ8bE4h0
$('.rightButton').on('click', function() {
  var activePic = $('.reveal');
  var nextPic = activePic.next();

  if (nextPic.length === 0) // when at the end of list of img
  {
    nextPic = $('.slider div').first(); //then return to first img
  }
    activePic.removeClass('reveal').addClass('hidden').css("z-index", -10);
    nextPic.addClass('reveal').removeClass('hidden').css("z-index", 20);
    $('.slider div').not([activePic, nextPic]).css("z-index", 1)
  })

$('.leftButton').on('click', function(){
  var activePic =$('.reveal');
  var nextPic = activePic.prev();
  if(nextPic.length === 0)
  {
    nextPic = $('.slider div').last();
  }
  activePic.removeClass('reveal').addClass('hidden').css("z-index", -10);
  nextPic.addClass('reveal').removeClass('hidden').css("z-index", 20);
  $('.slider div').not([activePic, nextPic]).css("z-index", 1);
})





//slider for achievement section
$('.achrightButton').on('click', function() {
  var activePic = $('.show');
  var nextPic = activePic.next();
  if (nextPic.length === 0)
  {
    nextPic = $('.aslider div').first();
  }
  activePic.removeClass('show').addClass('hide').css("z-index", -10);
  nextPic.addClass('show').removeClass('hide').css("z-index", 20);
  $('.aslider div').not([activePic, nextPic]).css("z-index", 1)
})

$('.achleftButton').on('click', function(){
  var activePic =$('.show');
  var nextPic = activePic.prev();
  if(nextPic.length === 0)
  {
    nextPic = $('.aslider div').last();
  }
  activePic.removeClass('show').addClass('hide').css("z-index", -10);
  nextPic.addClass('show').removeClass('hide').css("z-index", 20);
  $('.aslider div').not([activePic, nextPic]).css("z-index", 1);
})


// modal - bootstrap
$(function() {
    $('.popup').on('click', function(e) {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
           e.preventDefault();
    });
});


//hamburger
// https://www.htmlgoodies.com/beyond/cms/creating-a-hamburger-menu-with-html-css-and-jquery.html
 $(".hamburger").on('click', function(e) {
    $(".menu").toggleClass("menuShow");
    e.preventDefault();
  });


$('.smooth').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top; //offset grabs the coordinates of a element - we are grabbing the top in this scenerio
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});


})



