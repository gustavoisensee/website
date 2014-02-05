/*
 Scope v1.0.2
 Date: 2014-01-26
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function Scope() {
	var current = "home",

		modulo = angular
			.module('WebSite', [])
			.directive('menu', function() {
			    return {
			      	template: '<li class="current">'+
						'<span data-to="home" class="menu">{{language.menuHome}}</span>'+
						'</li><li><span data-to="project" class="menu">{{language.menuProject}}</span>'+
						'</li><li><span data-to="contact" class="menu">{{language.menuContact}}</span>'+
						'</li><li><span>lang: { </span>'+
						'<span class=\'{{language.lang == "ptBR" ? "underline" : ""}} \''+
						'  ng-click=\'alterLang("ptBR")\'>{{language.menuLangPtBR}}</span> <span>, </span>'+
						'<span class=\'{{language.lang == "enUS" ? "underline" : ""}} \''+
						'  ng-click=\'alterLang("enUS")\'>{{language.menuLangEnUS}}</span> <span> }</span></li>' +
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
			}
		),

		Controller = function ($scope) {
			$scope.contact = {
				name: ''
			};
			$scope.language = (localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR);

			$scope.sendEmail = function(contact, validate) {
				if (validate) {
					sendEmail(contact);
					$scope.contact = {};
				} else {
					noty({
					  	type: 'warning',
					  	layout: 'bottomRight',
					    text: $scope.language.fillField,
					    timeout: 3000
				  	});
				}
			}

			$scope.alterLang = function (lang) {
				var condition = (lang === 'ptBR'),
					lang = (condition ? langPage.ptBR : langPage.enUS);

				$scope.language = lang;
				localStorage.setItem('lang', JSON.stringify(lang));
			}
		},

		goToSection = function (event) {
			var section = $(this).attr('data-to'),
				sectionOffset = $('#'+section).offset().top,
				lastC = '';

			lastC = this.id.slice(-1);

			$('#menu-navigation li').removeClass('current');
			$('#dl-menu li').removeClass('current');
			
			$(this).parent().addClass('current');
			$('[data-to='+section+']').parent().addClass('current');
			current = section;
			$(window).off('scroll');

			$('html, body').stop(true, false).animate({
	        	scrollTop: sectionOffset
	    	}, 
	    	{
	    		duration: 400, 
		    	complete: function() {
		    		$(window).on('scroll', goToSectionTwo);
		    	}
	    	});
	    	if ($('#dl-menu .dl-menuopen').length > 0) {
	    		$('#btnDlmenu').click();	
	    	};
		},

		goToSectionTwo = function (event) {
			$('section').each(function(){
				var cont = ($(window).scrollTop() - $(this).offset().top);
				if (current != $(this).attr('id') && (cont > -100) && (cont < 100)) {
					if(current != $(this).attr('id')){
						current = $(this).attr('id');
						$('#menu-navigation li, #dl-menu li').removeClass('current');
						$('#menu-navigation [data-to="'+current+'"], #dl-menu [data-to="'+current+'"]').parent('li').addClass("current");
						$('#menu-navigation [data-to="'+current+'"], #dl-menu [data-to="'+current+'"]' ).trigger('click');
						return false;
					}
				}
			});
		}

		goDownProject = function (event){
			$('[data-to=project]').trigger('click');
			event.preventDefault();
		},
		
		goDownContact = function (event){
			$('[data-to=contact]').trigger('click');
			event.preventDefault();
		},

		sendEmail = function (contact){
			debugger;
			var data = {
			    name: contact.name.$viewValue,
			    subject: contact.subject.$viewValue,
			    email: contact.email.$viewValue,
			    message: contact.message.$viewValue
			},
				language = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR;

			$.ajax({
			    type: "POST",
			    url: "email.php",
			    data: data,
			    success: function() {
			        noty({
					  	type: 'success',
					  	layout: 'bottomRight',
					    text: language.sendContactSuccess,
					    timeout: 3000
				  	});
			    },
			    error: function() {
			    	noty({
					  	type: 'warning',
					  	layout: 'bottomRight',
					    text: language.sendContactError,
					    timeout: 3000
				  	});
			    }
			});
		},

		openMenu = function () {
			if ($('#dl-menu .dl-menuopen').length > 0) {
				$('#dl-menu ul').removeClass('dl-menuopen');
			} else {
				$('#dl-menu ul').addClass('dl-menuopen');
			}
		},

		load = function () {
			$('body').data({'go': true});
			$('#menu-navigation .menu, #dl-menu .menu').on('click', goToSection);
			$('#arrows-down-doc').on('click', goDownProject);
			$('#arrows-down-con').on('click', goDownContact);
			$('#btnDlmenu').on('click', openMenu);

			$(window).on('scroll', goToSectionTwo);
		}	

	return {
		load: load,
		Controller: Controller
	};

}
var scope = new Scope();

$(document).ready(function() {
	scope.load();
});