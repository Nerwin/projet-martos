import { Router } from 'meteor/iron:router';

Router.route('/', function() {
    this.layout("Home");
});
Router.route('/surveys', function() {
    this.render("survey");
});
Router.route('/createSurvey', function() {
    this.render("newSurvey");
});

Router.route('/meetings', function() {
    this.render("meeting");
});

Router.route('/createMeeting', function() {
    this.render("newMeeting");
});

Router.route('/profile', function() {
    this.render("system");
});
Router.route('/home',function() {
    this.render('Home');
})
