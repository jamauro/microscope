Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
  this.route('postsList', {path: '/'});
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
});

// dataNotFound is a special hook provided by Iron Router
Router.onBeforeAction('dataNotFound', {only: 'postPage'});