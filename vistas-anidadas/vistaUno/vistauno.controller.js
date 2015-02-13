(function() {
	'use strict';
	angular
		.module('app')
		.controller('VistaUnoController',VistaUnoController);
	VistaUnoController.$injector = ['$log', '$stateParams'];
	function VistaUnoController ($log, $stateParams) {
		var vm = this;
		vm.item = $stateParams.item;
		vm.vista = $stateParams.vista;
	}
})();