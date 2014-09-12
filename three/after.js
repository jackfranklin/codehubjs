// some fake model layer or data from somewhere
var Users = {
  findAll: function() {
    return [
      'jack@jackfranklin.net',
      'jack@gocardless.com'
    ];
  }
};

var EmailSender = function(users) {
  this.users = users;
};

EmailSender.prototype.send = function() {
  this.users.forEach(function(user) {
    this.sendTo(user);
  }, this);
};

EmailSender.prototype.sendTo = function(email) {
  console.log('SENT MAIL TO', email);
  // in here is where the email gets sent
};

var users = Users.findAll();
new EmailSender(users).send();


