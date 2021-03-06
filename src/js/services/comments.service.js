/**
 * Created by orizu on 04/09/2016.
 */
export default class Comments {
  constructor  (AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  add (slug, payload) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${slug}/comments`,
      method: 'POST',
      data: {
        comment: { body: payload }
      }
    }).then((res) => res.data.comment);

  }

  destroy(commentId, articleSlug) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${articleSlug}/comments/${commentId}`,
      method: 'DELETE'
    });
  }

  // Fetch all comments for an article
  getAll (slug) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${slug}/comments`,
      method: 'GET',
    }).then((res) => res.data.comments);
  }
}