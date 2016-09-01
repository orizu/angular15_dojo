/**
 * Created by orizu on 01/09/2016.
 */
class ArticleActionsCtrl {

  constructor () {
    'ngInject';

  }
}


let ArticleActions = {
  bindings: {
    article: '=',
  },
  controller: ArticleActionsCtrl,
  templateUrl: '.article/article-actions.html'
};

export default ArticleActions;