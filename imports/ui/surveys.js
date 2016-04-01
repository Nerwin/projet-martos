import './surveys.html';

Template.survey.onCreated(function helloOnCreated() {
    this.user = new ReactiveVar("Nicolas");
    this.date = new ReactiveVar(moment(new Date())._d);
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
});

Template.survey.events({
    'click #newSurvey'(event, instance) {
        Router.go('/createSurvey');
    },
});
Template.newSurvey.events({
    'click #submitForm'(event, instance) {
        IonPopup.alert({ title: 'New survey sent', template: 'This may take few second to create your survey :)' });
    },
    'click .addAnswer'(event,instance){
        $('.targetList').append(' <label class="item item-input item-floating-label"><span class="input-label">New answer</span><input type="text" placeholder="other option"></label><i class="fa fa-plus addAnswer"></i>');
    }
});