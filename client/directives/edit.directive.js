(function() {
  'use strict';

  angular
    .module('app')
    .directive('editItem', editItem);

       function editItem($http) {
          
          return {
            restrict: 'E',
            template: '<button ng-hide="isEditing" ng-click="edit(todo)" >edit</button">' +
                      '<ng-include ng-show="isEditing" src=""./partials/form.html""></ng-include>' +
                      '<button ng-show="isEditing" ng-click="saveEdit(todo)"> save</button>',
            controller: 'Main',
            link: function(scope, elem, attrs) {
              
              scope.isEditing = false;
              // when edit button is clicked a form appears and we're able to edit our select job
              // it toggles and save option appears
              scope.edit = function(todo) {
                scope.isEditing = true;
              };
              
              scope.saveEdit = function(todo) {
                $http.put('/editJob/' + todo._id).then(function() {
                  // when saved it toggles back to an edit button
                  scope.isEditing = false;
                });
              };
            }
          };
        }

})();
