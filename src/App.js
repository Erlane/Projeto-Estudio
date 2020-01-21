import React, {Component} from 'react';
import Fant from './assets/capitao-fantastico.jpg';
import Fantastico from './assets/fantastico.jpeg';
import Corra from './assets/corra.jpeg'
import Bacurau from './assets/bacurau.jpeg'
import Modal from './components/Modal';

//Components
import './App.css';

class App extends Component {
  state = {
    isModal: undefined,
    isModalCategory: undefined,
  };
    
  isOpen = (event) => {
    event.stopPropagation();
    this.setState({
      isModal: true,
    })
  }

  isClose = (event) => {
    event.stopPropagation();
    this.setState({
       isModal:false,
    })
  }

  handleIsModal = (event) => {
    event.stopPropagation();
    this.setState({
      isModal: !this.state.isModal,
    })
  }

  renderModalCategory = () => {
    return (
      this.state.isModalCategory && (
        <span className='modal-category'>
          <p>Quero ver</p>
          <p>Já vistos</p>
        </span>
        )
    )
  }

  render() {
    return ( 
      <div> 
        <div>
          {this.state.isModal && <Modal handleCloseModal={this.isClose}/> }
          <div className='menu'>
            <h1>ToDoFlix</h1>
            <div className='buttons'> 
              <button className='button-category' onClick={this.handleIsModalCategory}>
                categorias
              </button>
              {this.renderModalCategory}
              <button className='button-add' onClick={this.isOpen}>adicionar filme</button>
              <button className='button-add-mobile' onClick={this.isOpen}>add filme</button>
            </div> 
          </div>
          <hr/>
          <div className='cartaz'>
            <img className='cartaz-image' src={Fant} />
          </div>
          <p className='paragrafy-lista'>Minha lista: </p> 
          <div className='film'> 
            <div className='film-itens'> 
              <img className='film-images' src={Fantastico} /> 
              <button className='film-assistir'>quero ver</button>
              <h2>Capitão Fantástico</h2> 
              <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização,    em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família      para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
            </div> 
            <div className='film-itens'>
              <img className='film-images' src={Corra} /> 
              <button className='film-assistir'>quero ver</button>
              <h2>Corra!</h2> 
              <p>Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente      s amigáveis da sua namorada.
              </p> 
            </div> 
            <div className='film-itens'>
              <img className='film-images' src={Bacurau} />
              <button className='film-assistir1'>já vi</button>
              <h2>Bacurau</h2>
              <p> Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a   comunidade não consta mais em qualquer mapa.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
