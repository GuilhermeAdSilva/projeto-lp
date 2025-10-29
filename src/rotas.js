import React from 'react';

import ListagemTorneios from './views/listagem-torneios';

/*
import Login from './views/login';
import CadastroUsuario from './views/cadastro-usuario';
import CadastroCurso from './views/cadastro-curso';
import CadastroProfessor from './views/cadastro-professor';
import CadastroAluno from './views/cadastro-aluno';
import CadastroCategoria from './views/cadastro-categoria';
import CadastroAtividadeComplementar from './views/cadastro-atividade-complementar';
*/

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listagem-torneios' element={<ListagemTorneios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
