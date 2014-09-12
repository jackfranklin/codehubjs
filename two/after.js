var accordion = function() {
  var accordion = $('#accordion');
  var headings = accordion.find('h4');
  var content = accordion.find('p');

  var transition = function(paraToShow) {
    content.hide();
    paraToShow.show();
  };

  transition(content.first());

  headings.on('click', function() {
    transition($(this).next('p'));
  });

};
$(accordion);
