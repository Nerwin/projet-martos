import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Accounts } from 'meteor/accounts-base'
import { Session } from 'meteor/session';


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

Template.Home.helpers({
    isConnectedUser() {
        return Session.get('isConnectedUser');
    }
});

Template.header.events({
    'click #settings'(event, instance) {
        Router.go('/profile');
    }
});
Template.HometemplateNotConnected.events({
    'click #connexion'(event, instance) {
        Session.set('isConnectedUser', true);
    },
});