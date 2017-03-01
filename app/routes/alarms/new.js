import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return this.store.createRecord('alarm', {
             title: "Alarmtitel",
             time:"07:00",
             on: true,
             repeat: false,
            });
    },

    actions:{
        save(newAlarm){
            this.modelFor('application').push(newAlarm);
            this.transitionTo('index');
        }
    }
});
