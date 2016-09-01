/**
 * Created by orizu on 26/08/2016.
 */
import angular from 'angular';

let editorModule = angular.module('app.editor', []);

// Include UI-router config settings
import EditorConfig from './editor.config';
editorModule.config(EditorConfig);

// Controllers
import EditorCtrl from './editor.controller';
editorModule.controller('EditorCtrl', EditorCtrl);


export default editorModule;