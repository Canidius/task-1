(function(){
	'use strict'
	angular
		.module('app')
		.controller('UserProfileController',UserProfileController);

	UserProfileController.$inject = ['userProfileResolve','userProfileReposResolve'];

	function UserProfileController(userProfileResolve,userProfileReposResolve){
		var vm = this;
		vm.user = userProfileResolve;
		vm.repos = userProfileReposResolve;
	}
})();