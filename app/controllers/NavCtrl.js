app.controller("NavCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Logout",
    url: '#/logout'
  },
  {
    name: "All Items",
    url: '#/items/list'
  },
  {
    name: "New Item",
    url: '#/items/new'
  }
  ];
});app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});
