app.controller('HomeController',['$scope','suggestions',function($scope,suggestions){
  $scope.developerName = "Priyesh Tungare";

  $scope.posts = suggestions.posts;

  $scope.upvote = function(post){
    post.upvotes += 1;
  }

  $scope.addSuggestion = function() {

    if(!$scope.title || $scope.title === ''){
      return;
    }

    $scope.posts.push({
      title: $scope.title,
      upvotes: 0,
      comments: []
    });

    $scope.title = '';

  }

}]);
