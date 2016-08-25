/**
 * Created by orizu on 25/08/2016.
 */
/**
 * Create the config function for settings to define app.settings state
 * that has a resolve for User.ensureAuthIs(true)
 * (aka the user needs to be logged in to see this page)
 */

function SettingsConfig ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.settings', {
      url: '/settings',
      controller: 'SettingsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/settings.html',
      title: 'Settings',
      resolve: {
        auth: function (User) {
          return User.ensureAuthIs(true);
        }
      }
    });
}

export default SettingsConfig;