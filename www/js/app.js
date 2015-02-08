angular.module('piuigen', ['ionic', 'piuigen.module', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })
            .state('app.piuigen', {
                url: '/piuigen',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/piuigen.html',
                        controller: 'PiuiGenCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/piuigen');

    });

