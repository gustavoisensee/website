/*
 Langugage v1.0.4
 Date: 2014-09-21
 (c) 2013 Gustavo Isensee
 License: MIT
*/
function calculateAge() {
    var ageDif = Date.now() - new Date('1988-08-22').getTime();
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
		myDescription: "Eu sou Gustavo, tenho " + calculateAge() + " anos de idade, formado como técnico de programação pelo colégio SENAI. Atualmente estou cursando a 8ª fase de Sistemas de Informação na UNISUL. Trabalhei em duas empresas privadas, particípo de projetos open source no GitHub, sou um grande entusiasta Javascript, certificado MCSD pela Microsoft e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",

		legendTitleCurrentProjet: 'Projeto corrente',
		legendTitleFinishedProjet: 'Projeto finalizado',
		goToProject: 'Ir para Projetos',
		project: 'Projetos'
	},

		enUS = {
			lang: 'enUS',
			menuHome: 'Home',
			menuProject: 'Projects',
			menuContact: 'Contact',
			menuLangPtBR: 'Portuguese',
			menuLangEnUS: 'English',
			developer: 'Web Developer',
			myDescription: "I am Gustavo, I'm " + calculateAge() + " years old, Graduated in technical programming at the college SENAI. I'm currently studying the 8th stage of Information Systems at UNISUL. I worked in two private companies, participate in open source projects on GitHub, I'm a great enthusiast Javascript, MCSD certified by Microsoft and I'm currently working on LabTrans, Transportation and Logistics Laboratory of the Federal University of Santa Catarina, Brazil.",

			legendTitleCurrentProjet: 'Current project',
			legendTitleFinishedProjet: 'Finished project',
			goToProject: 'Go to Projects',
			project: 'Projects'
		};

	return {
		ptBR: ptBR,
		enUS: enUS
	};
}
var langPage = new LangPage();