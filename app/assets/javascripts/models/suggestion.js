var attr = DS.attr;
App.Suggestion = DS.Model.extend({
  created_at: attr("date"),
  text: attr('string'),
  order: DS.belongsTo('order'),
});
