// Local (client-only) collection
// Set to null since collection's data will never be saved to server-side database
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message});
};