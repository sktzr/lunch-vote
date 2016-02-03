import Ember from 'ember';

export default Ember.Component.extend({
  restaurant: null,
  selected: false,
  actions: {
    selected: function () {
      const restaurant = this.get('restaurant');
      this.toggleProperty('selected');
      this.sendAction('action', this.get('restaurant'), this.get('selected'));
    }
  }
});
