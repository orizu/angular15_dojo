/**
 * Created by orizu on 27/08/2016.
 */
export default class Articles {
  constructor (AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
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

  get (slug) {
    let deferred = this._$q.defer();

    if (!slug.replace(" ", "")) {
      deferred.reject("Article slug is empty");
      return deferred.promise;
    }


    let request = {
      url: `${this._AppConstants.api}/articles/${slug}`,
      method: 'GET',
      // ES6 arrow function
    };
    this._$http(request).then(
      (res) => deferred.resolve(res.data.article),
      (err) => deferred.reject(err)
    );

    return deferred.promise;
  }

  // Delete an article
  destroy (slug) {
    let request = {
      url: `${this._AppConstants.api}/articles/${slug}`,
      method: 'DELETE',
      // ES6 arrow function
    };
    return this._$http(request);
  }
}