/* INSTALLATION AND REQUIREMENTS
* 1 - Use ember version that supports query-parameters-new at the time of the 
* writing only canary version does.
* 
* 2 - Add the following code to your route, controller and template, please
*     notice that the model action in the route needs to be implemented with your
*     resource.
*
* 2.1 - Route
*  queryParams: {
*    page: {
*      refreshModel: true 
*    }
*  },
*  model: function(params){
*    NOTE, Load your model using the params.page parameter
*  }
*
* 2.2 - Controller
*    page: 1,
*    totalPages: (function(){
*      return this.store.metadataFor([YOURMODEL])['total_pages'];
*    }).property(),
*   actions: {
*    loadPage: function(pageNumber){
*      this.transitionToRoute({queryParams: {page: pageNumber}});
*    }
* 
* 2.3 - Template
*  {{ember-paginate page=page totalPages=totalPages action="loadPage"}}
*  You can also pass some optional parameters as innerWindow or outerWindow
*
* */
App.EmberPaginateComponent = Ember.Component.extend({
  tagName: 'ul',
  innerWindow: 2,
  outerWindow: 0,
  classNames: ['pagination'],
  pageChanged: function() {
    this.rerender();
  }.observes('page'),
  render: function(buffer){
    var totalPages = this.get('totalPages');
    var currentPage = this.get('page');
    var gapWritten = false;

    if (totalPages < 2) return;

    /* Prev page */
    buffer.push("<li");
    if(currentPage == 1) buffer.push(" class='disabled'");
    buffer.push("><a href='#' data-page='prev'>&laquo;</a></li>");
    /* EO Prev page */

    for (var i=1; i<=totalPages; i++) {
      if(this.get('relevantPages').contains(i)){
        gapWritten = false;
        buffer.push("<li ");
        if(currentPage == i){
          buffer.push(" class='active'");
        }
        buffer.push("><a href='#' data-page='" + i + "'>"+ i +"</a></li>");
      }else{
        if(!gapWritten){
          buffer.push("<li class='gap disabled'><a>...</a></li>");
          gapWritten = true;
        }
      }
    }

    /* Next page */
    buffer.push("<li");
    if(currentPage == totalPages) buffer.push(" class='disabled'");
    buffer.push("><a href='#' data-page='next'>&raquo;</a></li>");
    /* EO Next page */
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
    return false; /* Stop event propagation */
  },
  loadPage: function(pageNumber){
    return this.sendAction('action', pageNumber);
  },
  nextPage: function(){
    this.loadPage(this.get('page') + 1);
  },
  prevPage: function(){
    this.loadPage(this.get('page') - 1);
  },
  relevantPages: (function(){
    /* Calculates an array of the visible pages based
    * on the outerWindow/innerWindow properties, based on the kaminari solution
    * https://github.com/amatsuda/kaminari/blob/master/lib/kaminari/helpers/paginator.rb */
    var left_window_plus_one = [], right_window_plus_one = [], inner_window_plus_each_sides = [];
    /* Left window */
    for (var i=1; i<= this.get('outerWindow') + 1; i++) {
      left_window_plus_one.push(i);
    }

    /* Right window */
    var from_window = this.get('totalPages') - this.get('outerWindow');
    for (var i= from_window; i<= this.get('totalPages'); i++) {
      right_window_plus_one.push(i);
    }

    /* Inner Window */
    var from_window = this.get('page') - this.get('innerWindow');
    var to_window = this.get('page') + this.get('innerWindow');

    for (var i= from_window; i<= to_window; i++) {
      if(i > 0 && i <= this.get('totalPages'))
        inner_window_plus_each_sides.push(i);
    }
    /* Return the sum of the three ranges */
    return left_window_plus_one.concat(inner_window_plus_each_sides, right_window_plus_one);
  }).property('page')
});
