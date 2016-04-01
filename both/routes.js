Router.route('/home',function(){
   this.layout("Home"); 
   this.render('Hometemplate');
});
Router.route('/surveys',function(){
   this.layout("surveys"); 
   this.render("survey")
});
Router.route('/createSurvey',function(){
   this.layout("createSurvey"); 
   this.render("createSurvey")
});

Router.route('/meetings',function(){
   this.layout("meetings") 
   this.render("meeting"); 
});

Router.route('/createMeeting',function(){
   this.layout("createMeeting"); 
   this.render("createMeeting");
});

Router.route('/profile',function(){
   this.layout('profile')
   this.render("system"); 
});
Router.route('/(.*)',function(){
   this.layout("home"); 
   this.render('Hometemplate');
});