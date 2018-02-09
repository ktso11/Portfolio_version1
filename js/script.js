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


// $(window).on('scroll', function(){
//   if($(window).scrollTop()> 0){
//       $('.fa-address-card').animate({'margin-right': '-5em'}, {duration: 400});
//   }
// })


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





// array of objects with scroll coordinates
// when scrolltop === object value
// execute



//this is for the top function
})



