import './meetings.html';
import { Session } from 'meteor/session';

Template.meeting.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
});

Template.newMeeting.onCreated(function createdMeeting() {
    this.counter = new ReactiveVar(0);
});

Template.meeting.onRendered(function(){
  Session.set("currentPage","Meeting");
});

Template.meeting.helpers({
    user() {
        return Template.instance().user.get();
    },
    date() {
        return Template.instance().date.get();
    },
    item() {

        var date = Template.instance().date.get();
        const tab_formated_rdv = [];

        var rdv = { // objet rdv de la bdd
          id_rdv : "1",
          libelle : "FakeRDV",
          lieu : "dtc",
          description : "Description de mon premier rdv dtc",
          mail_utilisateur : "n.riquelmebareiro@epsi.fr",
          debut : "10/20/2016",
          fin : "11/20/2016"
        };
        
        var proposition = [{ // obj proposition_rdv de la bdd
          id_proposition : "1",
          heure_debut : "15h30",
          heure_fin : "17h30",
          id_rdv : "1"
        },{
          id_proposition : "2",
          heure_debut : "16h30",
          heure_fin : "18h30",
          id_rdv : "1"
        } ];
        rdv = _.extend(rdv,{answer : proposition});
        tab_formated_rdv.push(rdv);
        return tab_formated_rdv


        /*
          var all_rdv = Meteor.call('findAllRDVForCurrentUser',Session.get('currentUser'));
          _.each(all_rdv,function(rdv,index){
            var tab_specific_proposition = Meteor.call('findSpecificProposition',rdv.id_rdv);
            rdv = _.extend(rdv,{answer : tab_specific_proposition});
            tab_formated_rdv.push(rdv);
          });
        */


        return tab;
    },
    isConnectedUser() {
        return Session.get('isConnectedUser');
    },
    answer(){
      const tab = [];

    },
    endDate(){
      console.log(moment(new Date()));
      return moment(new Date())._d;
    },
    title(){
      return "Mon titre du meeting";
    }
});

Template.newMeeting.onRendered(function(){
  Session.set("currentPage","New meeting");
});

Template.newMeeting.events({
    'click #submitForm' (event, instance) {
        IonPopup.alert({
            title: 'New meeting sent',
            template: 'This may take few second to create your meeting :)'
        });
    },
    'click .addAnswer' (event, instance) {
        const currentpos = Template.instance().counter.get();
        $('.targetList').append(' <div id="date-' + currentpos + '"><label class="item item-input item-stacked-label"><i class="icon ion-minus-circled deleteAnswer" id="' + currentpos + '"></i><input type="datetime-local" placeholder="Other date"></label></div>');
        instance.counter.set(instance.counter.get() + 1);
    },
    'click .deleteAnswer' (event, instance) {
        const pos = event.currentTarget.attributes.id; // l'id de l'icon delete correspond à la pos à enlever
        $('.targetList').find("#date-"+pos.value).remove();
    }
});
Template.newMeeting.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});
