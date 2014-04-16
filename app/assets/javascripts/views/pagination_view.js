App.PaginationView = Ember.View.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  pageChanged: function() {
    this.rerender();
  }.observes('page'),
  render: function(buffer){
    var totalPages = this.get('totalPages');
    var currentPage = this.get('page');

    if (totalPages == 1) return;

    /* Prev page */
    buffer.push("<li");
    if(currentPage == 1) buffer.push(" class='disabled'");
    buffer.push("><a href='#' data-page='prev'>&laquo;</a></li>");

    for (var i=1; i<=totalPages; i++) {
      buffer.push("<li ");
      if(currentPage == i){
        buffer.push(" class='active'");
      }
      buffer.push("><a href='#' data-page='" + i + "'>"+ i +"</a></li>");
    }
    /* Next page */
    buffer.push("<li");
    if(currentPage == totalPages) buffer.push(" class='disabled'");
    buffer.push("><a href='#' data-page='next'>&raquo;</a></li>");
  },
  click: function(e){
    var $target = $(e.target);
    // Return if something in the View was clicked on that wasn't a button
    if (!$target.is('a') || $target.parent().hasClass('disabled')) return;
    var linkContent = $target.data('page');
    switch(linkContent){
      case 'prev':
        this.prevPage();
        break;
      case 'next':
        this.nextPage();
        break;
      default:
        this.loadPage(linkContent);
        break;
    }
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
