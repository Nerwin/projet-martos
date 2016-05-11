Meteor.methods({
  findAllRDV : function(id){
    const url = "myurl.com/jeveuxmesrdv";
    var back = HTTP.get(url, { params : { id : id } });

    /* TODO traitement object RDV */

    return back;
  },
  findSpecificProposition : function(id){
    const url = "myurl.com/jeveuxmespropositions";
    var back = HTTP.get(url,{ params : { id : id } });

    /* TODO traitement object proposition */

    return back;
  }
});
