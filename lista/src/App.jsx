import { useState, useEffect } from 'react';

function App() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    async function carregarUsuario() {
      const resposta = await fetch('http://localhost:3000/api/usuarios' );
      const dados = await resposta.json();

      setUsuario(dados);
    }

    carregarUsuario();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários - Lunares</h1>

      <ul>
        {usuario.map((item) => (
          <li key={item.id}>
            <strong>{item.nome}</strong> ({item.perfil}) - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;