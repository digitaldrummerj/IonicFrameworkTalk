	angular
		.module('todoApp')
		.controller('ToDoController', ToDoController);

	ToDoController.$inject = ['$scope', '$ionicModal', 'Projects', '$ionicSideMenuDelegate'];
	function ToDoController($scope,  $ionicModal, Projects, $ionicSideMenuDelegate) {

		getProject();
		
		$scope.$on('project:selected', function (event, data) {
			getProject();
		});
		// Grab the last active, or the first project
		
		function getProject() {
			console.log('toDoController.getProject');
			console.log(Projects.getLastActiveIndex());
			console.log($scope.projects);
			$scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];			
		}
		
		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
			$scope.taskModal = modal;
		}, {
			scope: $scope
		});
		
		
		$scope.createTask = function(task) {
			if(!$scope.activeProject || !task) {
				return;
			}
			
			$scope.activeProject.tasks.push({
				title: task.title
			});
			
			$scope.taskModal.hide();
		
			// Inefficient, but save all the projects
			Projects.save($scope.projects);
		
			task.title = "";
		};
		
		$scope.newTask = function() {
			$scope.taskModal.show();
		};
	
		$scope.closeNewTask = function() {
			$scope.taskModal.hide();
		}
		
	
		
	}
