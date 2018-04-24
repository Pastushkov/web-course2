app.controller('labController', [
    '$scope', 'registration',

    function($scope, registration) {
        $scope.reset = reset;
        $scope.formHide = false;
        $scope.submit = submit;

        reset();

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                        alert(response.token);
                        $scope.formHide = true;
                        reset();
                    },
                    function(response) {
                        alert('error');
                    });
        }

        function reset() {
            $scope.model = {};

        }
    }
]);