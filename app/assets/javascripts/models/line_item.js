var attr = DS.attr;
App.LineItem = DS.Model.extend({
  product: DS.belongsTo('Product'),
  order: DS.belongsTo('Order'),
  created_at: attr(),
  qty: attr('number', {defaultValue: 1})
});
