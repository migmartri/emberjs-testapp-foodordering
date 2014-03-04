attr = DS.attr;
App.Order = DS.Model.extend({
  user_sessions: DS.hasMany('LineItem'),
  created_at: attr()
});
