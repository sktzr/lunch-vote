import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  menu: DS.attr('string'),
  visited: DS.attr('boolean'),
  comments: DS.attr('string'),
  votes: DS.attr('number')
});
