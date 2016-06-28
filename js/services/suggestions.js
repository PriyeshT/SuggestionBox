app.factory('suggestions',[function(){
  var demoSuggestions = {
    posts: [
      {
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: [
          {
            body: 'Agreed',
            upvotes: 12
          },
          {
            body: 'Best suggestion ever!!!',
            upvotes: 20
          }
        ]
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 2,
        comments: []
      },
      {
        title: 'Vending machine with Coffee and Cold drinks',
        upvotes: 9,
        comments: []
      },
      {
        title: 'New host for each club meeting',
        upvotes: 5,
        comments: []
      }
    ]
  };
  return demoSuggestions;
}]);
