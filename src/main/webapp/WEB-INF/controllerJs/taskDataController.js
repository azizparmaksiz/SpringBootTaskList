/**
 * Created by seva on 6/16/17.
 */

(function () {

    var app=angular.module("MyApp");

    app.controller("TaskCtrl",taskDataCtr);

   function taskDataCtr(DataService,modeSrvc) {
       var self = this;
       self.MODE=modeSrvc.MODE_HOME;
       self.modeSrvc=modeSrvc;

       self.newTask=function () {
           self.MODE=modeSrvc.MODE_NEW;
           self.selected=undefined;
           self.successMessage=undefined;
           self.errorMessage=undefined;
       };

       self.home=function () {
           self.successMessage=undefined;
           self.errorMessage=undefined;
           self.MODE=modeSrvc.MODE_HOME;
       };

       self. getTasks=function () {
           DataService.getTasks()
               .then(function (data) {
                   self.MODE=modeSrvc.MODE_TASKS;
                   self.tasks = data;
               });
       };

       self. saveSelected = function () {


           //console.log( self.contacts);
           DataService.saveTask(self.selected).then(function () {
               self.reloadContent();
               self.successMessage = "Data successfully saved";
           }, function () {
               self.errorMessage = "Error Occurred ";
           });
       };

       self.reloadContent =function () {
           self. getTasks();
       };


       self. updateSelected = function () {
           console.log( "update");
           DataService.updateTask(self.selected).then(function () {
               self.reloadContent();
               self.successMessage = "Data successfully updated";
           }, function () {
               self.errorMessage = "Error Occurred ";
           });
       };

       self.deleteTask=function (index) {
           //console.log( self.tasks);
           DataService.deleteTask(self.tasks[index]).then(function () {
               self.reloadContent();
               self.successMessage="Data successfully deleted";
           },function () {
               self.errorMessage="Error Occurred ";
               self.successMessage=undefined;
           });
       };

       self.selected=undefined;
       self.setSelected   =function (index) {
           self.selected=self.tasks[index];
           self.MODE=modeSrvc.MODE_UPDATE;
           self.successMessage=undefined;
           self.errorMessage=undefined;
       }
   }

   app.service("modeSrvc",function () {
       this.MODE_TASKS='tasks';
       this.MODE_HOME='home';
       this.MODE_UPDATE='update';
       this.MODE_NEW='new';
   });

})();