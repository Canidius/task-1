(function(){
	'use strict';
	angular
		.module('app')
		.config(config)

	function config($stateProvider,$urlRouterProvider){

		$urlRouterProvider
			.when('/user/:login','/user/:login');

		$urlRouterProvider.otherwise('/home');

		
		$stateProvider

			.state('home', {
				url:'/home',
				templateUrl: 'scripts/userListTemplate.html',
				controller: 'UserListController',
				controllerAs:'userList'
			})

			.state('login',{
				url:'/user/:login',
				templateUrl: 'scripts/userProfileTemplate.html',
				controller: 'UserProfileController',
				controllerAs:'userProfile',
				resolve:{
					userProfileResolve:
						function(userListService,$stateParams){
							console.log($stateParams)
							return userListService.getUser($stateParams.login)
						}
				}
			})
	}
})();