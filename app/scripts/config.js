(function(){
	'use strict';
	angular
		.module('app')
		.config(config)

	function config($stateProvider,$urlRouterProvider){


		$urlRouterProvider
			.when('/user/:login', userProfileRefresh);

		userProfileRefresh.$inject = ['$state','$match','$stateParams'];
			
		function userProfileRefresh($state,$match,$stateParams){
			if ($state.$current.navigable != 'login' || !equalForKeys($match, $stateParams)) {
        		$state.transitionTo('login', $match, false)
			}
		};

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
					userProfileResolve:
						function(userProfileService,$stateParams){
							return userProfileService.getUser($stateParams.login)
						},
					userProfileReposResolve:
						function(userProfileService,$stateParams){
							return userProfileService.getUserRepos($stateParams.login)
						}
				}
			})
	}
})();