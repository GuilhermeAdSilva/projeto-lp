import React from 'react';


import ListagemArbitros from './views/listagem-arbitros';
import ListagemAssistencias from './views/listagem-assistencias';
import ListagemAssocicacoesEsportivas from './views/listagem-associacoes-esportivas';
import ListagemCartoes from './views/listagem-cartoes';
import ListagemCompeticoes from './views/listagem-competicoes';
import ListagemEquipes from './views/listagem-equipes';
import ListagemEscalacoes from './views/listagem-escalacoes';
import ListagemGols from './views/listagem-gols';
import ListagemInscricoes from './views/listagem-inscricoes';
import ListagemJogadores from './views/listagem-jogadores';
import ListagemPartidas from './views/listagem-partidas';
import ListagemPresidentes from './views/listagem-presidentes';
import ListagemResultados from './views/listagem-resultados';
import ListagemRodadas from './views/listagem-rodadas';
import ListagemTecnicos from './views/listagem-tecnicos';
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
        <Route path='/listagem-arbitros' element={<ListagemArbitros />} />
      </Routes>
      <Routes>
        <Route path='/listagem-assistencias' element={<ListagemAssistencias />} />
      </Routes>
      <Routes>
        <Route path='/listagem-associacoesEsportivas' element={<ListagemAssocicacoesEsportivas />} />
      </Routes>
      <Routes>
        <Route path='/listagem-cartoes' element={<ListagemCartoes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-competicoes' element={<ListagemCompeticoes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-equipes' element={<ListagemEquipes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-escalacoes' element={<ListagemEscalacoes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-gols' element={<ListagemGols />} />
      </Routes>
      <Routes>
        <Route path='/listagem-inscricoes' element={<ListagemInscricoes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-jogadores' element={<ListagemJogadores />} />
      </Routes>
      <Routes>
        <Route path='/listagem-partidas' element={<ListagemPartidas />} />
      </Routes>
      <Routes>
        <Route path='/listagem-presidentes' element={<ListagemPresidentes />} />
      </Routes>
      <Routes>
        <Route path='/listagem-resultados' element={<ListagemResultados />} />
      </Routes>
      <Routes>
        <Route path='/listagem-rodadas' element={<ListagemRodadas />} />
      </Routes>
      <Routes>
        <Route path='/listagem-tecnicos' element={<ListagemTecnicos />} />
      </Routes>
      <Routes>
        <Route path='/listagem-torneios' element={<ListagemTorneios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
