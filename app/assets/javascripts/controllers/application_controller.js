App.ApplicationController = Ember.ObjectController.extend({
  actions: {
    logout: function(){
      /* Call logout and in the callback do a full refresh */
      controller = this;
      $.post('/api/v1/companies/logout').then(
        function(data){
          window.location.href = "/";
        }
      );
    }
  },
  currentPathDidChange: function() {
    App.set('currentPath', this.get('currentPath'));
  }.observes('currentPath'),
  inCurrentOrder: function(){
    return this.get('currentPath') == 'currentOrder.index';
  }.property('currentPath')
});
