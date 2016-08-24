/**
 * Created by orizu on 24/08/2016.
 */
export default class JWT {
  // Constructor takes constants and services our service requires
  // $window service syncs with DOM window providing access to HTML5 localStorage
  // for persistence
  constructor (AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
  }

  save(token) {
    this._$window.localStorage[this._AppConstants.jwtKey] = token;
  }

  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    this._$window.localStorage.removeItem([this._AppConstants.jwtKey]);
  }
}
