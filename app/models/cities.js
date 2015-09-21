import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  attractions: DS.attr(),
  image: DS.attr()
});


// attractions: DS.hasMany('attraction', {async: true})
