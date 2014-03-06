var attr = DS.attr;
App.Product = DS.Model.extend({
  created_at: attr(),
  title: attr('string'),
  picture: attr('string'),
  picture_thumb: attr('string'),
  picture_medium: attr('string'),
  line_items: DS.hasMany('line_item')
});
