import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ListErrors from './list-errors.component';
// listErrors rather than list-errors as
// Angular directives and components require camelCase name definitions.
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ArticleMeta from './article-helpers/article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

export default componentsModule;
