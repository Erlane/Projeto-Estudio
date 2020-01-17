import React from 'react';
import '../App.css';
// import ImageHome from '../assets/images.jpeg';
// import ImageForm from '../assets/claquete.svg';

class Home extends React.Component { 
    // formulario = () => (
 
    // ) 
    render (){ 
        return (
            <div>
            <figure>
                {/* <img src={ImageForm}></img> */} 
            </figure> 
            <form className='form'> 
                <label> 
                    Nome: 
                    <input 
                    type='text' 
                    // onChange={this.nome} 
                    // value={this.state.nome}
                    /> 
                </label> 
                <label>
                    Descrição:
                    <input 
                    type='text'
                    // onChange={this.descricao}
                    // value={this.state.descricao} 
                    /> 
                </label>
                <label> 
                    Status:
                    <input 
                    type='text'
                    // onChange={this.Status} 
                    // value={this.state.Status} 
                    /> 
                </label>
                <label> 
                    Imagem de exibição:
                    <input 
                    type='text' 
                    // onChange={this.imagemExibicao}
                    // value={this.state.imagemExibicao} 
                    /> 
                </label> 
                <button>adicionar imagem</button> 
                <label>
                    Nota: 
                    <input
                    type='text'
                    // onChange={this.Nota} 
                    // value={this.state.Nota} 
                    /> 
                </label> 
             </form> 
             {/* <img src={ImageHome}></img> */} 
            </div> 
        )                      
    }
}

export default Home;