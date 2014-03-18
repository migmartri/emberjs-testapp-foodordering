// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('currentOrder', {path: '/c'}, function(){
    this.route('new_suggestion', {path: '/suggestion/new' });
  });

  this.resource('orders', { path: '/admin/orders' }, function(){
   this.route('show', {path: '/:order_id'});
  });

  this.resource('products', {path: '/admin/products'}, function(){
    this.route('new');
    this.route('edit', {path: '/:product_id/edit'});
  });
  //this.resource('product', {path: '/admin/products/:product_id'}, function(){
  //  this.route('edit');
  //});

});


App.Router.reopen({
  location: 'history'
});

