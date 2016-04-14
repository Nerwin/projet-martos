import './profile.html';
import {
    Session
} from 'meteor/session';

Template.system.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date()));
    $('#aboutUs').hide();
});
Template.system.onRendered(function(){
  Session.set("currentPage","Settings");
});
Template.system.helpers({
    user() {
        return Template.instance().user.get();
    },
    lastTime() {
        return Template.instance().date.get();
    },
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});

Template.system.events({
    'click .aboutus' (event, instance) {
        $('#aboutUs').show();
    },
    'click .passwordDiv'(event,instance){
      $('.password').toggle("slow");
    },
    'click .pseudoDiv'(event,instance){
      $('.pseudo').toggle("slow");
    },
    'click .aboutusDiv'(event,instance){
      $('.aboutus').toggle("slow");
    },
    'click .notificationDiv'(event,instance){
      $('.notifications').toggle("slow");
    }
});

Template.notifications.helpers({
  isChecked(){
    return 'checked'; // Return Vide ou checked en fonction de la réponse
  }
})
