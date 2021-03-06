// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require pre_app
//= require jquery
//= require jquery_ujs
//= require jquery.ui.effect.all
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require plugins/masonry.pkgd.min.js
//= require plugins/imagesloaded.pkgd.min.js
//= require ember-addons.bs_for_ember/dist/js/bs-core.min
//= require ember-addons.bs_for_ember/dist/js/bs-growl-notifications.min
//= require ember-addons.bs_for_ember/dist/js/bs-notifications.min
//= require ember-addons.bs_for_ember/dist/js/bs-modal.min
//= require ember-addons.bs_for_ember/dist/js/bs-button.max
//= require momentjs/min/moment.min
//= require bootstrap/dropdown
//= require bootstrap/collapse
//= require websocket_rails/main
//= require_self
//= require ember-app

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_ACTIVE_GENERATION: true,
  currentPath: ''
});


//= require_tree .

$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

