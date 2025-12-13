import React from 'react';

import Card from '../components/card';
import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
import { BASE_URL4 } from '../config/axios';

const baseURL = `${BASE_URL4}/assistencias`;

function ListagemAssistencias() {
  const navigate = useNavigate();

  // ===== STATES =====
  const [dados, setDados] = React.useState([]);
  const [dadosOriginais, setDadosOriginais] = React.useState([]);
  const [competicaoSelecionada, setCompeticaoSelecionada] = React.useState(null);
  const [ranking, setRanking] = React.useState([]);

  // ===== NAVEGAÇÃO =====
  const cadastrar = () => {
    navigate('/cadastro-assistencias');
  };

  const editar = (id) => {
    navigate(`/cadastro-assistencias/${id}`);
  };

  // ===== GERAR RANKING =====
  function gerarRanking(nomeCompeticao) {
    const assistenciasDaCompeticao = dadosOriginais.filter(
      (dado) => dado.nomeCompeticao === nomeCompeticao
    );

    const mapa = {};

    assistenciasDaCompeticao.forEach((item) => {
      const idJogador = item.idJogador;

      if (!mapa[idJogador]) {
        mapa[idJogador] = {
          idJogador: item.idJogador,
          nomeJogador: item.nomeJogador,
          totalAssistencias: 0,
        };
      }

      mapa[idJogador].totalAssistencias += 1;
    });

    const rankingOrdenado = Object.values(mapa).sort(
      (a, b) => b.totalAssistencias - a.totalAssistencias
    );

    setRanking(rankingOrdenado);
  }

  // ===== FILTRO POR COMPETIÇÃO =====
  function handleClickEst(nomeCompeticao) {
    // Remove filtro
    if (competicaoSelecionada === nomeCompeticao) {
      setDados(dadosOriginais);
      setCompeticaoSelecionada(null);
      setRanking([]);
      return;
    }

    const filtrados = dadosOriginais.filter(
      (dado) => dado.nomeCompeticao === nomeCompeticao
    );

    setDados(filtrados);
    setCompeticaoSelecionada(nomeCompeticao);
    gerarRanking(nomeCompeticao);
  }

  // ===== EXCLUIR =====
  async function excluir(id) {
    try {
      await axios.delete(`${baseURL}/${id}`);
      mensagemSucesso('Assistência excluída com sucesso!');

      const novosDados = dados.filter((dado) => dado.id !== id);
      setDados(novosDados);
      setDadosOriginais(
        dadosOriginais.filter((dado) => dado.id !== id)
      );
    } catch (error) {
      mensagemErro('Erro ao excluir a assistência');
    }
  }

  // ===== BUSCA INICIAL =====
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
      setDadosOriginais(response.data);
    });
  }, []);

  if (dados.length === 0) return null;

  return (
    <div className="container">
      <Card title="Listagem de Assistências">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <button
                type="button"
                className="btn btn-warning mb-3"
                onClick={cadastrar}
              >
                Nova Assistência
              </button>

              {competicaoSelecionada && (
                <button
                  className="btn btn-secondary mb-3 ms-2"
                  onClick={() => {
                    setDados(dadosOriginais);
                    setCompeticaoSelecionada(null);
                    setRanking([]);
                  }}
                >
                  Mostrar todas
                </button>
              )}

              {/* ===== TABELA DE ASSISTÊNCIAS ===== */}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Competição</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.nomeJogador}</td>

                      <td
                        style={{
                          cursor: 'pointer',
                          fontWeight:
                            competicaoSelecionada === dado.nomeCompeticao
                              ? 'bold'
                              : 'normal',
                        }}
                        onClick={() =>
                          handleClickEst(dado.nomeCompeticao)
                        }
                      >
                        {dado.nomeCompeticao}
                      </td>

                      <td>
                        <Stack spacing={1} direction="row" justifyContent="center">
                          <IconButton onClick={() => editar(dado.id)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => excluir(dado.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ===== RANKING ===== */}
              {competicaoSelecionada && ranking.length > 0 && (
                <div className="mt-5">
                  <h4>
                    Jogadores com mais assistências — {competicaoSelecionada}
                  </h4>

                  <table className="table table-striped mt-3">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Jogador</th>
                        <th>Total de Assistências</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ranking.map((jogador, index) => (
                        <tr key={jogador.idJogador}>
                          <td>{index + 1}</td>
                          <td>{jogador.nomeJogador}</td>
                          <td>{jogador.totalAssistencias}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ListagemAssistencias;