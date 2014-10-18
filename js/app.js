/*
 App v1.0.4
 Date: 2014-09-21
 (c) 2013 Gustavo Isensee
 License: MIT
*/

(function () {
	var current = "home",

		modulo = angular.module('WebSite', []).
		directive('menu', function() {
		    return {
		    	restrict: 'E',
		      	templateUrl: 'template/menu.html'
		    };
		}).
		directive('menucontact', function() {
		    return {
		    	restrict: 'E',
		      	templateUrl: 'template/menuContact.html'
		    };
		}).
		controller('Controller', ['$scope', function($scope) {
			$scope.language = (localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR);
			$scope.buttonProject = 1;
			$scope.menuOpen = '';

			$scope.alterLang = function (lang) {
				var condition = (lang === 'ptBR'),
					lang = (condition ? langPage.ptBR : langPage.enUS);

				$scope.language = lang;
				localStorage.setItem('lang', JSON.stringify(lang));
			};

			$scope.openMenu = function () {
				$scope.menuOpen = ($scope.menuOpen == '' ? 'dl-menuopen' : '');
			};

			$scope.goToSection = function (e) {
				var eTo = document.getElementsByClassName('current'),
					sectionOffset = document.getElementById(e.target.dataset.to).offsetTop;

				for (var i = 0; i < eTo.length; i++) {
					eTo[i].className = '';
				}
				
				e.target.parentNode.className = 'current';
				document.body.scrollTop = sectionOffset;
		    	
		    	$scope.openMenu();
			};
		}]);
})();