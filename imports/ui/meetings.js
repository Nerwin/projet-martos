import './meetings.html';

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
        const tab = ["1", "2", "3"];
        return tab;
    },
});

Template.meeting.events({
    'click #newMeeting'(event, instance) {
        Router.go('/createMeeting');
    },
});
Template.newMeeting.events({
    'click #submitForm'(event, instance) {
        IonPopup.alert({ title: 'New meeting sent', template: 'This may take few second to create your meeting :)' });
    },
    'click .addAnswer'(event,instance){
        $('.targetList').append(' <label class="item item-input item-floating-label"><span class="input-label">New answer</span><input type="text" placeholder="other option"></label><i class="fa fa-plus addAnswer"></i>');
    }
});