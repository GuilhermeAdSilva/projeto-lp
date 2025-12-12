
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { mensagemSucesso, mensagemErro } from "../components/toastr";

import "../custom.css";

import axios from "axios";
import { BASE_URL } from "../config/axios";


function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 text-center">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">FutLeague</h1>

      <p className="text-xl text-gray-700 max-w-3xl mb-8">
        Bem-vindo ao FutLeague! Aqui você encontra um espaço dedicado à organização 
        e acompanhamento de torneios de futebol. Nossa plataforma foi criada para 
        facilitar a gestão de campeonatos, conectar equipes e oferecer uma visão 
        clara e simples das competições.
      </p>

      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Explore informações sobre partidas, times participantes, regras do torneio 
        e muito mais. Tudo de forma objetiva e acessível para jogadores, organizadores 
        e torcedores.
      </p>

      <p className="text-lg text-gray-600 max-w-2xl">
        Prepare-se para uma experiência completa no universo dos campeonatos 
        futebolísticos. O FutLeague é o ponto de partida para transformar suas 
        competições em algo ainda mais organizado e emocionante.
      </p>
    </div>
  );
}

export default Home;