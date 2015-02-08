angular.module('piuigen.module', []).controller('PiuiGenCtrl', function ($scope) {
    $scope.pw = {};

    console.log('controller');
    $scope.update = function () {
        var service = $scope.pw.service;
        master = Crypto.SHA256($scope.pw.master);

        var pass = Crypto.MD5(service + master);
        pass = service.toUpperCase().charAt(0) + pass.substring(1, 3) + '%' + pass.substring(4, 6) + "#" + pass.substring(7, 12);

        $scope.pw.password = pass
    }

});