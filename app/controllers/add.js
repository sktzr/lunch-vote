import Ember from 'ember';

export default Ember.Controller.extend({
  isCreatingNewRestaurant: false,
  nameInput: '',
  menuInput: '',
  commentInput: '',

  actions: {
    createNewRestaurant: function() {
      let controller = this;
      this.get('store').createRecord("restaurant", {
        name: this.get('nameInput'),
        menu: this.get('menuInput'),
        comments: this.get('commentInput'),
        visited: false,
        votes: 0
      }).save().then (function(){
        controller.set('nameInput', '');
        controller.set('menuInput', '');
        controller.set('commentInput');
        controller.transitionToRoute('vote');
      }, function(reject){
        console.log('Error ' + reject.message);
        }
      );
      return false;
    }
  }
});
