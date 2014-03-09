  Ember.Application.initializer({
    name: 'currentCompany',
    initialize: function(container) {
      var attributes, store;
      store = container.lookup('store:main');
      attributes = $('meta[name="current-company"]').attr('content');
      if (attributes) {
        company = store.createRecord("company", JSON.parse(attributes));
        controller = container.lookup('controller:currentCompany').set('content', company);
        return container.typeInjection('controller', 'currentCompany', 'controller:currentCompany');
      }
    }
  });
