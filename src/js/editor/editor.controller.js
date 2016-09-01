/**
 * Created by orizu on 26/08/2016.
 */
class EditorCtrl {
  constructor (Articles, $state) {
    'ngInject';

    this._Articles = Articles;
    this._$state = $state;

    this.article = {
      title: '',
      description: '',
      body: '',
      tagList: []
    };
  }

  addTag () {
    // Ensure this tag does not already exist
    if (!this.article.tagList.includes(this.tagField)) {
      this.article.tagList.push(this.tagField);
      this.tagField = '';
    }
  }

  removeTag (tagName) {
    this.article.tagList = this.article.tagList.filter((slug) => slug != tagName);
  }

  submit () {
    this.isSubmitting = true;
    this._Articles.save(this.article).then(
      (newArticle) => {
        this._$state.go('app.article', { slug: newArticle.slug });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }
}

export default EditorCtrl;
