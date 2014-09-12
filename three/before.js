// some fake model layer or data from somewhere
var Users = {
  findAll: function() {
    return [
      'jack@jackfranklin.net',
      'jack@gocardless.com'
    ];
  }
};

var EmailSender = function() {};

EmailSender.prototype.send = function() {
  var users = Users.findAll();
  users.forEach(function(user) {
    this.sendTo(user);
  }, this);
};

EmailSender.prototype.sendTo = function(email) {
  console.log('SENT MAIL TO', email);
  // in here is where the email gets sent
};

new EmailSender().send();


