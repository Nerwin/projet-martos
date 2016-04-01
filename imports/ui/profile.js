import './profile.html';

Template.system.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    this.date = new ReactiveVar(moment(new Date()));
});

Template.system.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    lastTime() {
        return Template.instance().date.get();
    }
});

Template.system.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        IonPopup.alert({ title: 'profile page', subTitle: 'profile', template: 'PopUp for profile page' });
    },
});