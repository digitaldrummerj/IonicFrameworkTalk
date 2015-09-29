	angular
		.module('todoApp')
		.factory('Projects', Projects);

	Projects.$inject = ['$rootScope'];
	function Projects($rootScope) {
		var service = {
			all: all,
			save: save,
			newProject: newProject,
			getLastActiveIndex: getLastActiveIndex,
			setLastActiveIndex: setLastActiveIndex,
			deleteProject: deleteProject
		};
		
		var globalProjects = [];
		
		return service;

		////////////////
		function all() {
			var projectString = window.localStorage['projects'];
			if (projectString) {
				globalProjects = angular.fromJson(projectString); 
				
			}
			return globalProjects;
		}
		
		function deleteProject(project) {
			console.log("ProjectsService.deleteProject");
			console.log(globalProjects);
			console.log(project);
			var index = globalProjects.indexOf(project);
			globalProjects.splice(index, 1);
			save(globalProjects);
			
			var currentIndex = getLastActiveIndex();

			if (index == currentIndex && currentIndex == globalProjects.length){
				setLastActiveIndex(index - 1);	
			}
			else if (index < currentIndex)
			{
				setLastActiveIndex(currentIndex - 1);
			}
			else {
				setLastActiveIndex(index);	
			}
		}


		function save (projects) {
      		window.localStorage['projects'] = angular.toJson(projects);
		}

		function newProject(projectTitle) {
			// Add a new project
			return {
				title: projectTitle,
				tasks: []
			};
		}
		
		function getLastActiveIndex() {
			return parseInt(window.localStorage['lastActiveProject']) || 0;
		}
		
		function setLastActiveIndex(index) {
			window.localStorage['lastActiveProject'] = index;
			broadcastProjectChange(index);
		}
		
		function broadcastProjectChange(index){
			$rootScope.$broadcast('project:selected',index);
		}
	}