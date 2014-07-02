/*
 Langugage v1.0.3
 Date: 2014-06-26
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function calculateAge() {
    var ageDif = Date.now() - new Date(1988,08,22).getTime();
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function LangPage () {
	var ptBR = {
		lang: 'ptBR',
		menuHome: 'Início',
		menuProject: 'Projetos',
		menuContact: 'Contato',
		menuLangPtBR: 'Português',
		menuLangEnUS: 'Inglês',
		developer: 'Desenvolvedor Web',
		myDescription: "Eu sou Gustavo, tenho " + calculateAge() + " anos de idade, formado como técnico de programação pelo colégio SENAI. Atualmente estou cursando a 8ª de Sistemas de Informação na UNISUL. Trabalhei em duas empresas privadas, particípo de projetos open source no GitHub, sou um grande entusiasta Javascript, certificado MCSD pela Microsoft e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",

		goToProject: 'Ir para Projetos',
		project: 'Projetos',

		goToContact: 'Ir para Contato',
		name: 'Nome',
		email: 'Endereço de e-mail',
		subject: 'Assunto',
		message: 'Mensagem',
		send: 'Enviar',
		fieldRequired: 'Obrigatório',
		noLink: 'Sem link',

		fillField: 'Preencha os campos corretamente!',
		sendContactSuccess: 'Mensagem enviada com sucesso!',
		sendContactError: 'Ocorreu um problema, preencha os dados corretamente e tente novamente!'
	},

		enUS = {
			lang: 'enUS',
			menuHome: 'Home',
			menuProject: 'Projects',
			menuContact: 'Contact',
			menuLangPtBR: 'Portuguese',
			menuLangEnUS: 'English',
			developer: 'Web Developer',
			myDescription: "I am Gustavo, I'm " + calculateAge() + " years old, Graduated in technical programming at the college SENAI. I'm currently studying the 8th of Information Systems at UNISUL. I worked in two private companies, participate in open source projects on GitHub, I'm a great enthusiast Javascript, MCSD certified by Microsoft and I'm currently working on LabTrans, Transportation and Logistics Laboratory of the Federal University of Santa Catarina, Brazil.",

			goToProject: 'Go to Projects',
			project: 'Projects',

			goToContact: 'Go to Contact',
			name: 'Name',
			email: 'E-mail address',
			subject: 'Subject',
			message: 'Message',
			send: 'Send',
			fieldRequired: 'Required',
			noLink: 'No link',

			fillField: 'Fill the fields correctly!',
			sendContactSuccess: 'Message sent successfully!',
			sendContactError: 'There was a problem, fill in the data correctly and try again!'
		};

	return {
		ptBR: ptBR,
		enUS: enUS
	};
}
var langPage = new LangPage();