/*
	Language v1.0.6
	Date: 2017-07-14
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