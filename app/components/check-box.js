import Ember from 'ember';

export default Ember.Component.extend({
  restaurant: null,
  selected: false,
  count: 0,
  canSelectMore: Ember.computed('count', function () {
    return this.get('count') <= 2;
  }),
  actions: {
    selected: function () {
      if (this.get('canSelectMore') || ((this.get('canSelectMore') === false) && (this.get('selected')))) {
        this.toggleProperty('selected');
        this.sendAction('action', this.get('restaurant'), this.get('selected'));
      }
    }
  }
});
