angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtril'
    });
    
  $urlRouterProvider.otherwise('home');
}])

.factory('posts', [fucntion(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; };
      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };  
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);
