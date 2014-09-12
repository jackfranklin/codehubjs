var toggle = function() {
  var para = $("p");
  $("a").on("click", function(event) {
    event.preventDefault();
    para.toggle();
  });
};

$(toggle);
