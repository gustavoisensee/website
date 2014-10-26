/*
App v1.0.5
Date: 2014-10-25
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

			$scope.loadList = function () {
				$scope.listA = [
					{ cat: 1, name: '2014', class: 'header item', href: '', title: '', target: '', favorite: '' },
					{ cat: 1, name: 'LabTrans', class: 'head item', href: 'http://www.labtrans.ufsc.br/', title: '', target: '_blank', favorite: '' },
					{ cat: 1, name: 'Urano - SAC', class: 'item', href: '', title: $scope.language.noLink, target: '', favorite: 'star-icon right' },
					{ cat: 1, name: 'Hórus - SAC', class: 'item', href: '', title: $scope.language.noLink, target: '', favorite: 'star-icon right' },
					{ cat: 1, name: 'TLD - Tecnologia de Levantamento de Dados', class: 'item', href: '', title: $scope.language.noLink, target: '', favorite: 'star-icon right' },
					{ cat: 1, name: 'SicPort - ANTAQ', class: 'item', href: 'http://www.labtrans.ufsc.br/pt-br/projetos/portos/sicport/', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 1, name: 'GitHub', class: 'head item', href: 'https://github.com/', title: '', target: '_blank', favorite: '' },
					{ cat: 1, name: 'nodejs-sqlserver', class: 'item', href: 'https://github.com/gustavoisensee/nodejs-sqlserver', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 1, name: 'informaticaeaprofissao', class: 'item', href: 'https://github.com/gustavoisensee/informaticaeaprofissao', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 1, name: 'gustavoisensee.com', class: 'item', href: 'https://github.com/gustavoisensee/gustavoisensee.com', title: '', target: '_blank', favorite: 'success-icon right' },

					{ cat: 2, name: '2013', class: 'header item', href: '', title: '', target: '', favorite: '' },
					{ cat: 2, name: 'LabTrans', class: 'head item', href: 'http://www.labtrans.ufsc.br/', title: '', target: '_blank', favorite: '' },
					{ cat: 2, name: 'SicPort - ANTAQ', class: 'item', href: 'http://www.labtrans.ufsc.br/pt-br/projetos/portos/sicport/', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'Banco de Horas', class: 'item', href: '', title: $scope.language.noLink, target: '', favorite: 'success-icon right' },
					{ cat: 2, name: 'GitHub', class: 'head item', href: 'https://github.com/', title: '', target: '_blank', favorite: '' },
					{ cat: 2, name: 'curvaabc', class: 'item', href: 'https://github.com/gustavoisensee/curvaabc', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'gustavoisensee.com', class: 'item', href: 'https://github.com/gustavoisensee/gustavoisensee.com', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'Gplus-button', class: 'item', href: 'https://github.com/gustavoisensee/gplus-button', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'Pinterest-button', class: 'item', href: 'https://github.com/gustavoisensee/pinterest-button', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'Tumblr-button', class: 'item', href: 'https://github.com/gustavoisensee/tumblr-button', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 2, name: 'Linkedin-button', class: 'item', href: 'https://github.com/gustavoisensee/linkedin-button', title: '', target: '_blank', favorite: 'success-icon right' },

					{ cat: 3, name: '2012/2009', class: 'header item', href: '', title: '', target: '', favorite: '' },
					{ cat: 3, name: 'TDSA', class: 'head item', href: 'http://www.tdsa.com.br/', title: '', target: '_blank', favorite: '' },
					{ cat: 3, name: 'Realclinic', class: 'item', href: 'http://tdsa.com.br/wp/realclinic/', title: '', target: '_blank', favorite: 'success-icon right' },
					{ cat: 3, name: 'Realblood', class: 'item', href: 'http://tdsa.com.br/wp/realblood/', title: '', target: '_blank', favorite: 'success-icon right' }
				];
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

			$scope.loadList();
		}]);
})();