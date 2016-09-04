import marked from 'marked';

class ArticleCtrl {
  constructor(article, User, Comments, $sce, $rootScope) {
    'ngInject';

    this.article = article;
    this.currentUser = User.current;
    this._Comments = Comments;

    // Update the page title
    $rootScope.setPageTitle(this.article.title);

    // Transform markdown to HTML
    this.article.body = $sce.trustAsHtml(marked(this.article.body, {sanitize: true}));

    this.resetCommentForm();
  }

  // Initialise blank comment form
  resetCommentForm () {
    this.commentForm = {
      isSubmitting: false,
      body: '',
      errors: []
    }
  }

  addComment () {
    this.commentForm.isSubmitting = true;

    // Call to comments service handles server comms
    this._Comments.add(this.article.slug, this.commentForm.body).then(
      (comment) => {
        this.resetCommentForm();
      },
      (err) => {
        this.commentForm.isSubmitting = false;
        this.commentForm.errors = err.data.errors;
      }
    );
  }
}

export default ArticleCtrl;
