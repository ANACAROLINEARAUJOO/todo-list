const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector ('.list-tasks');

let minhaListadeItens = [];

function adicionarNovaTarefa() {
    minhaListadeItens.push({ 
    tarefa: input.value,
    concluida: false
    })

    input.value = ''

    mostrarTarefas();
}

function mostrarTarefas() {

    let novaLi = ''



minhaListadeItens.forEach((item, posicao) => {
    novaLi =  novaLi + `
    <li class="task ${item.concluida && "done"}">
<img src="./img/correto.png" alt=""onclick="concluirTarefa(${posicao})">
<p> ${item.tarefa}</p>
<img src="./img/excluir.png" alt="" onclick="deletarItem(${posicao})">
</img></li>
`
})

   listaCompleta.innerHTML = novaLi
   localStorage.setItem('lista', JSON.stringify(minhaListadeItens))

}

function concluirTarefa(posicao){
 minhaListadeItens[posicao].concluida =  !minhaListadeItens[posicao].concluida 
 mostrarTarefas()
}

function deletarItem(posicao){
    minhaListadeItens.splice(posicao, 1)
 mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
     
    if(tarefasDoLocalStorage){
        minhaListadeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas() 
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)

//! sinal de negação