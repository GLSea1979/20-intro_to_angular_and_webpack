'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {}

  cowsayCtrl.title = 'Welcome to the farm!';
  cowsayCtrl.title2 = 'We eat people around here.'

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak');
    return cowsay.say({ text: input || 'mooo!!! bitches', f: 'tux'});
  };

  cowsayCtrl.speak2 = function(input) {
    $log.debug('cowsayCtrl.speak2');
    return cowsay.say({ text: input || 'My name is Squeek, the Dragon', f: 'dragon'});
  };

  cowsayCtrl.remember = function(input) {
    $log.debug('cowsayCtrl.remember')
    
  }

  cowsayCtrl.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };
};
