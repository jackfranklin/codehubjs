var body = $("body");

var accordion = {
  init: function(selector) {
    this.elem = $(selector);
    this.elem.on('click', this.onClick.bind(this));
  },
  onClick: function() {
    // notice how the accordion know is not aware
    // that the carousel even exists
    body.trigger("accordionClick");
  }
};

var carousel = {
  init: function(selector) {
    this.elem = $(selector);
    body.on("accordionClick", this.stop.bind(this));
  },
  stop: function() {
    // stop the carousel auto continuing
  }
}

$(function() {
  accordion.init("#accordion");
  carousel.init("#carousel");
});
