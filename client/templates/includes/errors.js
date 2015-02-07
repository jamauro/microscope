Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

// rendered callback triggers once template has been rendered in browser
// this refers to the current template instance
Template.error.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function() {
    Errors.remove(error._id);
  }, 3000);
};