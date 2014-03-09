App.IndexController = Ember.ObjectController.extend({
  companyCode: null,
  actions: {
    checkCode: function(){
      self = this;
      $.post('/api/v1/companies/check_code', {code: this.get('companyCode')}).then(
        function(data){
          self.transitionToRoute('currentOrder');
        },
        function(){
         console.warn("Code not found");
      })
    }
  }
});
