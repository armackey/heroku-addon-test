(function() {

  angular
    .module('app')
    .directive('deleteItem', deleteItem);

       function deleteItem($http) {

        return {
          restrict: 'E',
          template: '<button ng-click="remove(item)" >delete</button>',
          controller: 'Main',
          link: function(scope, elem, attrs) {
            scope.remove = function(item) {
              console.log(item);
              $http.delete('/removeJob/' + item.id).then(function() {
                console.log('deleted');
              });
            };
          }
        };
      }
})();