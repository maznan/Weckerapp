import Ember from 'ember';

export default Ember.Route.extend({
     model(){
         return this.store.findAll('alarm');
     },

     actions:{
         toggleOnOff(alarm){
            if(alarm.get('on')){
                alarm.set('on', false);
            }
            else{
                alarm.set('on', true);
            };
            alarm.save();
        },

         toggleMonday(alarm){
            if(alarm.get('monday')){
                alarm.set('monday', false);
            }
            else{
                alarm.set('monday', true);
            };
            alarm.save();
        },
        toggleThuesday(alarm){
            if(alarm.get('thuesday')){
                alarm.set('thuesday', false);
            }
            else{
                alarm.set('thuesday', true);
            };
            alarm.save();
        },
        toggleWednsday(alarm){
            if(alarm.get('wednsday')){
                alarm.set('wednsday', false);
            }
            else{
                alarm.set('wednsday', true);
            };
            alarm.save();
        },
        toggleThursday(alarm){
            if(alarm.get('thursday')){
                alarm.set('thursday', false);
            }
            else{
                alarm.set('thursday', true);
            };
            alarm.save();
        },
        toggleFriday(alarm){
            if(alarm.get('friday')){
                alarm.set('friday', false);
            }
            else{
                alarm.set('friday', true);
            };
            alarm.save();
        },
        toggleSaturday(alarm){
            if(alarm.get('saturday')){
                alarm.set('saturday', false);
            }
            else{
                alarm.set('saturday', true);
            };
            alarm.save();
        },
        toggleSunday(alarm){
            if(alarm.get('sunday')){
                alarm.set('sunday', false);
            }
            else{
                alarm.set('sunday', true);
            };
            alarm.save();
        }
     }
});
