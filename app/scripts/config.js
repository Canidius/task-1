(function(){
	'use strict';
	angular
		.module('app')
		.config(config)

	config.$inject=['$stateProvider','$urlRouterProvider'];
	
	function config($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/home');

		
		$stateProvider

			.state('home', {
				url:'/home',
				templateUrl: 'scripts/UserList/userListTemplate.html',
				controller: 'UserListController',
				controllerAs:'userList'
			})

			.state('login',{
				url:'/user/:login',
				templateUrl: 'scripts/UserProfile/userProfileTemplate.html',
				controller: 'UserProfileController',
				controllerAs:'userProfile',
				resolve:{
					userProfileResolve: userProfileResolve,
					userProfileReposResolve: userProfileReposResolve
						
				}
			});

			userProfileResolve.$inject=['userProfileService','$stateParams'];
			function userProfileResolve(userProfileService,$stateParams){
							return userProfileService.getUser($stateParams.login)
						};

			userProfileReposResolve.$inject=['userProfileService','$stateParams'];		

			function userProfileReposResolve(userProfileService,$stateParams){
							return userProfileService.getUserRepos($stateParams.login)
						}
	}
})();