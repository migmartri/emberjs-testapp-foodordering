App.IndexController = Ember.ObjectController.extend({
  needs: 'currentCompany',
  companyCode: null,
  actions: {
    checkCode: function(){
      self = this;
      $.post('/api/v1/companies/check_code', {code: this.get('companyCode')}).then(
        function(data){
          Bootstrap.GNM.push('Welcome!', 'Welcome to ' + data.company.name, 'success');
          window.location.reload();
          //company = self.store.createRecord('company', data.company);
          //self.get('controllers.currentCompany').set('content', company);
          //self.transitionToRoute('currentOrder');
        },
        function(){
         Bootstrap.GNM.push('Not found!', ' The code is incorrect', 'danger');
         console.warn("Code not found");
      })
    }

  }
});
