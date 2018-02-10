console.log("javascript is loaded!")
$(function(){

$(window).on('scroll', function(){
  if($(window).scrollTop()>600){
    var status = $('.picStat div');
      status.eq(0).animate({width:'25em'}, {duration: 1500});
      status.eq(1).animate({width:'23em'}, {duration: 1500});
      status.eq(2).animate({width:'16em'}, {duration: 1200});
      status.eq(3).animate({width:'7.5em'}, {duration: 800});
      status.eq(4).animate({width:'5.5em'}, {duration: 1200});
      status.eq(5).animate({width:'100%'}, {duration: 5200});
  }
})

var projects = $('.projectSelector div p');
    projects.hide();
$(window).on('scroll', function(){
  if($(window).scrollTop()>900){
      projects.slideDown(800);
  }
})


$('.projectSelector div p').each(function(){
  $(this).on('click', function(){
    var displaySection = $(this).attr("href");
    console.log(displaySection);
    $('section').hide(0);
    $(displaySection).slideDown(100);
  })
})



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


//slider https://snook.ca/archives/javascript/simplest-jquery-slideshow
$('.slider img:gt(0)').hide(); //gt(0) means hide every img after img[index 0]
  setInterval(function(){
  $('.slider :first-child').fadeOut(0)
  .next('img').toggleClass('reveal').fadeIn(800)
  .end('').appendTo('.slider')} //orignal element returns to slider (first-child is going back to the back of slider)
  ,4000); //execute function every 3000 milliseconds




  var slide = $('.slider img');
  var n = slide.length;
  // var grabId = slide.attr("id")
  for (var i =0; i < n; i++){
     $('#id').on('click', function(){

      slide[i].hide();
     slide[i+1].show();
     console.log("hello")
  })}

$('rightArrow').on('click', function() {
  // Get currently displayed image id
  // Take that id and find it in the slide object
  // Change to that image
  // Update the classes (hidden and reveal) accordingly
})



// array of objects with scroll coordinates
// when scrolltop === object value
// execute



//this is for the top function
})



