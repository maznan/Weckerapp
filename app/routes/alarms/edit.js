import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.store.findRecord('alarm', params.id);
    },

    // Generic Rollback for dirty models
    deactivate(){
        let model = this.get('currentModel');
        if (model.get('hasDirtyAttributes')){
            model.rollbackAttributes();
        }
    },

    actions:{
        save(){
            let model = this.get('currentModel');
            model.save().then(() => this.transitionTo('index'));
            
        },

        toggleOnOff(model){
            if(Ember.get(model,'on')){
                Ember.set(model,'on', false);
            }
            else{
                Ember.set(model,'on', true);
            }
        },

        toggleMonday(model){
            if (Ember.get(model, 'monday')){
                Ember.set(model, 'monday', false);
            }
            else{
                Ember.set(model, 'monday', true);
            }
        },
        toggleThuesday(model){
            if (Ember.get(model, 'thuesday')){
                Ember.set(model, 'thuesday', false);
            }
            else{
                Ember.set(model, 'thuesday', true);
            }
        },
        toggleWednsday(model){
            if (Ember.get(model,'wednsday')){
                Ember.set(model, 'wednsday', false);
            }
            else{
                Ember.set(model, 'wednsday', true);
            }
        },
        toggleThursday(model){
            if (Ember.get(model, 'thursday')){
                Ember.set(model, 'thursday', false);
            }
            else{
                Ember.set(model, 'thursday', true);
            }
        },
        toggleFriday(model){
            if (Ember.get(model, 'friday')){
                Ember.set(model, 'friday', false);
            }
            else{
                Ember.set(model, 'friday', true);
            }
        },
        toggleSaturday(model){
            if (Ember.get(model, 'saturday')){
                Ember.set(model, 'saturday', false);
            }
            else{
                Ember.set(model, 'saturday', true);
            }
        },
        toggleSunday(model){
            if (Ember.get(model, 'sunday')){
                Ember.set(model, 'sunday', false);
            }
            else{
                Ember.set(model, 'sunday', true);
            }
        }
    }
});
