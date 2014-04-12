App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function(transition){
    /* Check we have set the current company and redirect otherwise */
    if(transition.targetName != 'index' && !this.get("currentCompany").get('isSignedIn')){
      this.transitionToRoute('index');
    }
  },
  actions: {
    loading: function() {
      if ($("#progress").length === 0) {
        $("body").append($("<div><dt/><dd/></div>").attr("id", "progress"));
        $("#progress").width((50 + Math.random() * 30) + "%");
      }
      this.router.one('didTransition', function() {
        $("#progress").width("101%").delay(200).fadeOut(400, function() {
          $(this).remove();
        });
      });
      /* Bubble down */
      return true;
    }
  }
});
