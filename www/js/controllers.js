angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TransactionsCtrl', function($scope,$ionicModal) {
  $scope.transactions = [
    { date: '12 oktober', id: 1 },
    { date: '10 oktober', id: 2 },
  ];

  $scope.x = 10;
  $scope.singleTransaction = [
  { "parent_category":"food" , "value" : 10 , "description" : "nasi lemak ayam" ,"date":"12/10/2016"},
  { "parent_category":"food" , "value" : 11 , "description" : "nasi lemak ayam" ,"date":"09/10/2016"},
  ];

  $ionicModal.fromTemplateUrl('add-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.transaction = "";

      //default

      $scope.transaction.value = 10;
      $scope.transaction.category = "food";
      $scope.transaction.date = new Date("DD/MM/YYYY");
    });

  $scope.preAddingTransaction = function()
  {
    $scope.modal.show();
  }

  $scope.addTransaction = function(transaction) {
    console.log(transaction);
    $scope.transactions.push({"date":transaction.date});
    $scope.singleTransaction.push({"parent_category":transaction.category,"value":transaction.value});
    $scope.modal.hide();
  };

  $scope.closeModal = function()
  {
    $scope.modal.hide();
  }
    
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
