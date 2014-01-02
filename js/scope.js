/*
 Scope v1.0.1
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function Scope() {
	var current = "home",

		modulo = angular
			.module('WebSite', [])
			.directive('menu', function() {
			    return {
			      	template: '<li class=\'current\'>'+
						'<span data-to=\'home\' class=\'menu\'>{{language.menuHome}}</span>'+
						'</li><li><span data-to=\'project\' class=\'menu\'>{{language.menuProject}}</span>'+
						'</li><li><span data-to=\'contact\' class=\'menu\'>{{language.menuContact}}</span>'+
						'</li><li><span>lang: { </span>'+
						'<span class=\"{{language.lang == \'ptBR\' ? \'underline\' : \'\'\}}"'+
						'  ng-click=\"alterLang(\'ptBR\')\">{{language.menuLangPtBR}}</span>'+
						'<span>, </span>'+
						'<span class=\"{{language.lang == \'enUS\' ? \'underline\' : \'\'}}\"'+
						'  ng-click=\"alterLang(\'enUS\')\">{{language.menuLangEnUS}}</span>'+
						'<span> }</span></li>'
			    };
			}
		),

		Controller = function ($scope) {
			$scope.user = {};
			$scope.language = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR;

			$scope.sendEmail = function(user, validate) {
				if (validate) {
					sendEmail(user);
					$scope.user = {};
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
	    		duration: 800, 
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
			var data = {
			    name: contact.name,
			    subject: contact.subject,
			    email: contact.email,
			    message: contact.message
			};
			$.ajax({
			    type: "POST",
			    url: "email.php",
			    data: data,
			    success: function() {
			        noty({
					  	type: 'success',
					  	layout: 'bottomRight',
					    text: 'Mensagem enviada com sucesso!',
					    timeout: 3000
				  	});
			    },
			    error: function() {
			    	noty({
					  	type: 'warning',
					  	layout: 'bottomRight',
					    text: 'Ocorreu um problema, preencha os dados corretamente e tente novamente!',
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
		}

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