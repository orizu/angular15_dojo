/**
 * Created by orizu on 23/08/2016.
 */

export default class User {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';


    // References to the services for later use
    // underscore conventionally denotes a service
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT;
    this._$state = $state; // UI-router
    this._$q = $q;

    // Object to store user properties
    this.current = null;
  }

  attemptAuth (type, credentials) {
    // let ES^ syntax for var declaration
    let route = (type == 'login') ? '/login' : '';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
      // ES6 arrow function
    }).then((res) => {
      this.current = res.data.user;
      this._JWT.save(res.data.user.token);
      return res;
    });
  }

  logout () {
    this.current = null;
    this._JWT.destroy();
    // Hard reload current state to flush personalised data
    this._$state.go(this._$state.$current, null, { reload:true });
  }

  // Resolves return a promise that will hold off loading the UI-router state
  // until the promise has "resolved"
  verifyAuth () {
    let deferred = this._$q.defer();

    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/user',
        method: 'GET'
      }).then(
        (res) => {
          this.current = res.data.user;
          deferred.resolve(true);
        },
        (error) => {
          this.current = null;
          this._JWT.destroy();
          deferred.resolve(false);
        }
      );
    }

    return deferred.promise;
  }
}
