var cardDealer = angular.module('card-dealer', []);

cardDealer.controller('mainCtrl', function($scope) {

  var deck = ['death', 'justice', 'strength', 'temperance', 'the_chariot',
              'the_devil', 'the_emperor', 'the_empress', 'the_fool',
              'the_hanged_man', 'the_hermit', 'the_hierophant','the_high_priestess',
              'the_lovers', 'the_magician', 'the_moon', 'the_star', 'the_sun',
              'the_tower', 'the_world', 'wheel_of_fortune'];


  $scope.deal = deck[Math.floor(Math.random() * 21)];

  $scope.dealAgain = function() {
    $scope.deal = deck[Math.floor(Math.random() * 21)];

  };

});
