import Ember from 'ember';

export default Ember.Controller.extend({
  restaurantSorting: ['name'],
  sortedRestaurants: Ember.computed.sort('model', 'restaurantSorting'),
  actions: {
    updateMenu: function(restaurant){
      restaurant.set('menu', restaurant.get('menu'));
      restaurant.save();
    },
    updateName: function(restaurant){
      restaurant.set('name', restaurant.get('name'));
      restaurant.save();
    },
    deleteRestaurant: function(restaurant){
      if (confirm("Are you sure you want to delete this restaurant from the database")){
        restaurant.deleteRecord();
        restaurant.save();
      }
    },

    toggleVisited: function(restaurant){
      restaurant.toggleProperty('visited');
      restaurant.save();
    }
  }

});
