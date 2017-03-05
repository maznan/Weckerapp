import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return{
             title: "Alarmtitel",
             time:"07:00",
             on: true,
             monday: true,
             thuesday: true,
             wednsday: true,
             thursday: true,
             friday: true,
             saturday: true,
             sunday: true
            };
    },

    actions:{
        save(newAlarmProperties){
            let newAlarm = this.store.createRecord('alarm', newAlarmProperties);
            newAlarm.save();
            this.transitionTo('index');
        },

        toggleMonday(model){
            if (model.monday){
                Ember.set(model, 'monday', false);
            }
            else{
                Ember.set(model, 'monday', true);
            }
        },
        toggleThuesday(model){
            if (model.thuesday){
                Ember.set(model, 'thuesday', false);
            }
            else{
                Ember.set(model, 'thuesday', true);
            }
        },
        toggleWednsday(model){
            if (model.wednsday){
                Ember.set(model, 'wednsday', false);
            }
            else{
                Ember.set(model, 'wednsday', true);
            }
        },
        toggleThursday(model){
            if (model.thursday){
                Ember.set(model, 'thursday', false);
            }
            else{
                Ember.set(model, 'thursday', true);
            }
        },
        toggleFriday(model){
            if (model.friday){
                Ember.set(model, 'friday', false);
            }
            else{
                Ember.set(model, 'friday', true);
            }
        },
        toggleSaturday(model){
            if (model.saturday){
                Ember.set(model, 'saturday', false);
            }
            else{
                Ember.set(model, 'saturday', true);
            }
        },
        toggleSunday(model){
            if (model.sunday){
                Ember.set(model, 'sunday', false);
            }
            else{
                Ember.set(model, 'sunday', true);
            }
        },
    }
});
