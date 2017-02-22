import Ember from 'ember';

export default Ember.Route.extend({

    model(params){
        return{
             id: 1,
             time:"17:00",
             title: "Erinnerung",
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
