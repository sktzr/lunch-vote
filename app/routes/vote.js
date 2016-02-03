import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend( {
  model: function() {
    return this.get('store').findAll('restaurant');
  },

  setupController: function (controller, model) {
    controller.set('selectedList', []);
    controller.set('model', model);
  }
});
