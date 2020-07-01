import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import '../style.css';

export default function Result(){

    return(
        <div className="body">  
            
            <Link to="/"> <FiArrowLeft/> Voltar pro começo lá</Link>
            

            <div className='container-flex'>
                <h1>Resultado das </h1>
                
            </div>
        </div>      
    );


}