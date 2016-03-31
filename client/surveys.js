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
        var tab = ["1", "2", "3"];
        return tab;
    },
});

Template.survey.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        IonPopup.alert({ title: 'Survey page', subTitle: 'Survey', template: 'PopUp for survey page' });
    },
});