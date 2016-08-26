class FollowBtnCtrl {
  constructor(Profile, User, $state) {
    'ngInject';

    this._Profile = Profile;
    this._User = User;
    this._$state = $state;

    // this.user is set by calling the new comopnents directive with an attribute
    // follow-btn user="$ctrl.profile", see the bindings below
  }

  // Following handler registers following status via API

  submit () {
    this.isSubmitting = true;
//console.log(this.user);
    if (!this._User.current) {
      this._$state.go('app.register');
      return;
    }

    // If following unfollow and vice versa
    if (this.user.following) {
      this._Profile.unfollow(this.user.username).then(
        () => {
          this.isSubmitting = false;
          this.user.following = false;
          console.log('Not following');
        }
      );
    } else {
      this._Profile.follow(this.user.username).then(
        () => {
          this.isSubmitting = false;
          this.user.following = true;
          console.log('Now following');
        }
      );
    }
  }

}

let FollowBtn= {
  // this.user is set by calling the new components directive with an attribute
  // user="$ctrl.profile", this is defined in the bindings below
  bindings: {
    user: '=',
  },
  controller: FollowBtnCtrl,
  templateUrl: 'components/buttons/follow-btn.html'
};

export default FollowBtn;
