import './meetings.html';
import { Session } from 'meteor/session';

Template.meeting.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
});

Template.newMeeting.onCreated(function createdMeeting() {
    this.counter = new ReactiveVar(0);
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
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});

Template.meeting.events({
    'click #newMeeting' (event, instance) {
        Router.go('/createMeeting');
    },
});
Template.newMeeting.events({
    'click #submitForm' (event, instance) {
        IonPopup.alert({
            title: 'New meeting sent',
            template: 'This may take few second to create your meeting :)'
        });
    },
    'click .addAnswer' (event, instance) {
        var currentpos = Template.instance().counter.get();
        $('.targetList').append(' <div id="date-' + currentpos + '"><label class="item item-input item-stacked-label"><span class="input-label">New date</span><input type="datetime-local" placeholder="Other date"></label><i class="icon ion-plus-circled addAnswer"></i><i class="icon ion-minus-circled deleteAnswer" id="' + currentpos + '"></i></div>');
        instance.counter.set(instance.counter.get() + 1);
    },
    'click .deleteAnswer' (event, instance) {
        var pos = event.currentTarget.attributes.id; // l'id de l'icon delete correspond à la pos à enlever
        $('.targetList').find("#date-"+pos.value).remove();
    }
});
Template.newMeeting.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});
