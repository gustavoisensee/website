!function(){angular.module("WebSite",[]).controller("Controller",["$scope",function(a){a.language=localStorage.getItem("lang")?JSON.parse(localStorage.getItem("lang")):langPage.ptBR,a.alterLang=function(e){var g="ptBR"===e,e=g?langPage.ptBR:langPage.enUS;a.language=e,localStorage.setItem("lang",JSON.stringify(e))}}])}();
function LangPage(){var e=(new Date).getFullYear()-2009,o={lang:"ptBR",menuHome:"Início",menuProject:"Projetos",menuContact:"Contato",menuLangPtBR:"Português",menuLangEnUS:"English",developer:"Desenvolvedor Web",myDescription:"Olá, Eu trabalho com desenvolvimento web a "+e+" anos, sou formado em Sistemas de Informação pela UNISUL e também em técnico de programação pelo colégio SENAI. Participo de projetos open source no GitHub, sou um grande entusiasta Javascript, Organizador da comunidade FloripaJS e também do Front-in-Floripa um dos maiores eventos de front-end de Santa Catarina e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",legendTitleCurrentProjet:"Projeto corrente",legendTitleFinishedProjet:"Projeto finalizado",goToProject:"Ir para Projetos",project:"Projetos",noLink:"Sem link"},a={lang:"enUS",menuHome:"Home",menuProject:"Projects",menuContact:"Contact",menuLangPtBR:"Portuguese",menuLangEnUS:"English",developer:"Web Developer",myDescription:"Hi, I have been working with web development for "+e+" years, I'm graduated in Information Systems at Unisul and also in technical programming at SENAI college. I have participated in open source projects on Github and I'm a great Javascript enthusiast, I'm a organizer of the FloripaJS community and also Front-in-Floripa one of the biggest front-end events of Santa Catarina and I'm currently working at Labtrans, Transport and Logistics Laboratory of the Federal University of Santa Catarina, Brazil.",legendTitleCurrentProjet:"Current project",legendTitleFinishedProjet:"Finished project",goToProject:"Go to Projects",project:"Projects",noLink:"No link"};return{ptBR:o,enUS:a}}var langPage=new LangPage;