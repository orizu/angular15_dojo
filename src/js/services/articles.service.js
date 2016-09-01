/**
 * Created by orizu on 27/08/2016.
 */
export default class Articles {
  constructor (AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  // url below uses ES6 template literals, you can write variables in a string with ${} syntax
  // e.g: (hi ${userName}).
  // These strings must be wrapped in backticks and not quotes.
  save (article) {
    let request = {
      url: `${this._AppConstants.api}/articles`,
      method: 'POST',
      data: {
        article: article,
      }
      // ES6 arrow function
    };
    return this._$http(request).then((res) => res.data.article);
  }
}