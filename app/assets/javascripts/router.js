// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('currentOrder', {path: '/c'});
  this.resource('orders');
  this.resource('order', {
    path: '/o/:order_id'
  });
  this.resource('products', function(){
    this.route('new');
  });
  this.resource('product', {path: '/products/:product_id'}, function(){
    this.route('edit');
  });
});


App.Router.reopen({
  location: 'history'
});

