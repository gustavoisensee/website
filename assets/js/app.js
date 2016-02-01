/*
App v1.0.8
Date: 2016-02-01
(c) 2013-2015 Gustavo Isensee
License: MIT
*/

(function () {
	angular.module('WebSite', []).
	controller('Controller', ['$scope', function($scope) {
		$scope.language = (localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR);

		$scope.alterLang = function (lang) {
			var condition = (lang === 'ptBR'),
				lang = (condition ? langPage.ptBR : langPage.enUS);

			$scope.language = lang;
			localStorage.setItem('lang', JSON.stringify(lang));
		};

	}]);
})();