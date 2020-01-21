import React, {Component} from 'react';
import '../App.css';

//Images
import ImageForm from '../assets/claquete.svg';
import Estrelas from '../assets/estrela-cinza.svg';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: null,
        descricao: null,
        status: null,
    }
  }

  changeNome = (ev) => {
    this.setState({
        nome: ev.target.value,
    });
  }

  changeDescricao = (ev) => {
    this.setState({
        descricao: ev.target.value,
    });
  }

  changeStatus = (ev) => {
    this.setState({
        status: ev.target.value,
    });
  }

  changeImagemExibicao = (ev) => {
    this.setState({
        imagemExibicao: ev.target.value,
    });
  }

  changeNota = (ev) => {
    this.setState({
        nota: ev.target.value,
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render (){
    return (
      <div className='modal'>
        <div className='modal-container'>
          <figure>
            <img src={ImageForm}></img> 
          </figure> 
          <div className='modal-form'>
            <div className='modal-inicio'>
              <h3 className='modal-title'>Adicionar novo filme:</h3>
              <p className="sair" onClick={this.props.handleCloseModal}>X</p>
            </div>
            <form className='form' onSubmit={this.handleSubmit}> 
              <label> 
                Nome: 
              </label> 
              <input 
                tgoriype='text' 
                autoFocus
                onChange={this.changeNome}
                value={this.state.nome}
              /> 
              <label>
                Descrição:
              </label>
                <input 
                  type='text'
                  onChange={this.changeDescricao}
                  value={this.state.descricao} 
                /> 
              <label> 
                Status:
              </label>
              <input 
                type='text'
                onChange={this.changeStatus} 
                value={this.state.status} 
                /> 
              <label> 
                Imagem de exibição:
              </label> 
              <spam className='spam-exibicao'> 
                <input  className='ImagemExibicao'
                  // type='url' 
                  type="image"
                  onChange={this.changeImagemExibicao}
                  value={this.state.imagemExibicao} 
                /> 
                <button className='modal-button'>adicionar imagem</button>  
              </spam>
              <label>
                Nota: 
              </label> 
              <spam className='spam-estrela'>
                <img className='estrela' src={Estrelas}></img> 
                <img className='estrela' src={Estrelas}></img> 
                <img className='estrela' src={Estrelas}></img> 
                <img className='estrela' src={Estrelas}></img> 
                <img className='estrela' src={Estrelas}></img> 
              </spam>
              <spam className='modal-spam'>
                <spam className='modal-cancelar' onClick={this.props.handleCloseModal}>cancelar</spam>
                <button className='modal-feito' type='submit' value="Enviar">feito</button>
              </spam>
            </form> 
          </div>
        </div>
      </div> 
    )                      
  }
}

export default Modal;