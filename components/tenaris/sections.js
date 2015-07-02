$(function(){
  $(document).on ('click','.goto',function() {
    var id = $(this).attr('data-name');
    $('.page').animate({
      scrollTop: $("#"+id).offset().top
    }, 1000);
  });
});