// http://emberjs.com/guides/models/using-the-store/

App.Store = DS.Store.extend({
  adapter: '-active-model'
});

DS.ActiveModelAdapter.reopen({
  namespace: 'api/v1'
});
