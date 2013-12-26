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
			var section = $(this).attr('href'),
				sectionOffset = $(section).offset().top,
				speed = Math.round(sectionOffset/2)+800;

			$('body').data({'go': false}).on("mousewheel", function(event) {
				$('body').removeClass('opaque');
				event.preventDefault();
				return false;
     		});
			
			$('html, body').stop(true, false).animate({
	        	scrollTop: sectionOffset
	    	}, speed, setSection);
	    	event.preventDefault();
		},

		changeSection = function () {
			$('#menu-navigation li').removeClass('current');
			$('#menu-navigation a[href="#'+current+'"]').parent('li').addClass("current");
			if($('body').data('go')){
				$('#menu-navigation a[href="#'+current+'"]').trigger('click');
			}
		},

		checkSection = function () {
			$('section').each(function(){
				$('#masthead').removeAttr('class').addClass(current);
				if ($(window).scrollTop()>=$(this).offset().top-50 && $(window).scrollTop()<$(this).offset().top+$(this).height()-50){
					if(current != $(this).attr('id')){
						current = $(this).attr('id');
						$('#masthead').removeAttr('class');
						changeSection();
					}
					return false;
				}
			});
			if($(window).scrollTop()>=$('#'+current).offset().top+100 && $(window).scrollTop()<$('#'+current).offset().top+$('#'+current).height()+100 && $('body').data('go')){
				$('body').addClass('opaque');
			} else {
				$('body').removeClass('opaque');
			}
		},
		
		setSection = function () {
			$('#masthead').removeAttr('class');
			$('body').data({'go': true}).off('mousewheel').removeClass('opaque');
		},

		goToDefinition = function (event) {
			if($('#project').data('ready')) {
				$(this).parent('li').addClass('current');
				$('#project').slideme('playToId', $(this).attr('href'));
	    	}
	    	event.preventDefault();
		},

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
			$('#menu-navigation a').on('click', goToSection);
			$('#arrows-down-doc').on('click', goDownProject);
			$('#arrows-down-con').on('click', goDownContact);
			
			$('#project, #contact').slideme({ speed: 3000, css3: true });

			$(window).on('scroll', checkSection).on('resize', function(event) {
				$('#menu-navigation a[href="#'+current+'"]').trigger('click');
			}).trigger('scroll');

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
