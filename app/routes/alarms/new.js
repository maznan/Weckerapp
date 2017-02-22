import Ember from 'ember';

export default Ember.Route.extend({
      model(params){
        return{
             id: Date.now(),
             time:"07:00",
             title: "Alarmtitel",
             on: true,
             repeated: false,
            };
    },

    actions:{
        save(model){
            console.debug(model);
            this.transitionTo('index');
        }
    }
});
