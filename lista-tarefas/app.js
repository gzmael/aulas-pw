const lista = [];

// 1. Chamar uma função quando clicar no botão
function adicionar() {
  // 2. Pegar o texto e colocar em um vetor
  const texto = document.getElementById("tarefa");

  const jaExiste = lista.indexOf(texto.value);

  if (texto.value !== "" && jaExiste === -1) {
    lista.push(texto.value);

    texto.value = "";

    criaLista();
  }
}

// 3. Exibir a lista atualizada
function criaLista() {
  let html = "";

  for (let tarefa of lista) {
    html = html + `<li>${tarefa}</li>`;
  }

  const ul = document.getElementById("lista");
  ul.innerHTML = html;
}
