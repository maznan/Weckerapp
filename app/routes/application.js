import Ember from 'ember';

const DATA = [
            {
             id: 1,
             time:"17:00",
             title: "Erinnerung",
             on: true,
             repeated: false,
            },
            {
             id: 2,
             time:"07:00",
             title: "Unter der Woche",
             on: false,
             repeated: true,
            }
];

export default Ember.Route.extend({
    model() {
        return DATA;
    }
});
