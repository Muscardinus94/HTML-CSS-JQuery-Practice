$('.btn li').click(function(){
  $(this).addClass('active');
  $(this).siblings('li').removeClass('active');

  let tab = $(this).attr('data-alt');
  $('.tabs div').removeClass('active');
  $('#'+tab).addClass('active');
});