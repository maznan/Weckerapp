import Ember from 'ember';

export default Ember.Controller.extend({

    breadCrump: Ember.computed('currentPath', {
        get(){
            let sections = this.get('currentPath').split('.');
            
            return sections.get('lastObject');
            //if(sections.get('lastObject') = 'new'){
             // sections = 'Neuer Alarm';
            //}
            
        }
    })

});
