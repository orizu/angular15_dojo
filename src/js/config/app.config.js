import authInterceptor from './auth.interceptor';

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  //$http interceptors need to be added to the $httpProvider service within a config function
  // Push our interceptor for auth
  $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve: {
      auth: function (User) {
        return User.verifyAuth();
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
