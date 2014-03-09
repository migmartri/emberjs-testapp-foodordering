 App.CurrentCompanyController = Ember.ObjectController.extend({
    isSignedIn: (function() {
      return this.get('content') !== null;
    }).property('content')
  });
