import Ember from 'ember';

export default Ember.Route.extend({

    

    actions:{
        save(model){
            console.debug(model);
            this.transitionTo('index');
        }
    }
});
