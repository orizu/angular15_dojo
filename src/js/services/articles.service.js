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
  // These strings must be wrapped in backticks and not quotes
  //
  save (article) {
    let request = {};

    if (article.slug) {
      request.url = `${this._AppConstants.api}/articles/${article.slug}`;
      request.method = 'PUT';

      // NB: Delete slug from the article so that server updates the slug,
      // in case the title of the article changed.
      delete article.slug;

      // ES6 arrow function
    } else {
      request.url = `${this._AppConstants.api}/articles`;
      request.method = 'POST';
    }

    request.data = { article: article };

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
  
  // Favourite an article
  favourite (slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'POST',
      // ES6 arrow function
    }).then((res) => res.data);
  }

  // Unfavourite an article
  unfavourite (slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'DELETE',
      // ES6 arrow function
    }).then((res) => res.data);
  }

  /*
  config object spec:

  properties are
  type: String [REQUIRED]
  - all( default articles list )
  - feed = current user favourites
  filters: Object whose properties act as key => value pairs of URL params e.g {author: orizu.nwokeji}
  */

  query (config) {
    let request = {
      url: `${this._AppConstants.api}/articles` + ((config.type === 'feed') ?  '/feed' : ''),
      method: 'GET',
      params: config.filters ? config.filters : null
      // ES6 arrow function
    };
    return this._$http(request).then((res)=> res.data);
  }

}