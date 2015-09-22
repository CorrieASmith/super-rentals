import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        image: this.get('image'),
      };
      this.set('addNewCity', false),
      this.sendAction('save', params);
    }
  }
});
