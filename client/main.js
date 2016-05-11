import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import {
    ReactiveDict
} from 'meteor/reactive-dict';
import {
    Accounts
} from 'meteor/accounts-base'
import {
    Session
} from 'meteor/session';


import './main.html';
import '../imports/api/routes.js'
import '../imports/ui/meetings.js'
import '../imports/ui/profile.js'
import '../imports/ui/surveys.js'

//Global Session variable
Session.setDefault('isConnectedUser', false);

Template.Hometemplate.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
});

Template.Hometemplate.helpers({
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
    target() {
        const target = ["Survey", "Meeting"];
        let rand = _.random(0, 1);
        return target[rand];
    },
});

Template.Hometemplate.events({
  "click #in_progress"(event,instance){
    $("#in_progress").addClass("button-positive");
    $("#finished").removeClass("button-positive");
    //TODO tri "en cours"
  },
  "click #finished"(event,instance){
    $("#in_progress").removeClass("button-positive");
    $("#finished").addClass("button-positive");
    //TODO tri "terminé"
  },
});

Template.home.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});
Template.header.onRendered(function() {
    Session.set("currentPage", "Home");
});

Template.header.helpers({
    currentPage() {
        return Session.get("currentPage");
    },
    displaySigle() {
        if (Session.equals("currentPage", "New meeting") || Session.equals("currentPage", "New survey")) {
            return 'ion-ios-arrow-back';
        } else if (Session.equals("currentPage", "Meeting") || Session.equals("currentPage", "Survey")) {
            return 'ion-plus';
        } else {
            return '';
        }
    }
});
Template.header.events({
    'click #settings' (event, instance) {
        Router.go('/profile');
    },
    'click #commandButton' (event, instance) {
        if (Session.equals("currentPage", "Meeting")) {
            Router.go('/createMeeting');
        }
        if (Session.equals("currentPage", "Survey")) {
            Router.go('/createSurvey');
        }
        if (Session.equals("currentPage", "New meeting")) {
            Router.go('/meetings');
        }
        if (Session.equals("currentPage", "New survey")) {
            Router.go('/surveys');
        }
    },
});
Template.HometemplateNotConnected.events({
    'click #connexion' (event, instance) {
        Session.set('isConnectedUser', true);
        Session.set('currentUser',"1"); // id utilisateur
    },
});
