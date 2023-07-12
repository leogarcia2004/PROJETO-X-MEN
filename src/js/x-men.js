/* OBEJTIVO 1 - Quando passar o mouse em cima do perosnagem na listagem, devemos selecioná-lo. */
// passo 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.

 const personagens = document.querySelectorAll('.personagem') // uma forma de ter a representação de todos os itens dos personagens de uma só vez, uma busca por todos os seletores. Uma busca por todos os seletores que tem a class 'personagem'. 

 // Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o  ursor do mouse.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){ // Condição caso a pessoa esteja abrindo a página no celular.(se a largura da tela for menor de 450px).
            window.scrollTo({top: 0, behavior: 'smooth' }); 
        }   

        //Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos reomver a seleção dele.
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado'); //Adicionar a classe selecionado no personagem que passei o mouse em cima.

        // OBJETIVO 2 - Quando passar o mouse em cima do personagem da listagem, vai trocar a imagem, o nome e a descrição do personagem grande.

        // Passo 1 - Pegar o elemento do personagem grande pra adicionar as informações nele.
        alterarImagemPersonagemSelecionado(personagem);

        // Passo 3 - Alterar o nome do personagem Grande
        alterarNomePersonagem(personagem); // getAttribute : Buscar o atributo. USar o "data" para buscar no html.

        // Passo 4 - Alterar a descrição do personagem grande.
        alterarDescricaoPersonagem(personagem);
    })
}) // forEach: "Para cada". Para cada item dessa lista, vai fazer alguma coisa, que é a representação do personagem através de uma aroow function, uma função sem nome. Eu ganho o acesso a cada um dos itens.

// Quando usa o addEventListener, ele só funciona num elemento único e não em uma lista toda.


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //Passo 2 - Alterar a imagem do personagem grande . Pode usar o id para mudar a imagem
    const idPersonagem = personagem.attributes.id.value; // vai buscar a imagem pelo atributo id.
    imagemPersonagemGrande.src = `../src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}




  

 

