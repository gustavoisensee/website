/*
Language v1.0.5
Date: 2016-02-01
(c) 2013 Gustavo Isensee
License: MIT
*/

function LangPage () {
	var _ptBR = {
		lang: 'ptBR',
		menuHome: 'Início',
		menuProject: 'Projetos',
		menuContact: 'Contato',
		menuLangPtBR: 'Português',
		menuLangEnUS: 'English',
		developer: 'Desenvolvedor Web',
		myDescription: "Olá, Eu trabalho com desenvolvimento web a 7 anos, sou formado em Sistemas de Informação pela UNISUL e também em técnico de programação pelo colégio SENAI. Trabalhei em duas empresas privadas, participo de projetos open source no GitHub, sou um grande entusiasta Javascript, certificado MCSD pela Microsoft e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",
		legendTitleCurrentProjet: 'Projeto corrente',
		legendTitleFinishedProjet: 'Projeto finalizado',
		goToProject: 'Ir para Projetos',
		project: 'Projetos',
		noLink: 'Sem link'
	},

		_enUS = {
			lang: 'enUS',
			menuHome: 'Home',
			menuProject: 'Projects',
			menuContact: 'Contact',
			menuLangPtBR: 'Portuguese',
			menuLangEnUS: 'English',
			developer: 'Web Developer',
			myDescription: "Hi, I work with web development for 7 years, I'm graduated in Information Systems at Unisul and also in technical programming at SENAI college. I have worked in two private companies and also participate in open source projects on Github. I'm a great Javascript enthusiast, MCSD certified by Microsoft  and I am currently working on Labtrans, Transport and Logistics Laboratory of the Federal University of Santa Catarina, Brazil.",
			legendTitleCurrentProjet: 'Current project',
			legendTitleFinishedProjet: 'Finished project',
			goToProject: 'Go to Projects',
			project: 'Projects',
			noLink: 'No link'
		};

	return {
		ptBR: _ptBR,
		enUS: _enUS
	};
}
var langPage = new LangPage();