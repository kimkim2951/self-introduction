$(function(){
  $('#youtube').YTPlayer();
  $('.youtube_valume').on('click', function() {
    $('#youtube').YTPToggleVolume();
    $(this).toggleClass('active');
  });
});