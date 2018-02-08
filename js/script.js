console.log("javascript is loaded!")
$(function(){

$(window).on('scroll', function(){
  if($(window).scrollTop()>500){
    var status = $('.picStat div');

      status.eq(0).animate({width:'25em'}, {duration: 1800});
      status.eq(1).animate({width:'10em'}, {duration: 1500});
      status.eq(2).animate({width:'15em'}, {duration: 1200});
      status.eq(3).animate({width:'25em'}, {duration: 800});
      status.eq(4).animate({width:'18em'}, {duration: 1200});
      status.eq(5).animate({width:'100%'}, {duration: 5200});
    // }
  }
})


})
