function Scope() {
	var current = "home",

		Controllers = angular.module('Controllers', []),
		Controller = function ($scope, $http) {
			$scope.user = {};
			$scope.langPageCurrent = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : langPage.ptBR;

			$scope.sendEmail = function(user, validate) {
				if (validate) {
					sendEmail(user);
					$scope.user = {};
				}
			}

			$scope.alterLang = function (lang) {
				var condition = (lang === 'ptBR'),
					lang = (condition ? langPage.ptBR : langPage.enUS);

				$scope.langPageCurrent = lang;
				localStorage.setItem('lang', JSON.stringify(lang));
			}
		},
		

		goToSection = function (event) {
			var section = $(this).attr('data-to'),
				sectionOffset = $('#'+section).offset().top;
			debugger;
			$('#menu-navigation li').removeClass('current');
			$(this).parent().addClass('current');
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
		},

		goToSectionTwo = function (event) {
			$('section').each(function(){
				var cont = ($(window).scrollTop() - $(this).offset().top);
				if (current != $(this).attr('id') && (cont > -100) && (cont < 100)) {
					if(current != $(this).attr('id')){
						current = $(this).attr('id');
						$('#menu-navigation li').removeClass('current');
						$('#menu-navigation [data-to="'+current+'"]').parent('li').addClass("current");
						$('#menu-navigation [data-to="'+current+'"]').trigger('click');
						return false;
					}
				}
			});
		}

		goDownProject = function (event){
			$('#menuProject').trigger('click');
			event.preventDefault();
		},
		
		goDownContact = function (event){
			$('#menuContact').trigger('click');
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

		load = function () {
			$('body').data({'go': true});
			$('#menu-navigation .menu').on('click', goToSection);
			$('#arrows-down-doc').on('click', goDownProject);
			$('#arrows-down-con').on('click', goDownContact);

			$(window).on('scroll', goToSectionTwo);

			Controller.$inject = ['$scope', '$http'];
			Controllers.controller('Controllers', Controller);
		}	

	return {
		Controller: Controller,
		load: load
	};

}
var scope = new Scope();

$(document).ready(function() {
	scope.load();
});
