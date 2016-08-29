(function(){
	'use strict';
	angular
		.module('app')
		.factory('userProfileService',userProfileService);
		
	userProfileService.$inject = ['$http'];

	function userProfileService($http){
		return {
			getUser: getUser,
			getUserRepos: getUserRepos
		};

		function getUser(username){
			return $http.get('https://api.github.com/users/'+username)
				.then(function(res){
				return res.data;
			})
				.catch(function(err) {
				console.log(err);
			});
		}

		function getUserRepos(username){
			return $http.get('https://api.github.com/users/'+username+'/repos?per_page=5')
				.then(function(res){
				return res.data;
			})
				.catch(function(err) {
				console.log(err);
			});
		}					
	}
})();