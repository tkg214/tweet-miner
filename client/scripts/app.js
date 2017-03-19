$(function() {

  function SetHeight(){
      const h = $(window).height();
      const n = $('nav').height();
      const vh = ((h - n) / h) * 100 - 0.1;
      $('.tweet-container').css('height', vh + 'vh');
  }

  $(document).ready(SetHeight);
  $(window).resize(SetHeight);

});
