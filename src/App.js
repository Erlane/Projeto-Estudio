import React from 'react';
import logo from './logo.svg';
import Fant from './assets/fant.jpeg';
import Fantastico from './assets/fantastico.jpeg';
import Corra from './assets/corra.jpeg'

//Components
import Home from './components/Home';
import './App.css';

function App() {
  return ( 
    <div> 
      {/* <header className="App-header"> 
      <img src={logo} className="App-logo" alt="logo" /> 
      <p> 
        Edit <code>src/App.js</code> and save to reload. 
      </p>
      </header>*/} 
      <Home/>
        <img className='image' src={Fant} />
        <p className='paragrafy-lista'>Minha lista: </p> 
        <div className='filmes'> 
          <div className='filmes_itens'> 
            <p>5.0</p>
            <img className='filmes-images' src={Fantastico} /> 
            <p className='filmes-assistir'>quero ver</p>
            <h2>Capitão Fantástico </h2> 
            <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização,    em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família    para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
          </div> 
          <div className='filmes_itens'>
            <p>2.0</p>
            <img className='filmes-images' src={Corra} /> 
            <p className='filmes-assistir'>quero ver</p>
            <h2>Corra!</h2> 
            <p>Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente          amigáveis da sua namorada.</p> 
        </div> 
      </div> 
    </div> 

  );
}

export default App;
