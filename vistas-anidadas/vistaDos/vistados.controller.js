(function() {
	'use strict';
	angular
		.module('app')
		.controller('VistaDosController',VistaDosController);
	VistaDosController.$injector = ['$log', '$stateParams'];
	function VistaDosController ($log, $stateParams) {
		var vm = this;
		vm.item = $stateParams.item;
		vm.vista = $stateParams.vista;
	}
})();