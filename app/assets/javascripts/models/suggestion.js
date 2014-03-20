var attr = DS.attr;
App.Suggestion = DS.Model.extend({
  created_at: attr(),
  text: attr(),
  order: DS.belongsTo('order')
});
