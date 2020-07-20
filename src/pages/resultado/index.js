import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import '../style.css';
import Card from '../../components/Card'
import { votos } from '../home/index'

export default function Result(){

    votos.splice(0,6);
    votos.sort(function(a,b){return a-b})

    console.log(votos)
    return(
        <div className="body">  
            
        <Link id="back-to-home" to="/"> <FiArrowLeft/>  Voltar para o começo</Link>
            

            <div className='container-flex'>
                <Card id="card-albert">
                    <span id="span-albert">Albert Einstein</span>
                    
                </Card>

                <Card id="card-marie">
                    <span id="span-marie">Marie Curie</span>

                </Card>

                <Card id="card-newton">
                    <span id="span-newton">Isaac Newton</span>

                </Card>

                <Card id="card-copernico">
                    <span id="span-copernico">Nicolau Copernico</span>
                </Card>

                <Card id="card-null">

                </Card>

                <Card id="card-white">

                </Card>
                
            </div>
        </div>      
    );


}