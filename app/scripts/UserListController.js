(function(){
	'use strict'
	angular
		.module('app')
		.controller('UserListController',UserListController);
	UserListController.$inject = ['userListService'];
	function UserListController(userListService){
		var userList = this;
		userList.searchName = 'a'
		userList.users = []
		
		activate(userList.searchName);

		function activate(searchName) {
			return getUsers(searchName).then(function(){
			})
		}

		function getUsers(searchName) {
			return userListService.getUsers(searchName)
				.then(function(data) {
					userList.users = data.items;
					return userList.users;
				})
		}
	}
})();