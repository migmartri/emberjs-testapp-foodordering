App.PaginationView = Ember.View.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  pageChanged: function() {
    this.rerender();
  }.observes('page'),
  render: function(buffer){
    for (var i=1; i<=this.get('totalPages'); i++) {
      buffer.push("<li ");
      if(this.get('page') == i){
        buffer.push(" class='active'");
      }
      buffer.push("><a href='#'>"+ i +"</a></li>");
    }
  },
  click: function(e){
    var $target = $(e.target);
    // Return if something in the View was clicked on that wasn't a button
    if (!$target.is('a')) return;
    this.loadPage($target.text());
    return false; /* Stop propagation */
  },
  loadPage: function(pageNumber){
    this.get('controller').transitionToRoute({queryParams: {page: pageNumber}});
  },
  nextPage: function(){
    this.loadPage(this.get('page') + 1);
  },
  prevPage: function(){
    this.loadPage(this.get('page') - 1);
  }
});
