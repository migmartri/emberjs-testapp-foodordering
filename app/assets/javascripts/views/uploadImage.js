App.UploadImageView = Ember.TextField.extend({
    type: 'file',
    change: function(evt) {
      var self = this;
      var input = evt.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var that = this;
        reader.onload = function(e) {
          var fileToUpload = e.srcElement.result;
          self.get('controller').set(self.get('name'), fileToUpload);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
});
