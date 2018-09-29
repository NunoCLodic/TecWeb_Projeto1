
/*Botao voltar ao Topo da Pagina*/
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

/*Função para calcular o IMC*/
function calculaIMC() {
	var peso = document.getElementById("peso").innerHTML;
	var altura = document.getElementById("altura").innerHTML;
	var imc = peso * altura * altura;
	addPaciente(imc)
}

function excluir() {

}

function addPaciente(imc) {

}

