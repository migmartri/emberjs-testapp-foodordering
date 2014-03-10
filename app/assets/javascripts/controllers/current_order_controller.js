App.CurrentOrderController = Ember.ObjectController.extend({
  searchQuery: null,
  suggesting: false,
  suggestionText: null,
  actions: {
    createOrder: function(){
      controller = this;
      this.store.createRecord("order").save().then(function(order){
        controller.set('model', order);
      });
    },
    /* Add new Item to the line items*/
    addItem: function(product) {
      order = this.get('model');
      var store = this.store;

      var existing = this.store.filter('lineItem', function(li) { 
        return li.get('product').get('id') == product.get('id');
      }).then(function(existing) {
          if(existing.get('length') > 0){
            elem = existing.get('content')[0];
            elem.incrQty().save();
          }else{
            store.createRecord("lineItem", {product: product, order: order}).save();
          }
      });
    },
    /* Line Items management */
    removeLineItem: function(li){
      li.destroyRecord();
    }, /* Supports negative num*/
    incrLineItem: function(li, num){
      var new_qty = li.get('qty') + num;
      li.set('qty', new_qty);
      if(new_qty == 0){
        li.destroyRecord();
      }else{
        li.save();
      }
    },
    closeOrder: function(){
      controller = this;
      $.post('/api/v1/orders/' + this.get('id') + '/close', function(){
        controller.store.unloadAll('line_item');
        controller.store.unloadAll('order');
        controller.transitionToRoute('index');
      });
    },
    toggleSuggesting: function(){
      return this.set("suggesting", this.get('suggesting') ? false : true);
    },
    createSuggestion: function(){
      self = this;
      this.store.createRecord('suggestion', {order: this.get('model'), text: this.get('suggestionText')}).save().then(function(data){
        self.set('suggesting', false);
        self.set('suggestionText', null);
      });
    },
    removeSuggestion: function(sug){
      sug.destroyRecord();
    }
  },
  loadProducts: function(){
    controller = this;
    if(controller.get('model')){
      controller.store.find('product').then(function(products){
        controller.set('products', products);
        controller.set('all_products', products);
      });
    }
  }.observes('model'),
  searchedContent: function() {
    var regexp = new RegExp(this.get('searchQuery'), 'i');
    filtered = this.get('all_products').filter(function(item) {
      return regexp.test(item.get('title'));
    });
    controller.set('products', filtered);
  }.observes('searchQuery')
});
