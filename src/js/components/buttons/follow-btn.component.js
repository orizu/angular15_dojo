class FavouriteBtnCtrl {
  constructor(Articlele, User, $state) {
    'ngInject';

    this._Article = Article;
    this._User = User;
    this._$state = $state;

    // this.user is set by calling the new comopnents directive with an attribute
    // favourite-btn user="$ctrl.profile", see the bindings below
  }

  // Favouriting handler registers favourite status via API

  submit () {
    this.isSubmitting = true;
    if (!this._User.current) {
      this._$state.go('app.register');
      return;
    }

    // If favourite, unfavourite and vice versa
    if (this.user.favourite) {
      this._Profile.unfavourite(this.user.username).then(
        () => {
          this.isSubmitting = false;
          this.user.favourite = false;
          console.log('Not favourite');
        }
      );
    } else {
      this._Profile.favourite(this.user.username).then(
        () => {
          this.isSubmitting = false;
          this.user.favourite = true;
          console.log('Now favourite');
        }
      );
    }
  }

}

let FavouriteBtn= {
  bindings: {
    article: '=',
  },
  transclude: true,
  controller: FavouriteBtnCtrl,
  templateUrl: 'components/buttons/favourite-btn.html'
};

export default FavouriteBtn;
