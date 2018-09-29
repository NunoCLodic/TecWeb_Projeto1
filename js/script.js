
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

function Adicionar(){
    $("#tblCadastro tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
				"<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td></td>"+
        "<td><img src='img/disk.png' class='btnSalvar'> <img src='img/delete.png'class='btnExcluir'/></td>"+
        "</tr>");

        $(".btnSalvar").bind("click", Salvar);
        $(".btnExcluir").bind("click", Excluir);
};

function Salvar() {
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdPeso = par.children("td:nth-child(2)");
    var tdAltura = par.children("td:nth-child(3)");
		var tdIdade = par.children("td:nth-child(4)");
		var tdIMC = par.children("td:nth-child(5)");

    tdNome.html(tdNome.children("input[type=text]").val());
    tdPeso.html(tdPeso.children("input[type=text]").val());
		tdAltura.html(tdAltura.children("input[type=text]").val());
		tdIdade.html(tdIdade.children("input[type=text]").val());
		tdIMC.html(tdIMC.children("input[type=text]").val());
    tdBotoes.html("<img src='img/delete.png' class='btnExcluir'/> <img src='img/pencil.png' class='btnEditar'/>");

    $(".btnEditar").bind("click", Editar);
    $(".btnExcluir").bind("click", Excluir);
};

function Editar(){
 var par = $(this).parent().parent(); //tr
 var tdNome = par.children("td:nth-child(2)");
 var tdPeso = par.children("td:nth-child(3)");
 var tdAltura = par.children("td:nth-child(4)");
 var tdIdade = par.children("td:nth-child(5)");
 var tdIMC = par.children("td:nth-child(6)");

 tdNome.html("<input type='text'id='txtNome' value='"+tdNome.html()+"'/>");
 tdPeso.html("<input type='text' id='txtPeso' value='"+tdPeso.html()+"'/>");
 tdAltura.html("<input type='text' id='txtAltura' value='"+tdAltura.html()+"'/>");
 tdIdade.html("<input type='text' id='txtIdade' value='"+tdIdade.html()+"'/>");
 tdIMC.html("<input type='text' id='txtIMC' value='"+tdIMC.html()+"'/>");
 tdBotoes.html("<img src='img/disk.png' class='btnSalvar'/>");

 $(".btnSalvar").bind("click", Salvar);
 $(".btnEditar").bind("click", Editar);
 $(".btnExcluir").bind("click", Excluir);
};

function Excluir(){
    var par = $(this).parent().parent(); //tr
    par.remove();
};

$(function(){
    $(".btnEditar").bind("click", Editar);
    $(".btnExcluir").bind("click", Excluir);
    $("#btnAdicionar").bind("click", Adicionar);

});
