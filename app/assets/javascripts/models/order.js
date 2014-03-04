attr = DS.attr;
App.Order = DS.Model.extend({
  user_sessions: DS.hasMany('LineItems'),
  created_at: attr()
});
