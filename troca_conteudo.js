var atual = 'objetivos';

function troca_conteudo(id_da_div) {
	document.getElementById(atual).style.display = 'none';
	atual = id_da_div;
	document.getElementById(id_da_div).style.display = '';
}
