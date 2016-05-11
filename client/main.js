import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

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
Session.setDefault('sortOption', "in_progress");

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

        var tab_formated_both = [];
        var object = {
            sortOption: Session.get('sortOption'),
            id: Session.get('currentUser')
        }

        Meteor.call('findSurveyByState', object, function(error, result) {
            if (error) {
                console.log("error -->", error);
            } else {
                Session.set("SurveyState",result);
            }
        });
        Meteor.call('findMeetingByState', object, function(error, result) {
            if (error) {
                console.log("error -->", error);
            } else {
                Session.set("MeetingState",result);
            }
        });
        
        tab_formated_both = _.union(Session.get('SurveyState'),Session.get('MeetingState'));
        console.log("tab_formated_both -->",tab_formated_both);
        return tab_formated_both;
    },
});

Template.Hometemplate.events({
    "click #in_progress" (event, instance) {
        $("#in_progress").addClass("button-positive");
        $("#finished").removeClass("button-positive");
        Session.set('sortOption', "in_progress");
    },
    "click #finished" (event, instance) {
        $("#in_progress").removeClass("button-positive");
        $("#finished").addClass("button-positive");
        Session.set('sortOption', "finished");
    },
});



Template.home.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});

Template.HometemplateNotConnected.events({
    'click #connexion' (event, instance) {
        Session.set('isConnectedUser', true);
        Session.set('currentUser', "1"); // id utilisateur
    },
});
