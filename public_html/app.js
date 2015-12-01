var app = angular.module('projectApp', []);

app.controller('projectController',   function (myFactory,$scope) {
    
    var self = this;
    self.title = "Welcome to MacMondo !!!" ;
    $scope.title = "Hola ";
    $scope.motto1 = "Find flights everywhere !!!";
    $scope.motto2 = " Even Hell ";
    $scope.logo = 'http://pre04.deviantart.net/239a/th/pre/i/2014/106/6/c/random_logo_by_criticl-d7eqdvw.png';
    $scope.schoolLogo = 'https://www.cphbusiness.dk/media/74772/logo.svg';
    
    
    
    
});
//
//
////*[@id="flight_details"]/div/div[1]/div[2]/div/div/div/div[2]/div[1]/div[2]/div/div/div[1]/span[1]
////*[@id="flight_details"]/div/div[1]/div[2]/div/div/div/div[2]/div[1]/div[2]/div/div/div[1]/span[1]
////*[@id="flight_details"]/div/div[1]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[1]/span[1]
////*[@id="flight_details"]/div/div[1]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[1]/span[1]
////*[@id="flight_details"]/div/div[1]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[1]/span[1]
//
//app.filter('av', [function () {
//        return function (input) {
//            var av = 0;
//            var classes = 0;
//            for (var i = 0; i < input.length; i++) {
//                if (input[i].grade != undefined) {
//                    av += +input[i].grade;
//                    classes++;
//                }
//            }
//            return av / classes;
//        };
//    }]);

//app.directive('studentGrades', function () {
//    return{
//        restrict: 'E',
//        templateUrl: 'table.html'
//    };
//
//});

app.factory('myFactory', function () {
    return{
        getStudents: function () {
            var studentsInfo ={};
            studentsInfo.students = [];
            studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
            studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
            studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
            studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
            return   studentsInfo.students;
        },
        getRandomString: function (n) {
            return    Math.round((Math.pow(36, n + 1) - Math.random() * Math.pow(36, n))).toString(36).slice(1);

        }
    };
});
