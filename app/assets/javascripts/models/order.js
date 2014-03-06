var attr = DS.attr;
App.Order = DS.Model.extend({
  line_items: DS.hasMany('line_item'),
  created_at: attr()
});
