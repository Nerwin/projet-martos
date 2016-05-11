import {
    HTTP
} from 'meteor/http'
import {
    Meteor
} from 'meteor/meteor';

Meteor.methods({
    findAllRDVForCurrentUser: function(id) {
        // const url = "myurl.com/jeveuxmesrdv";
        // var back = HTTP.get(url, {
        //     params: {
        //         id: id
        //     }
        // });
        // var back = [];

        back.push(rdv);
        return back; // back need to be a Array
    },
    findMeetingByState: function(object) {

        // const url = "myurl.com/rdv_trie_par_option";
        // var back = HTTP.get(url, {
        //     params: {
        //         sortBy: object.sortOption,
        //         id: object.id
        //     }
        // });
        //
        //


        back = [];
        formated_tab = [];
        var rdv = { // objet rdv de la bdd
            isMeeting: true,
            id_rdv: "1",
            libelle: "FakeRDV",
            lieu: "dtc",
            description: "Description de mon premier rdv dtc",
            mail_utilisateur: "n.riquelmebareiro@epsi.fr",
            debut: "10/20/2016",
            fin: "11/20/2016"
        };

        back.push(rdv);
        console.log(back);
        _.each(back, function(meeting, index) {
            var convertAsyncToSync = Meteor.wrapAsync(findSpecificPropositionRDVAsync);
            var result = findSpecificPropositionRDVAsync(meeting);
            formated_tab.push(result);
        });
        console.log("findRDVByState", formated_tab);
        return _.flatten(formated_tab);
    }
});

var findSpecificPropositionRDVAsync = function(meeting) {
    // const url = "myurl.com/jeveuxmespropositionsRDV";
    // var back = HTTP.get(url, {
    //     params: {
    //         id: id
    //     }
    // });
    var formated_tab = [];
    var back = [{ // obj proposition_rdv de la bdd
        id_proposition: "1",
        heure_debut: "15h30",
        heure_fin: "17h30",
        id_rdv: "1"
    }, {
        id_proposition: "2",
        heure_debut: "16h30",
        heure_fin: "18h30",
        id_rdv: "1"
    }];

    formated_tab.push(_.extend(meeting, {
        answer: back
    }));
    return formated_tab;
};
