App.CurrentOrderView = Ember.View.extend({
  templateName: 'current_order',
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      /* SideBar toggle */
      $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
      });
    });
  }
});
