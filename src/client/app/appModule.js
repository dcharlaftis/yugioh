/*
*  Usage:
*  
*  1) Change myModuleName to your choice
*  2) Fill in module dependencies
*
*/
'use strict';

var app = angular.module('myModuleName', [
	'ui.router',
	'settingsModule',
	'LocalStorageModule',
	'ngResource',
	'ngRoute',	
	]);
