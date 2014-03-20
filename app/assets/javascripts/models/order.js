var attr = DS.attr;
App.Order = DS.Model.extend({
  line_items: DS.hasMany('line_item'),
  suggestions: DS.hasMany('suggestion'),
  created_at: attr(),
  closed_at: attr(),
  order_number: attr(),
  aasm_state: attr(),
  lineItemsCount: (function(){
    var sum = 0;
    this.get('line_items').forEach(function(li){
      sum = sum + li.get('qty'); 
    });
    return sum;
  }).property('line_items.@each.qty')
});
