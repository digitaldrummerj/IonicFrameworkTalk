	angular
		.module('todoApp')
		.controller('AppController', AppController);
			
	AppController.$inject = ['$scope', 'Projects'];
	function AppController($scope, Projects) {
	}