(function(){
	'use strict';
	angular
		.module('app')
		.factory('userListService',userListService);
	userListService.$inject = ['$http'];
	function userListService($http){
		return {
			getUsers: getUsers,
			getUser: getUser
		};

		function getUsers(username){
			return $http.get('https://api.github.com/search/users?q='+username+'in:login')
				.then(getUsersSuccess)
				.catch(getUsersError);

			function getUsersSuccess(res) {
				console.log(res.data);
				return res.data;
			}

			function getUsersError(err) {
				console.log(err);
			}
		};

		function getUser(username){
			return $http.get('https://api.github.com/users/'+username)
				.then(getUserSuccess)
				.catch(getUserError);

			function getUserSuccess(res) {
				console.log(res.data);
				return res.data;
			}

			function getUserError(err) {
				console.log(err);
			}
		}					
	}
})();