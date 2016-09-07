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

import FavouriteBtn from './buttons/favourite-btn.component';
componentsModule.component('favouriteBtn', FavouriteBtn);

import ArticlePreview from './article-helpers/article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleList from './article-helpers/article-list.component';
componentsModule.component('articleList', ArticleList);

import ListPagination from './article-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);


export default componentsModule;
