/**
 * Created by orizu on 02/09/2016.
 */
class FavouriteBtnCtrl {
  constructor(User, Articles, $state) {
    'ngInject';

    this._User = User;
    this._Articles = Articles;
    this._$state = $state;

    // this.article is set by calling the new comopnents directive with an attribute
    // follow-btn user="$ctrl.profile", see the bindings below
  }

  // Favouriting handler registers favourited status via API

  submit () {
    this.isSubmitting = true;
    //$state.getSlug()
    var slug = '';
//console.log(this.article);
    if (!this._User.current) {
      this._$state.go('app.register');
      return;
    }

    // If favourited unfavourite and vice versa
    if (this.article.favourited) {
      this._Articles.unfavourite(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favourited = false;
          this.article.favouritesCount--;
          console.log('Not favourited');
        }
      );
    } else {
      this._Articles.favourite(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favourited = true;
          this.article.favouritesCount++;
          console.log('Now favourited');
        }
      );
    }
  }

}

let FavouriteBtn= {
  // this.article is set by calling the new components directive with an attribute
  // article="$ctrl.article", this is defined in the bindings below
  bindings: {
    article: '=',
  },
  transclude: true,
  controller: FavouriteBtnCtrl,
  templateUrl: 'components/buttons/favourite-btn.html'
};

export default FavouriteBtn;
