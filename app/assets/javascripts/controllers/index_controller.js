App.IndexController = Ember.ObjectController.extend({
  companyCode: null,
  actions: {
    checkCode: function(){
      self = this;
      $.post('/api/v1/companies/check_code', {code: this.get('companyCode')}).then(
        function(data){
          window.location.reload();
          company = self.store.createRecord('company', data);
          self.controllerFor('currentCompany').set('model', company);
          self.transitionToRoute('currentOrder');
        },
        function(){
         console.warn("Code not found");
      })
    }
  }
});
