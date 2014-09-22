/*
 App v1.0.4
 Date: 2014-09-21
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function App() {
	var current = "home",

		modulo = angular
		.module('WebSite', [])
		.directive('menu', function() {
		    return {
		      	template: 
		      		'<li class="current"><span data-to="home" class="menu">{{language.menuHome}}</span>'+
					'</li><li><span data-to="project" class="menu">{{language.menuProject}}</span></li>'+
					'<li><span>lang: { </span>'+
					' <span class=\'{{language.lang == "ptBR" ? "underline" : ""}} \''+
					'  ng-click=\'alterLang("ptBR")\'>{{language.menuLangPtBR}}</span> <span>, </span>'+
					' <span class=\'{{language.lang == "enUS" ? "underline" : ""}} \''+
					'  ng-click=\'alterLang("enUS")\'>{{language.menuLangEnUS}}</span> <span> }</span></li>'
		    };
		})
		.directive('menucontact', function() {
		    return {
		      	template:
		      		'<div class="contact">' +
					'<a class="gplus-icon" href="https://plus.google.com/109325404047497404656/about"' +
					'target="_blank" title="Google+ - Gustavo Isensee"></a>' +
                    '<a class="facebook-icon" href="http://www.facebook.com/profile.php?id=100000394403997"' +
            		'target="_blank" title="Facebook - Gustavo Isensee"></a>'+
                    '<a class="linkedin-icon" href="http://www.linkedin.com/pub/gustavo-isensee/3a/93b/752"' +
            		'target="_blank" title="LinkedIn - Gustavo Isensee"></a>' +
            		'<a class="twitter-icon" href="http://twitter.com/gustavoisensee" target="_blank"' +
            		'title="Twitter - @gustavoisensee"></a>' +
					'<a class="github-icon" href="https://github.com/gustavoisensee" target="_blank" ' +
            		'title="Github - gustavoisensee"></a></div>'
		    };
		}),

		Controller = function ($scope) {
			$scope.language = (localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR);
			$scope.buttonProject = 1;

			$scope.alterLang = function (lang) {
				var condition = (lang === 'ptBR'),
					lang = (condition ? langPage.ptBR : langPage.enUS);

				$scope.language = lang;
				localStorage.setItem('lang', JSON.stringify(lang));
			}
		},

		goToSection = function (event) {
			var section = $(this).attr('data-to'),
				sectionOffset = $('#' + section).offset().top;

			$('#menu-navigation > li, #dl-menu > ul > li').removeClass('current');
			$('[data-to=' + section + ']').parent().addClass('current');

			$('html, body').stop(true, false).animate({
	        	scrollTop: sectionOffset
	    	});
	    	
	    	if ($('#dl-menu .dl-menuopen').length > 0) {
	    		$('#btnDlmenu').click();	
	    	};
		},

		openMenu = function () {
			if ($('#dl-menu .dl-menuopen').length > 0) {
				$('#dl-menu ul').removeClass('dl-menuopen');
			} else {
				$('#dl-menu ul').addClass('dl-menuopen');
			}
		},

		load = function () {
			$('#menu-navigation .menu, #dl-menu .menu').on('click', goToSection);
			$('#btnDlmenu').on('click', openMenu);
		}	

	return {
		load: load,
		Controller: Controller
	};

}
var app = new App();

$(document).ready(function() {
	app.load();
});