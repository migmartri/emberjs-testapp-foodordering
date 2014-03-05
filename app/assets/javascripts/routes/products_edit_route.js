App.ProductEditRoute = Ember.Route.extend({
  model: function(){
  	/* TODO, we can not access to the parameter here, we need to access the object in the parent */
  	return this.modelFor('product');
  }
});
