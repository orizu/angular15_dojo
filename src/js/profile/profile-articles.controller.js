class ProfileArticlesCtrl {
  constructor(profile, $state, $rootScope) {
    'ngInject';

    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');
    this.listConfig = { type: 'all'};

    if (this.profileState === 'main') {
      $rootScope.setPageTitle('@' + this.profile.username);
      this.listConfig.filters = { author: this.profile.username };
    } else if (this.profileState === 'favorites') {
      $rootScope.setPageTitle(`Articles favourited by ${this.profile.username}`);
      this.listConfig.filters = { favorited: this.profile.username};
    }


  }
}

export default ProfileArticlesCtrl;