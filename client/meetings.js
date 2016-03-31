Template.meeting.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
});

Template.meeting.helpers({
    user() {
        return Template.instance().user.get();
    },
    date() {
        return Template.instance().date.get();
    },
    item() {
        var tab = ["1", "2", "3"];
        return tab;
    },
});

Template.meeting.events({
    'click button'(event, instance) {
        IonPopup.alert({ title: 'Meetings page', subTitle: 'meeting', template: 'PopUp for meeting page' });
    },
});