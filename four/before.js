var assert = function(x, desc) {
  if(!x) {
    console.error('FAIL', desc);
  }
}

var canSubscribe = function(userId, blog) {
};

// a user is able to subscribe to a blog unless:
// - the user created that blog
// - the user has been added as an admin to that blog
// - the blog is private
// - the user has already subscribed

var canSubscribeToPrivate = canSubscribe('abc', {
  creator: 'def',
  admins: [],
  private: true,
  subscribers: []
});

assert(canSubscribeToPrivate === false, "canSubscribeToPrivate");

var canSubscribeToOwn = canSubscribe('abc', {
  creator: 'abc',
  admins: [],
  private: false,
  subscribers: []
});

assert(canSubscribeToOwn === false, "canSubscribeToOwn");

var canSubscribeToAdmin = canSubscribe('abc', {
  creator: 'def',
  admins: ['abc'],
  private: false,
  subscribers: []
});

assert(canSubscribeToAdmin === false, "canSubscribeToAdmin");

var canSubscribeToSubscribed = canSubscribe('abc', {
  creator: 'def',
  admins: [],
  private: false,
  subscribers: ['abc']
});

assert(canSubscribeToSubscribed === false, "canSubscribeToSubscribed");

var canSubscribeOtherwise = canSubscribe('abc', {
  creator: 'def',
  admins: [],
  private: false,
  subscribers: []
});

assert(canSubscribeOtherwise === true, 'canSubscribeOtherwise');
