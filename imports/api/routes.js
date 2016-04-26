import {
    Router
} from 'meteor/iron:router';

Router.route('/surveys', {
    name: "survey"
});
Router.route('/createSurvey', {
    name: "newSurvey"
});

Router.route('/meetings', {
    name: "meeting"
});

Router.route('/createMeeting', {
    name: "newMeeting"
});

Router.route('/profile', {
    name: "system"
});

Router.route('/home', {
    name: "home"
});
