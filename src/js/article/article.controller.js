import marked from 'marked';

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    // Update the page title
    $rootScope.setPageTitle(this.article.title);

    // Transform markdown to HTML
    this.article.body = $sce.trustAsHtml(marked(this.article.body, {sanitize: true}));
  }
}

export default ArticleCtrl;
