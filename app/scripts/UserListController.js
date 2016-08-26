(function(){
	'use strict'
	angular
		.module('app')
		.controller('UserListController',UserListController);

	UserListController.$inject = ['userListService'];

	function UserListController(userListService,$scope){
		var userList = this;
		userList.searchName = '';
		userList.users = [];
		userList.search = search;

		function search(searchName) {
			return getUsers(searchName).then(function(){
			})
		}


		function getUsers(searchName) {
			return userListService.getUsers(searchName)
				.then(function(data) {
					console.log(data);
					if(typeof data !== undefined){
					userList.users = data.items;
					return userList.users;
				}
			})
		}
	}
})();