function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    // Get the username from URL via UI-Router params and pass to the Profile.get()
    // We use the $stateParams service in our profile controller then call Profile.get
    // the profile page will partially render while waiting for the response.
    // Using UI-Router resolve, ensures the profile is loaded before the state changes.
    // Resolves suit when data requested only loaded once for that page.

    resolve: {
      profile: function (Profile, $state, $stateParams) {
        return Profile.get($stateParams.username).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        );
      }
    }
  })
  // Abstract sub-states
  .state('app.profile.main', {
    url: '',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile-articles.html',
    title: 'Profile'
  })
  .state('app.profile.favorites', {
    url: '/favorites',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile-articles.html',
    title: 'Favourites'
  });


};

export default ProfileConfig;
