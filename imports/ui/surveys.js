import './surveys.html';
import {
    Session
} from 'meteor/session';

Template.survey.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
});
Template.newSurvey.onCreated(function createdSurvey() {
    this.counter = new ReactiveVar(0);
});
Template.survey.onRendered(function(){
  Session.set("currentPage","Survey page");
});
Template.survey.helpers({
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
    },
    answer(){
      const tab = [{name : "Riquelme"},{name : "Dareau"},{name : "Lacroix"}];
      return tab;
    },
    description(){
      return "Description de mon survey";
    },
    endDate(){
      return moment(new Date())._d;
    },
    title(){
      return "Mon titre du survey";
    }
});

Template.survey.events({
    'click #newSurvey' (event, instance) {
        Router.go('/createSurvey');
    },
});
Template.newSurvey.events({
    'click #submitForm' (event, instance) {
        IonPopup.alert({
            title: 'New survey sent',
            template: 'This may take few second to create your survey :)'
        });
    },
    'click .addAnswer' (event, instance) {
        var currentpos = Template.instance().counter.get();
        $('.targetList').append(' <div id="date-' + currentpos + '"><label class="item item-input item-stacked-label"><span class="input-label">New answer</span><input type="text" placeholder="Other answer"></label><i class="icon ion-plus-circled addAnswer"></i><i class="icon ion-minus-circled deleteAnswer" id="' + currentpos + '"></i></div>');
        instance.counter.set(instance.counter.get() + 1);
    },
    'click .deleteAnswer' (event, instance) {
        var pos = event.currentTarget.attributes.id; // l'id de l'icon delete correspond à la pos à enlever
        $('.targetList').find("#date-"+pos.value).remove();
    }
});

Template.newSurvey.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});
