import Ember from 'ember';

export default Ember.Route.extend({
     model(){
         return[
             {
             time:"17:00",
             title: "Erinnerung",
             on: true,
             repeated: false,
            },
            {
             time:"07:00",
             title: "Unter der Woche",
             on: false,
             repeated: true,
            }
         ];
     }
});
