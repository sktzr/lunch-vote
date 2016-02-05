import Ember from 'ember';

export default Ember.Controller.extend({
  selectedList: [],
  sortProperties: ['visited'],
  restaurantSorting: ['name'],
  sortedRestaurants: Ember.computed.sort('model', 'restaurantSorting'),
  actions: {
    vote: function() {
        var selectedList = this.get('selectedList');
        selectedList.forEach( function(restaurant) {
          var votes = restaurant.get('votes');
          restaurant.set('votes', votes+1);
          restaurant.save();
        });
       this.transitionToRoute('results');
    },
    checked: function(restaurant, isSelected) {
      let selectedList = this.get('selectedList');
      if (isSelected) {
        if (selectedList.length < 3) {
            selectedList.addObject(restaurant);
        }
      } else {
        selectedList.removeObject(restaurant);
      }

      return false;
    }
  }
});
