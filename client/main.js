import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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
    item(){
        var tab = ["1","2","3"];
        return tab;
    },
    target() {
        target = ["Survey", "Meeting"];
        var rand = _.random(0,1);
        console.log(target[rand]);
        return target[rand];
    }
});
Template.header.events({
    'click #settings'(event, instance) {
        Router.go('/profile');
    }
});