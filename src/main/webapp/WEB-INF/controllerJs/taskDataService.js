/**
 * Created by seva on 6/16/17.
 */
(function () {
    var app=angular.module("MyApp");

    app.service("DataService",dataService);

    function dataService($http) {
        var self=this;

        self.getTasks=function () {

            var promise1=$http.get('http://localhost:8080/tasks');

            var promise2=promise1.then(function (response) {

                return response.data;
            });
            return promise2
        };

        self.saveTask=function (userData) {
            console.log(userData);
            return $http.post('http://localhost:8080/tasks/',userData)
                .then(function (response) {
                    console.log(response)
                });
        };

        self.updateTask=function (userData) {
            console.log(userData);
            return $http.put('http://localhost:8080/tasks/'+userData.id,userData)
                .then(function (response) {
                    console.log(response)
                });
        };

        self.deleteTask=function (id) {
            console.log(id);
            return $http.put('http://localhost:8080/tasks/'+id)
                .then(function (response) {
                    console.log(response)
                });
        }
    }
})();