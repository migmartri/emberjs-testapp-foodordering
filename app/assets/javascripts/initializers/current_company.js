  Ember.Application.initializer({
    name: 'currentCompany',
    after: "store",

    initialize: function(container, application) {
      var attributes, store, proxy;
      application.deferReadiness();

      store = container.lookup('store:main');
      attributes = $('meta[name="current-company"]').attr('content');

      proxy = App.CurrentCompanyObjectProxy.extend();
      container.register('company:current', proxy, {singleton: true});
      proxy = container.lookup('company:current');

      if (attributes) {
         company = store.createRecord("company", JSON.parse(attributes));
         proxy.set('content', company);
      }else{
        controller = container.lookup('controller:currentCompany');
      }
      application.inject('controller', 'currentCompany', 'company:current');
      application.inject('route', 'currentCompany', 'company:current');
      application.advanceReadiness();
    }
  });
