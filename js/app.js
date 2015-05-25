/*
App v1.0.7
Date: 2015-05-25
(c) 2013-2015 Gustavo Isensee
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
		controller('Controller', ['$scope', '$http', function($scope, $http) {
			$scope.language = (localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR);
			$scope.buttonProject = 4;
			$scope.menuOpen = '';

			$scope.loadList = function () {
				$scope.listProjects = [];
				$http.get('./dist/store/projects.json').
					success(function(data, status, headers, config) {
						$scope.listProjects = data;
					});

				$scope.listYearsProjects = [];
				$http.get('./dist/store/years.json').
					success(function(data, status, headers, config) {
						$scope.listYearsProjects = data;
					});
			};

			$scope.alterLang = function (lang) {
				var condition = (lang === 'ptBR'),
					lang = (condition ? langPage.ptBR : langPage.enUS);

				$scope.language = lang;
				localStorage.setItem('lang', JSON.stringify(lang));

				$scope.loadList();
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

			$scope.goToYearProject = function (id) {
				$scope.buttonProject = id;
			};

			$scope.loadList();
		}]);
})();