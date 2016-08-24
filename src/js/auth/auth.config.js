/**
 * Created by orizu on 23/08/2016.
 */
function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
    .state('app.login', {
      url: '/login',
      controller: 'AuthCtrl as $ctrl',
      templateUrl: 'auth/auth.html',
      title: 'Login',
      resolve: {
        auth: function (User) {
          return User.ensureAuthIs(false);
        }
      }
    })
    .state('app.register', {
      url: '/register',
      controller: 'AuthCtrl as $ctrl',
      templateUrl: 'auth/auth.html',
      title: 'Sign up',
      resolve: {
        auth: function(User) {
          return User.ensureAuthIs(false);
        }
      }
    });
};

export default AuthConfig;/**
 * Created by orizu on 23/08/2016.
 */
