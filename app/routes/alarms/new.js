import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return{
             title: "Alarmtitel",
             time:"07:00",
             on: true,
             repeat: false,
            };
    },

    actions:{
        save(newAlarmProperties){
            let newAlarm = this.store.createRecord('alarm', newAlarmProperties);
            newAlarm.save();
            this.transitionTo('index');
        }
    }
});
