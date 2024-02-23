$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDoUsuario = $('#nome-aluno').val();
        const novoItem = $('<li></li>');
        const nomeTarefa = $(`<div class="nome-tarefa"><p>${nomeDoUsuario}</p></div>`);

        nomeTarefa.click(function() {
            $(this).toggleClass('nome-tarefa');
        });

        nomeTarefa.appendTo(novoItem);
        novoItem.appendTo('ul');
    })
})