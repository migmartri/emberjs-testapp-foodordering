// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('orders');
  this.resource('order', {
    path: '/o/:order_id'
  });
});


App.Router.reopen({
  location: 'history'
});

