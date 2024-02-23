$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDoUsuario = $('#nome-aluno, #tarefa').val();
        const novoItem = $(`<li style="text-decoration: line-through"></li>`);
        $(`${nomeDoUsuario}`).appendTo(novoItem);
    })
})