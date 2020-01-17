import React from 'react';
import '../App.css';
// import ImageHome from '../assets/images.jpeg';
// import ImageForm from '../assets/claquete.svg';

class Home extends React.Component { 
    // formulario = () => (

    // )
    render (){ 
        return ( 
         <div className='menu'>
            <h1>ToDoFlix</h1>
         <div className='buttons'> 
            <button className='button-category'>categorias</button>
            <button className='button-add'>adicionar filmes</button>
         </div> 
         </div> 
        ) 
    }
}

export default Home;