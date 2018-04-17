app.controller('pizzaController', ['$scope', function($scope) {
    $scope.model = {
        title: 'Pizza Builder',
        availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
        toppings: [],
        isCloseAlert: true
    };
    $scope.addTopping = function(topping) {
        $scope.model.toppings.push(topping);
        $scope.model.isCloseAlert = false;
        $scope.model.search = null;
    }
    $scope.closeAlert = function() {
        $scope.model.isCloseAlert = true;
    }
    $scope.noResult = function() {
        let res = $scope.model.availableToppings.filter(item => item.includes($scope.model.search));
        return res.length < 1;
    }
}]);