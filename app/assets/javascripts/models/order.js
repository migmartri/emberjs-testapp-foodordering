var attr = DS.attr;
App.Order = DS.Model.extend({
  line_items: DS.hasMany('LineItem'),
  created_at: attr()
});
