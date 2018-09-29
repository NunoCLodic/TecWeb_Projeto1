
/*Função para fixar Menu no topo*/

jQuery("document").ready(function($){
	var offset = $('#Menu').offset().top;
	var offset1 = $('#Social').offset().top;

	var $Menu = $('#Menu');
	var $Social = $('#Social');
	
	$(document).on('scroll', function () {

    	if (offset <= $(window).scrollTop()) {
       		 $Menu.addClass('fixarMenu');
    			} else {
       	 	$Menu.removeClass('fixarMenu');
   		 }
   		if (offset1 <= $(window).scrollTop()) {
       		 $Social.addClass('fixarSocial');
    			} else {
       	 	$Social.removeClass('fixarSocial');
   		 }
	});
});


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

