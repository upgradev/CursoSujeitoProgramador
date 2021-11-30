import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  // executar automaticamente quando montar, quando o [] estiver vazio
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [tarefas, input]);

  // so vai atualizar a tela de fato quando o tarefas for alterado, assim quando digitar no
  // input não vai ficar chamando o return sempre, retorna um valor
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <br />
      <strong> Você tem {totalTarefas} tarefas </strong>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
