// Here we define the directive as an element and connect the template to the element tag
// (function () {
//     angular.module("gitChallenge")
//     .directive("userCard", function() {
//         return {
//             restrict: "E",
//             templateUrl: "templates/card-directive.html",
//         };
//     });
// })();

// (function () {
//     angular.module("gitChallenge")
//     .component("userCard", {
//         bindings: {
//             user: '<'
//         },
//         templateUrl: "templates/card-directive.html",
//         controller: UserCardCtrl
//     });
//     function UserCardCtrl(){};
// })();

(function () {
  'use strict';

  angular
    .module("gitChallenge")
    .component("userCard", {
      bindings: {
        user: '<',
        index: '@'
      },
      templateUrl: "templates/card-directive.html",
      controller: UserCardCtrl
    });

  function UserCardCtrl(){};
})();

