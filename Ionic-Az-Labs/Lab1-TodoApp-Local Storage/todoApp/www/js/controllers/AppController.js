	angular
		.module('todoApp')
		.controller('AppController', AppController);
			
AppController.$inject = ['$scope', '$ionicModal', '$timeout', '$ionicSideMenuDelegate', '$ionicListDelegate', '$rootScope', 'Projects'];
	function AppController($scope, $ionicModal, $timeout, $ionicSideMenuDelegate, $ionicListDelegate, $rootScope, Projects) {
		$ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
			$scope.projectModal = modal;
		}, {
			scope: $scope
		});

		// A utility function for creating a new project
		// with the given projectTitle
		var createProject = function(projectTitle) {
			var newProject = Projects.newProject(projectTitle);
			$scope.projects.push(newProject);
			Projects.save($scope.projects);
			$scope.selectProject(newProject, $scope.projects.length - 1);
			hideNewProjectModal();
		}		
		
		// Load or initialize projects
		$scope.projects = Projects.all();
		
		$scope.showProjectModal = function () {
			$scope.projectModal.show();
		};
			
		// Called to create a new project
		$scope.newProject = function(project) {
			//var projectTitle = prompt('Project name');
			var projectTitle = project.title;
			if(projectTitle) {
				createProject(projectTitle);
				project.title = '';
			}			
		};
		
		$scope.deleteProject = function (project) {
			Projects.deleteProject(project);	
			$ionicListDelegate.closeOptionButtons();	
			showProjectModelIfNoProjects();
		}	
			
		// Called to select the given project
		$scope.selectProject = function (project, index) {
			$scope.activeProject = project;
			Projects.setLastActiveIndex(index);
			closeMenu();
		};

		$scope.closeNewProject = function () {
			hideNewProjectModal();
		}
		
		function hideNewProjectModal() {
			$scope.projectModal.hide();
			closeMenu();
		}
		
		function closeMenu () {
			$ionicSideMenuDelegate.toggleLeft();
		}
		
		$scope.toggleProjects = function() {
			//console.log("---------------------------");
			//console.log($scope);
			//$scope.sideMenuController.toggleLeft();
			$ionicSideMenuDelegate.toggleLeft();
		};

		function showProjectModelIfNoProjects() {
			if($scope.projects.length == 0) {
				$scope.projectModal.show();
			}
		}
		// Try to create the first project, make sure to defer
		// this by using $timeout so everything is initialized
		// properly
		$timeout(function () {
			showProjectModelIfNoProjects();
		});

	}
	
	
	