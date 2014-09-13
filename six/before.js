$(function() {
  if(location.hash && location.hash.indexOf("image") > -1) {
    var number = parseInt(location.hash.charAt(location.hash.length -1));
    $("ul").animate({
      "margin-left": number * -300
    }, function() {
      currentImage = number;
      $(".controls span").text("Current: " + (currentImage + 1));
    });
  }
  var timeout = setTimeout(function() {
    $(".left").trigger("click");
  }, 10000);

  var currentImage = 0;
  $(".left").click(function() {
    clearTimeout(timeout);
    if(currentImage == $("li").length - 1) {
      $("ul").animate({
        "margin-left": 0
      }, function() {
        currentImage = 0;
        $(".controls span").text("Current: " + (currentImage + 1));
      });
    } else {
      $("ul").animate({
        "margin-left": "-=300px"
      }, function() {
        currentImage+=1;
        $(".controls span").text("Current: " + (currentImage + 1));
      });
    }
    timeout = setTimeout(function() {
      $(".left").trigger("click");
    }, 10000);
    return false;
  });

  $(".right").click(function() {
    clearTimeout(timeout);
    if(currentImage == 0) {
      $("ul").animate({
        "margin-left": ($("li").length - 1) * -300
      }, function() {
        currentImage = $("li").length - 1;
        $(".controls span").text("Current: " + (currentImage + 1));
      });
    } else {
      $("ul").animate({
        "margin-left": "+=300px"
      }, function() {
        currentImage-=1;
        $(".controls span").text("Current: " + (currentImage + 1));
      });
    }
    timeout = setTimeout(function() {
      $(".left").trigger("click");
    }, 10000);
    return false;
  });
});
