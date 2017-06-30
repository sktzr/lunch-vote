import Ember from 'ember';

export default Ember.Controller.extend({
  // model: [],
  sortProperties: ['votes:desc'],
  sortedRestaurants: Ember.computed.sort('model', 'sortProperties'),
  restaurantVotes: Ember.computed.mapBy('sortedRestaurants', 'votes'),
  maxNumberOfVotes: Ember.computed.max('restaurantVotes'),
  actions: {
    clearVotes: function(){
      this.get('store').findAll('restaurant').then(function (restaurants) {
         restaurants.forEach(function(restaurant){
           restaurant.set('votes', 0);
           restaurant.set('winner', false);
           restaurant.save();
         });
      });
      return false;
    },
    breakTie: function(){
      const maxNumberOfVotes = this.get('maxNumberOfVotes');
      if (maxNumberOfVotes > 0) {
        this.get('store').findAll('restaurant').then(function (restaurants) {
            const tiedRestaurants = restaurants.filterBy('votes', maxNumberOfVotes);
            if (tiedRestaurants.length > 1 && !tiedRestaurants.any(r => r.get('winner') === true)) {
              const index = Math.floor((Math.random() * tiedRestaurants.length));
              tiedRestaurants[index].set('winner', true);
              tiedRestaurants[index].save();
            }
        });
      }
      return false;
    },

    // beginFinals: function(){
    //   var finalists = this.get('arrngedContent').slice(0,2);
    //   this.transitionToRoute('finals', finalists);
    // }
  }
});
