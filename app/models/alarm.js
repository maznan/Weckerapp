import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    time: DS.attr('string'),
    on: DS.attr('boolean'),
    monday: DS.attr('boolean'),
    tuesday: DS.attr('boolean'),
    wednsday: DS.attr('boolean'),
    thursday: DS.attr('boolean'),
    friday: DS.attr('boolean'),
    saturday: DS.attr('boolean'),
    sunday: DS.attr('boolean')
});
