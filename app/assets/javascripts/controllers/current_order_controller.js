App.CurrentOrderController = Ember.ObjectController.extend({
  searchQuery: null,
  actions: {
    /* Add new Item to the line items*/
    addItem: function(product) {
      order = this.get('model');
      var store = this.store;

      var existing = this.store.filter('lineItem', function(li) {
        return (li.get('order').get('id') == order.get('id')) && li.get('product').get('id') == product.get('id');
      }).then(function(existing) {
          if(existing.get('length') > 0){
            elem = existing.get('content')[0];
            elem.incrQty().save();
          }else{
            store.createRecord("lineItem", {product: product, order: order,
                               title: product.get('title')}).save();
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
      Bootstrap.GNM.push('Closed!', 'Order closed!', 'success');
      $.post('/api/v1/orders/' + this.get('id') + '/close', function(){
        controller.store.unloadAll('line_item');
        controller.transitionToRoute('orders.show', controller.get('model'));
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
  }.observes('searchQuery'),


  initialize_websockets: function(){
    var controller = this;
    /* Creating websocket connection */
    var dispatcher = new WebSocketRails(window.location.host + '/websocket');
    dispatcher.on_open = function(data) {
      console.info('Websockets connection stablished');
    }
    /* Channel */
    var channel = dispatcher.subscribe('order-' + this.get('model').get('id'));

    /* Line Item updated */
    channel.bind('line_item_updated', function(data) {
      data = JSON.parse(data);
      controller.store.pushPayload("lineItem", data);
    });

    channel.bind('line_item_created', function(data) {
      data = JSON.parse(data);
      /* Because we don't have an ID when we create the product until the promise finalizes.
       * We got a race condition that duplicates the object, so as a workaround we can search
       * for the title instead,
       * NOTE: Not a good solution though
      */
      controller.store.filter('lineItem', function(li) {
        return (li.get('title') == data.line_item.title);
      }).then(function(existing){
          if(existing.get('length') == 0){
            controller.store.pushPayload("lineItem", data);
            //* We have a few issues here TODO, fix in the future
            //* 1 - pushPayload does not update the lineItem relationship
            //* 2 - pushPayload does not return the updated object so we need to search for it*/
            var item = controller.store.getById('line_item', data.line_item.id);
            if(item)
              controller.get('model').get('line_items').addObject(item);
          }});
    });

    channel.bind('line_item_deleted', function(data) {
      data = JSON.parse(data);
      var item = controller.store.getById('line_item', data.line_item.id);
      if(item)
        controller.store.unloadRecord(item);
    });

    channel.bind('order_closed', function(data) {
      console.warn('order closed: ' + data);
    });
  }
});
