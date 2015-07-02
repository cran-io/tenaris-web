$(function(){
  $(document).on ('click','.goto',function() {
    var id = $(this).attr('id');
    $('.page').animate({
      scrollTop: $("#"+id).offset().top
    }, 1000);
  });
});