import Ember from 'ember';

export default Ember.Controller.extend({
  selectedList: [],
  sortProperties: ['visited'],
  restaurantSorting: ['name'],
  sortField: "",
  sortAscend: true,
  sortedOnName: Ember.computed.equal("sortField", "name"),
  sortedOnNeighborhood: Ember.computed.equal('sortField', "neighborhood"),
  sortedOnVisited: Ember.computed.equal('sortField', "visited"),
  sortedOnComments: Ember.computed.equal('sortField', "comments"),

  sortedRestaurants: (function (){
    let restaurants = this.get('model');
    if (this.get('sortField')) {
      restaurants = restaurants.sortBy(this.get('sortField'));
      if (!this.get('sortAscend')) {
        restaurants = restaurants.reverse();
      }
    }
    return restaurants;
  }).property("sortAscend", "sortField", 'model.[]'),
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
    },
    sortBy(field){
      if (this.get("sortField") !== field) {
        this.set("sortAscend", true);
        this.set("sortField", field);
      } else {
        if (Ember.isPresent(this.get("sortField"))) {this.toggleProperty('sortAscend');}
        this.set('currentPage', 1);
      }
    },
  }
});
