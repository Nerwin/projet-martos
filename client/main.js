import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/meetings.js'
import '../imports/ui/profile.js'
import '../imports/ui/surveys.js'

Template.Hometemplate.onCreated(function helloOnCreated() {
    // counter starts at 0
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
        console.log(target[rand]);
        return target[rand];
    }
});
Template.header.events({
    'click #settings'(event, instance) {
        Router.go('/profile');
    }
});