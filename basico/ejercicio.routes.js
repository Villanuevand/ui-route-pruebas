(function(){
	'use strict';
	angular
		.module('app')
		.config(Routes);

	Routes.$injector = ['$stateProvider','$urlRouterProvider'];
	function Routes($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url : '/',
				template : '<h2>Inicio</h2><a ui-sref="otra">Otra ventana</a>'
			})
			.state('otra',{
				url : '/otra',
				template : '<h2>Otra dirección</h2><a ui-sref="home">Volver al Home</a>'
			})
	}
})();