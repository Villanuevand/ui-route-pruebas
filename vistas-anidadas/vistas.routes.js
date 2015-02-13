(function(){
	'use strict';
	angular
		.module('app')
		.config(Routes);

	Routes.$injector = ['$stateProvider','$urlRouterProvider'];
	function Routes($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('vistaUno',{
				url : '/uno',
				templateUrl : 'vistaUno/vistaUno.html'
			})
			.state('vistaUno.listado',{
				url : '/:item/:vista',
				templateUrl : 'vistaUno/item.html',
				controller : 'VistaUnoController',
				controllerAs : 'lista'
			})
			.state('vistaDos',{
				url : '/dos',
				templateUrl : 'vistaDos/vistaDos.html'
			})
			.state('vistaDos.listado',{
				url : '/:item/:vista',
				templateUrl : 'vistaDos/item.html',
				controller : 'VistaDosController',
				controllerAs : 'lista'

			})
	}
})();