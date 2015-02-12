Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) &&
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createMentionNotification = function(username, comment) {
  check(username, String);
  var user = Meteor.users.findOne({username: username});
  var post = Posts.findOne(comment.postId);
  if (user) {
    Notifications.insert({
      userId: user._id,
      postId: post._id,
      postTitle: post.title,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};

createCommentNotification = function(comment) {
  var post = Posts.findOne(comment.postId);
  if (comment.userId !== post.userId) {
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      postTitle: post.title,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};