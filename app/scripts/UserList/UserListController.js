(function(){
	'use strict'
	angular
		.module('app')
		.controller('UserListController',UserListController);

	UserListController.$inject = ['userListService'];

	function UserListController(userListService){
		var vm = this;
		vm.searchName = '';
		vm.users = [];
		vm.search = search;
		vm.isSearched = true;

		function search(searchName) {
			return getUsers(searchName).then(function(){
			})
		}


		function getUsers(searchName) {
			return userListService.getUsers(searchName)
				.then(function(data) {
					if(typeof data !== undefined && data.items.length !==0){
						vm.users = data.items;
						vm.isSearched = true;
						return vm.users;
					}
					else{
						vm.users =[];
						vm.isSearched = false;
					}
				})
			}
		}
})();