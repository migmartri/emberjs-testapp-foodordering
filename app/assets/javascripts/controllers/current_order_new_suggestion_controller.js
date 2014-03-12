App.CurrentOrderNewSuggestionController = Ember.ObjectController.extend({
  needs: ['currentOrder'],
  manualButtons: [
    Ember.Object.create({title: 'Create', clicked: "createSuggestion"}),
    Ember.Object.create({title: 'Cancel', dismiss: 'modal', clicked: 'cancel'})
  ],
  actions: {
    cancel: function(){
      this.transitionToRoute('currentOrder');
    },
    createSuggestion: function(){
      self = this;
      suggestion = this.get('model');
      suggestion.set('order', this.get('controllers.currentOrder').get('model'));
      suggestion.save().then(function(data){
        Bootstrap.GNM.push('Received!', "We'll think about it :)", 'success');
        self.transitionToRoute('currentOrder');
        Bootstrap.ModalManager.close('manualModal');
      });
    }
  }
});
