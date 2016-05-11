import {
    Meteor
} from 'meteor/meteor';
Meteor.methods({
    findSurveyByState: function(object) {
        // const url = "myurl.com/rdv_trie_par_option";
        //
        // var back = HTTP.get(url, {
        //     params: {
        //         sortBy: object.sortOption,
        //         id: object.id
        //     }
        // });
        //

        var back = [];
        var formated_tab = [];
        var survey = {
            id_sondage: "1",
            libelle: "FakeSondage",
            lieu: "dtc",
            description: "Description de mon premier Sondage dtc",
            pseudo: "rolljee",
            mail_utilisateur: "n.riquelmebareiro@epsi.fr",
            isPrivateFlag: false,
            reponseUniqueFlag: false,
            debut: "11/20/2016",
            fin: "12/20/2016"
        }

        back.push(survey);
        _.each(back, function(survey, index) {
            var convertAsyncToSync = Meteor.wrapAsync(findSpecificPropositionSondageAsync);
            var result = findSpecificPropositionSondageAsync(survey);
            formated_tab.push(result);
        });
        console.log("findSondageByState", formated_tab);
        return _.flatten(formated_tab);
    },
});

var findSpecificPropositionSondageAsync = function(survey) {
    // const url = "myurl.com/jeveuxmespropositionsSONDAGE";
    // var back = HTTP.get(url, {
    //     params: {
    //         id: id
    //     }
    // });
    var formated_tab = [];
    var back = [{ // obj proposition_rdv de la bdd
        id_proposition: "1",
        libelle: "Oui",
        id_sondage: "1"
    }, {
        id_proposition: "2",
        libelle: "Non",
        id_sondage: "1"
    }];
    formated_tab.push(_.extend(survey, {
        answer: back
    }));
    return formated_tab;
};
