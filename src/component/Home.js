import React from 'react';
import '../App.css';
import ImageHome from '../imagens/images.jpeg';
import ImageForm from '../imagens/claquete.svg';

class Home extends React.Component {
    // formulario = () => (

    // ) 
    render (){
        return (
            <div>
                <header>
                    <div className='menu'>
                        <div>
                            <h1>ToDoFlix</h1>
                        </div>
                        <div className='menu-container'>
                            <p>categorias</p>
                            <button>adicionar filmes</button>
                        </div>
                    </div>
                </header>
                <section>
                    <div>
                        <figure>
                        <img src={ImageForm}></img>
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
                    </div>
                    <img src={ImageHome}></img>
                </section>
            </div>
        )
    }
}

export default Home;