/**
 * Created by orizu on 25/08/2016.
 */
export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  // Retrieve a users profile
  get (username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'GET',
      // ES6 arrow function
    }).then((res) => {
      //this.current = res.data.user;
      return res.data.profile;
    });
  }

  // Follow a user
  follow (username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'POST',
      // ES6 arrow function
    }).then((res) => res.data);
  }

  // Unfollow a user
  unfollow (username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'DELETE',
      // ES6 arrow function
    }).then((res) => res.data);
  }
}