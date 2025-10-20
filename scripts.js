// ====================== CRIAR TAREFA ======================
const btnSalvar = document.querySelector('.btn.salvar');
const btnCancelar = document.querySelector('.btn.cancelar');
const btnNovaTarefa = document.getElementById('btnNovaTarefa');

// Redirecionar ao clicar em "Criar Tarefa" no dashboard
if (btnNovaTarefa) {
  btnNovaTarefa.addEventListener('click', () => {
    window.location.href = 'telaCriarTarefa.html';
  });
}

// Salvando nova tarefa
if (btnSalvar) {
  btnSalvar.addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!titulo) {
      alert('Digite um título para a tarefa!');
      return;
    }

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      dataCriacao: new Date().toLocaleString()
    };

    tarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    alert('Tarefa criada com sucesso!');
    window.location.href = 'telaDashboard.html';
  });
}

if (btnCancelar) {
  btnCancelar.addEventListener('click', () => {
    window.location.href = 'telaDashboard.html';
  });
}

// ====================== LISTAR TAREFAS NO DASHBOARD ======================
function carregarTarefas() {
  const lista = document.getElementById('listaTarefas');
  if (!lista) return;

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  if (tarefas.length === 0) {
    lista.innerHTML = '<p>Nenhuma tarefa cadastrada.</p>';
    return;
  }

  lista.innerHTML = ''; // limpa antes de renderizar

  tarefas.forEach(tarefa => {
    const card = document.createElement('div');
    card.classList.add('task-card');
    card.innerHTML = `
      <h3>${tarefa.titulo} <span class="icon">👁️</span></h3>
      <p>${tarefa.descricao || 'Sem descrição.'}</p>
      <div class="actions">
        <button class="btn editar" onclick="editarTarefa(${tarefa.id})">Editar</button>
        <button class="btn concluir" onclick="concluirTarefa(${tarefa.id})">Concluir</button>
      </div>
    `;
    lista.appendChild(card);
  });
}

// Chama automaticamente ao abrir o dashboard
carregarTarefas();

// ====================== FUNÇÕES DE AÇÃO ======================
function editarTarefa(id) {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    alert('Tarefa não encontrada!');
    return;
  }

  // ✅ salva no localStorage
  localStorage.setItem('tarefaEmEdicao', JSON.stringify(tarefa));

  // ✅ redireciona para a tela de edição
  window.location.href = 'telaEditarTarefa.html';
}




function concluirTarefa(id) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas = tarefas.filter(t => t.id !== id);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  alert('Tarefa concluída e removida da lista!');
  carregarTarefas(); // atualiza lista
}



  btnSalvar.addEventListener('click', (e) => {
    e.preventDefault();

    const novoTitulo = tituloInput.value.trim();
    const novaDescricao = descricaoInput.value.trim();
    const novoStatus = statusSelect.value;

    if (!novoTitulo) {
      alert('O título não pode estar vazio!');
      return;
    }

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const index = tarefas.findIndex(t => t.id === tarefa.id);

    if (index === -1) {
      alert('Tarefa não encontrada!');
      return;
    }

    // ✅ Atualiza dados
    tarefas[index].titulo = novoTitulo;
    tarefas[index].descricao = novaDescricao;
    tarefas[index].status = novoStatus;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.removeItem('tarefaEmEdicao');

    alert('Tarefa atualizada com sucesso!');
    window.location.href = 'telaDashboard.html';
  });

  document.getElementById('btnCadastrar').addEventListener('click', function (event) {
  event.preventDefault(); // evita o envio automático do formulário

  const nome = document.getElementById('nome').value.trim();

  // Verifica se o nome tem pelo menos 5 caracteres
  if (nome.length < 5) {
    alert('O nome deve ter pelo menos 5 caracteres.');
    return;
  }

  // Verifica se há pelo menos um espaço (ou seja, nome + sobrenome)
  if (!nome.includes(' ')) {
    alert('Digite o nome completo (com nome e sobrenome).');
    return;
  }

  // Se passou em todas as validações
  alert('Nome válido!');
  // aqui você pode enviar o formulário ou salvar no localStorage
});


