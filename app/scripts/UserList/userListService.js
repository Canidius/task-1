(function(){
	'use strict';
	angular
		.module('app')
		.factory('userListService',userListService);
		
	userListService.$inject = ['$http'];

	function userListService($http){
		return {
			getUsers: getUsers
		};

		function getUsers(username){
			return $http.get('https://api.github.com/search/users?q='+username+'in:login$&sort=followers&order=desc&per_page=5')
				.then(function(res) {
				return res.data;
			})
				.catch(function(err) {
				console.log(err);
			});
		};				
	}
})();