/*
 Langugage v1.0.2
 Date: 2014-01-26
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function LangPage () {
	var ptBR = {
		lang: 'ptBR',
		menuHome: 'Início',
		menuProject: 'Projetos',
		menuContact: 'Contato',
		menuLangPtBR: 'Português',
		menuLangEnUS: 'Inglês',
		developer: 'Desenvolvedor Front-end',
		myDescription: "Eu sou Gustavo, tenho 25 anos de idade, formado em técnico de programação pelo colégio SENAI. Atualmente estou cursando a 7ª de Sistemas de Informação na UNISUL. Trabalhei em duas empresas privadas, particípo de projetos open source e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",

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
			developer: 'Front-end Developer',
			myDescription: "I am Gustavo, I'm 25 years old, Graduated in technical programming by SENAI College. I am currently studying the 7th of Information Systems at UNISUL. I worked in two private companies, participate in open source projects and am currently working on LabTrans, Transportation and Logistics Laboratory in Federal University of Santa Catarina, Brazil.",

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