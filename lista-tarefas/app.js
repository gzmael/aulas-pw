// 1. Inicializamos primeiro o array vazio.
// Ele que irá receber as tarefas adicionadas
const lista = [];

// 2. Função que vai ser chamada pelo click do botão
function adicionar() {
  // 3. Aqui pegamos o elemento Input que tem o nome da tarefa
  const input = document.getElementById("tarefa");
  // input.value pega apenas o texto que foi digitado no input
  const tarefa = input.value;

  // Aqui verificamos se já existe uma tarefa com o mesmo nome
  // caso tenha, o indexOf vai retornar o índice do texto no vetor
  const jaExiste = lista.indexOf(tarefa);

  // 4. Verifica se a tarefa não é um texto vazio e se não foi encontrato
  // o texto dentro do vetor (por isso o -1)
  if (tarefa !== "" && jaExiste === -1) {
    // 5. adicionamos a tarefa dentro do vetor
    lista.push(tarefa);

    // apagamos o texto que o usuário escreveu no input
    input.value = "";

    // chamamos a função reponsável por atualizar a lista no HTML
    criaLista();
  }
}

// 6. Exibir a lista atualizada
function criaLista() {
  // declaramos uma variável com o texto vazio
  let html = "";

  // depois adicionamos as tags HTML <li> com o nome da tarefa
  for (let tarefa of lista) {
    html = html + `<li>${tarefa}</li>`;
  }

  // aqui pegamos o elemento ul do HTML
  const ul = document.getElementById("lista");

  // adicionamos as tags HTML dos <li> lá dentro da ul
  ul.innerHTML = html;
}
