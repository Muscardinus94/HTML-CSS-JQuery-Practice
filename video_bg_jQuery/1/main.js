$('.trigger').click(function(){
  $(this).toggleClass('active');
  $('.modal-gnb').fadeToggle();
});

// Audio Controls
let bgm = document.querySelector('#myAudio');
// console.log(bgm);
bgm.volume = 0.2;
// Audio Volume : 0~1