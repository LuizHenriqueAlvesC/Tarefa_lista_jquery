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
        const novoItem = $(`<li style="text-decoration: line-through"></li>`);
        $(`<p
        <div class="nome-tarefa">
        <p>${nomeDoUsuario}</p>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})