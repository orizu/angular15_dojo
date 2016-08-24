/**
 * Created by orizu on 23/08/2016.
 */
import angular from 'angular';

// Create a module we can attach functionality to
let authModule = angular.module('app.auth', []);

// Attach UI-router state config
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;