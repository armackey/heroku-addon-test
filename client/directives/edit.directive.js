(function() {

  angular
    .module('app')
    .directive('editItem', editItem);

       function editItem($http) {

          return {
            restrict: 'E',
            template: '<button ng-hide="isEditing" ng-click="edit(todo)" >edit</button">' +
                      '<button ng-show="isEditing" ng-click="saveEdit()"> save</button>',
            controller: 'Main',
            link: function(scope, elem, attrs) {
              scope.isEditing = false;
              scope.edit = function(todo) {
                scope.isEditing = true;
              };
              scope.saveEdit = function(todo) {
                $http.put('/editJob/' + todo._id).then(function() {
                  scope.isEditing = false;
                });
              };
            }
          };
        }

})();
