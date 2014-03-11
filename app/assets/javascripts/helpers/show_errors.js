Ember.Handlebars.helper('show_errors', function(errors) {
  var html = [];
  if (errors) {
      $.each(errors, function(index, error) {
          html.push(error.message)
      });
    html = html.join(', ');
    return new Handlebars.SafeString('<span class="label label-danger">' + html.htmlSafe() + '</span>');
  }
})
