App.CurrentCompanyObjectProxy = Ember.ObjectProxy.extend({
   isSignedIn: (function() {
     return this.get('content') !== null;
   }).property('content')
});
