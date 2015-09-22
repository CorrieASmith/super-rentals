import Ember from 'ember';
// import config from './config/environment';

// var Router = Ember.Router.extend({
//   location: config.locationType
// });

// Router.map(function() {
//   this.route('cities');
// });

export default Ember.Route.extend({
  model() {
    return this.store.findAll('cities');
  },

  actions: {
    save(params) {
      var newCity = this.store.createRecord('cities', params);
      newCity.save();
      this.transitionTo('cities');
    },

    destroyCity(cities) {
      cities.destroyRecord();
      this.transitionTo('cities');
    }
  }
});
