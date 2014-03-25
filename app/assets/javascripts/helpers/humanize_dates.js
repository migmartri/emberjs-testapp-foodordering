Ember.Handlebars.registerBoundHelper('formatted_time', function(value) {
  return moment(value).format('MMMM Do YYYY, h:mm A');
});
