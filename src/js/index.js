const btnMostrarMaisProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btnMostrarMaisProjetos.addEventListener("click", () =>{
    MostrarMaisProjetos();
    EsconderBotao();
});

function EsconderBotao() {
    btnMostrarMaisProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}