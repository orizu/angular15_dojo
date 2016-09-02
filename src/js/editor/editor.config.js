/**
 * Created by orizu on 26/08/2016.
 */
function EditorConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.editor', {
      url: '/editor/:slug',
      controller: 'EditorCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'editor/editor.html',
      title: 'Editor',
      resolve: {
        auth: function (User) {
          return User.ensureAuthIs(true);
        },
        // auth as a param makes it a dependency
        // article resolve only attempted after the auth check completes
        article: function (Articles, User, $state, $stateParams, auth) {
          if ($stateParams.slug) {
            return Articles.get($stateParams.slug).then(
              (article) => {
                // If user is article author resolve otherwise redirect home
                if (User.current.username === article.author.username) {
                  return article;
                } else {
                  $state.go('app.home');
                }
              },
              (err) => $state.go('app.home')
            );
          } else {
            return null;
          }
        }
      }
    });
}

export default EditorConfig;