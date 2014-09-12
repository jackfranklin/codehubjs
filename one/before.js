$(function() {
  $("a").click(function() {
    if($("p").is(":visible")) {
      $("p").hide();
    } else {
      $("p").show();
    }
    return false;
  });
});
