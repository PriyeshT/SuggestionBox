app.controller('SuggestionsController',['$scope','$routeParams','suggestions',
  function($scope,$routeParams,suggestions){
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.test = "Testing";

    $scope.addComment = function(){
      if(!$scope.body || $scope.body === ''){
        return;
      }

      $scope.post.comments.push({
        body: $scope.body,
        upvotes: 0
      });

      $scope.body = '';
    }

    $scope.upvote = function(comment) {
      comment.upvotes += 1;
    }
  }]);
