// fake database thing
// this could easily be an AJAX req or something similar
var database = {
  users: {
    findAll: function() {
      return ['jack@jackfranklin.net', 'jack@gocardless.com']
    }
  }
};
var EmailSender = function() {};

EmailSender.prototype.send = function() {
  var users = database.users.findAll();
  users.forEach(function(user) {
    this.sendTo(user);
  }, this);
};

EmailSender.prototype.sendTo = function(email) {
  console.log('SENT MAIL TO', email);
  // in here is where the email gets sent
};

new EmailSender().send();


