console.log("javascript is loaded!")


$(function(){

$(window).on('scroll', function(){
  if($(window).scrollTop()>600){
    var status = $('.picStat div');
      status.eq(0).animate({width:'70%'}, {duration: 1500});
      status.eq(1).animate({width:'70%'}, {duration: 1500});
      status.eq(2).animate({width:'40%'}, {duration: 1200});
      status.eq(3).animate({width:'40%'}, {duration: 800});
      status.eq(4).animate({width:'20%'}, {duration: 1200});
      status.eq(5).animate({width:'100%'}, {duration: 5200});
  }
})
//achievement slideDown
var achievement = $('.acWrapper');
  achievement.hide();
  $(window).on('scroll', function(){
    if($(window).scrollTop()>900){
      achievement.slideDown(1000);
    }
  })

  //portfolio slideDown menu
var projects = $('.projectSelector div p');
    projects.hide();
$(window).on('scroll', function(){
  if($(window).scrollTop()>1300){
      projects.slideDown(800);
  }
})

//testimonials slideDown
var testimon = $('.reWrapper');
  testimon.hide();
  $(window).on('scroll', function(){
    if($(window).scrollTop()>1700){
      testimon.slideDown(1000);
    }
  })

//contact form slideDown
var contact = $('.formContainer');
  contact.hide();
  $(window).on('scroll', function(){
    if($(window).scrollTop()>2000){
      contact.slideDown(1000);
    }
  })

//Portfolio selector click -> Display
$('.projectSelector div p').each(function(){ //each item on the menu is a sep p tag
  $(this).on('click', function(){
    var displaySection = $(this).attr("href"); //grab the href of that <p>
    $('section').hide(0); //hide the current section
    $(displaySection).slideDown(700); //display the section with the id === href
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



//IMAGE SLIDERS

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
  if (nextPic.length === 0) // when at the end of list of img
  {
    nextPic = $('.aslider div').first(); //then return to first img
  }
  activePic.removeClass('show').addClass('hide').css("z-index", -10);
  nextPic.addClass('show').removeClass('hide').css("z-index", 20);
  $('.aslider div').not([activePic, nextPic]).css("z-index", 1)
 // e.preventDefault();//not sure if it is needed
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
      //above line - imgprev is class of img src for empty modal. taking 'this' img's src and assigning it to modal img src
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


$('nav a').on('click', function(e) {
  e.preventDefault();
  // use the href of the link to identify what
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top; //offset grabs the coordinates of a element - we are grabbing the top in this scenerio
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});



  // Get currently displayed image id
  // var activePic = $('.reveal').attr('id');
  // console.log(activePic);
  // activePic.toggleClass('hidden');
  // for (prop in s){
  // if (activePic === prop);
  // console.log('true');}
  // Take that id and find it in the slide object (does it === s?)
  // for (prop in s){ //to find if the #id matches the key
  //   if (activePic === prop){


    // activePic.toggleClass('hidden');

  // Change to that image
  // Update the classes (hidden and reveal) accordingly



//this is for the top function
})



