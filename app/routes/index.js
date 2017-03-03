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
        }
     }
});
