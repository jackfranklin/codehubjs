var accordion = {
  init: function(selector) {
    this.elem = $(selector);
    this.elem.on('click', this.onClick.bind(this));
  },
  onClick: function() {
    // we want to stop the carousel autocontinuing if they
    // are clicking on something else
    carousel.stop();
  }
};

var carousel = {
  init: function(selector) {
    this.elem = $(selector);
  },
  stop: function() {
    // stop the carousel auto continuing
  }
}

$(function() {
  accordion.init("#accordion");
  carousel.init("#carousel");
});
