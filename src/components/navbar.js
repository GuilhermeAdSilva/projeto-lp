import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          LP 2
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>


          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-torneios' label='Torneios' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-associacoes-esportivas' label='Associacoes Esportivas' />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-arbitros' label='Arbitros' />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-jogadores' label='Jogadores' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-presidentes' label='Presidentes' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-tecnicos' label='Tecnicos' />
          </ul>
          
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-equipes' label='Equipes' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-competicoes' label='Competicões' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-inscricoes' label='Inscricoes' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-partidas' label='Partidas' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-rodadas' label='Rodadas' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-resultados' label='Resultados' />
          </ul>
{/*
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-escalacoes' label='Escalacoes' />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-cartoes' label='Cartoes' />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-gols' label='Gols' />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-assistencias' label='Assistencias' />
          </ul>
*/}
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/login' label='Entrar' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/' label='Sair' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
