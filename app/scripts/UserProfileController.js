(function(){
	'use strict'
	angular
		.module('app')
		.controller('UserProfileController',UserProfileController);

	// UserProfileController.$inject = [];

	function UserProfileController(userProfileResolve){
		var userProfile = this;
		userProfile.user=userProfileResolve;
	}
})();