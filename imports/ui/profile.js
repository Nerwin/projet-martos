import './profile.html';
import { Session } from 'meteor/session';

Template.system.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    this.date = new ReactiveVar(moment(new Date()));
    $('#aboutUs').hide();
});

Template.system.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    lastTime() {
        return Template.instance().date.get();
    },
    connectedUser(){
       return Session.get('isConnectedUser');
   }
});

Template.system.events({
    'click .aboutus'(event,instance){
        $('#aboutUs').show();
    }
});