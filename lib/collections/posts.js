Posts = new Meteor.Collection('posts'); // omitting var so that Posts collection will be available to our whole app

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});