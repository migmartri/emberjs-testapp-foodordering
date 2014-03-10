var attr = DS.attr;
App.Order = DS.Model.extend({
  line_items: DS.hasMany('line_item'),
  suggestions: DS.hasMany('suggestion'),
  created_at: attr()
});
