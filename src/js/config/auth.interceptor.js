/**
 * Created by orizu on 24/08/2016.
 */
/**
 * Add the authorization header for requests to our API.
 * If the interceptor handles a 401 error, delete the JWT token in localStorage
 * and do a hard page refresh.
 */


function authInterceptor(JWT, AppConstants, $window, $q) {
  'ngInject';

  return {
    request: function (config) {
      if (config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
        config.headers.Authorization = 'Token ' + JWT.get();
      }
      return config;
    },

    // Handle 401s
    responseError: function(rejection) {
      if ( rejection.status === 401 ) {
        // Destroy token locally
        JWT.destroy();
        // Do hard page refresh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }
  }
}

export default authInterceptor;
