import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';
import { BASE_URL2 } from '../config/axios';
import { BASE_URL5 } from '../config/axios';

function CadastrojogadoresEquipe() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL5}/elenco`;

  const [id, setId] = useState('');
  const [idEquipe, setIdEquipe] = useState(0);
  const [nomeEquipe, setNomeEquipe] = useState('');
  const [idJogador, setIdJogador] = useState(0);
  const [nomeJogador, setNomeJogador] = useState('');
  const [dados, setDados] = React.useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdEquipe(0);
      setNomeEquipe('');
      setIdJogador(0);
      setNomeJogador('');
    } else {
      setId(dados.id);
      setIdEquipe(dados.idEquipe);
      setNomeEquipe(dados.nomeEquipe);
      setIdJogador(dados.idJogador);
      setNomeJogador(dados.nomeJogador);
    }
  }

  async function salvar() {
    let data = { id, idEquipe, nomeEquipe, idJogador, nomeJogador };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Inscrição realizada com sucesso!`);  
          navigate(`/listagem-equipes`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${baseURL}/${idParam}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Inscrição alterada com sucesso!`);
          navigate(`/listagem-inscricoes`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    if (idParam != null) {
      await axios.get(`${baseURL}/${idParam}`).then((response) => {
        setDados(response.data);
      });
      setId(dados.id);
      setIdEquipe(dados.idEquipe);
      setNomeEquipe(dados.nomeEquipe);
      setIdJogador(dados.idJogador);
      setNomeJogador(dados.nomeJogador);
    }
  }

  const [dadosJogadores, setDadosJogadores] = React.useState(null);
  const [dadosTimes, setDadosTimes] = React.useState(null);
  
  useEffect(() => {
    axios.get(`${BASE_URL}/jogadores`).then((response) => {
      setDadosJogadores(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL2}/associacoesEsportivas`).then((response) => {
      setDadosTimes(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosJogadores) return null
  if (!dadosTimes) return null

  return (
    <div className='container'>
      <Card title={`Adicionar Jogador na Equipe`}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
    
              <FormGroup label='Equipe: *' htmlFor='selectEquipe'>
                <select
                  className='form-select'
                  id='selectEquipe'
                  name='idEquipe'
                  value={idEquipe}
                  onChange={(e) => setIdEquipe(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosTimes.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup label='Jogador: *' htmlFor='selectEdicaoTorneio'>
                <select
                  className='form-select'
                  id='selectEdicaoTorneio'
                  name='idEdicaoTorneio'
                  value={idJogador}
                  onChange={(e) => setIdJogador(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosJogadores.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>

              <Stack spacing={1} padding={1} direction='row'>
                <button
                  onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={inicializar}
                  type='button'
                  className='btn btn-danger'
                >
                  Cancelar
                </button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CadastrojogadoresEquipe;
