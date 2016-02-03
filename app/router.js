import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('vote');
  this.route('results');
  this.route('add');
  this.route('update');
});

export default Router;
