$(function() {
  $("#accordion p").hide().first().show();
  $("#accordion h4").on('click', function() {
    $("#accordion p").hide();
    $(this).next("p").show();
  });
});
