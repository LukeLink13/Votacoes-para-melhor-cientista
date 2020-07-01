import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';


import '../style.css';


     const [counter, setCounter] = useState(0);
     const [counter1, setCounter1] = useState(0)
     const [counter2, setCounter2] = useState(0);
     const [counter3, setCounter3] = useState(0);
     const [counter4, setCounter4] = useState(0);
     const [counter5, setCounter5] = useState(0);
     
     

    const armazenarVoto = (aux,aux1,aux2,aux3,aux4,aux5) => {

      votos.push(aux,aux1,aux2,aux3,aux4,aux5)
      console.log(votos)
    }
    
    const limparVotos = (aux,aux1,aux2,aux3,aux4,aux5) =>{

        setCounter (aux = 0);
        setCounter1 (aux1 = 0) ;
        setCounter2 (aux2 = 0) ;
        setCounter3 (aux3 = 0) ;
        setCounter4 (aux4 = 0) ;
        setCounter5 (aux5 = 0) ;

    }


const votos = [];

export {votos};

export default function Home(props){
      
    return (
        <div className="body">    
            <div className="container-flex">
              <Card id="card-albert">
                  
                  <span id="span-albert">Albert Einstein</span>
                  <span id="numVotos">Nº de votos:{counter}</span>
                  <button id="btn-albert" onClick={() => setCounter(counter + 1)}>Votar</button>
              
              </Card>
              
              <Card id="card-marie">
                
                <span id="span-marie">Marie Curie</span>
                <span id="numVotos">Nº de votos:{counter1}</span>
                <button id="btn-marie" onClick={() => setCounter1(counter1 + 1)}>Votar</button>
              
              
              </Card>

              <Card id="card-newton">
                
                <span id="span-newton">Isaac Newton</span>
                <span id="numVotos">Nº de votos:{counter2}</span>
                <button id="btn-newton" onClick={() => setCounter2(counter2 + 1)}>Votar</button>
              
              
              </Card>             
              <Card id="card-copernico">
                
                <span id="span-copernico">Nicolau Copernico</span>
                <span id="numVotos">Nº de votos:{counter3}</span>
                <button id="btn-copernico" onClick={() => setCounter3(counter3 + 1)}>Votar</button>
              
              
              </Card>

              <Card id="card-null">
                
                <span id="span-null">Nulo</span>
                <span id="numVotos">Nº de votos:{counter4}</span>
                <button id="btn-null" onClick={() => setCounter4(counter4 + 1)}>Votar</button>
              
              </Card>

              <Card id="card-white">
                
                <span id="span-white">Branco</span>
                <span id="numVotos">Nº de votos:{counter5}</span>
                <button id="btn-white" onClick={() => setCounter5(counter5 + 1)}>Votar</button>
              
              
              </Card>

             
            
            </div>
       
            <div className="btns-aux">
                <Link to="/result" className="btn-aux-result" 
                  style={{backgroundColor:"rgba(11, 131, 11, 0.767)"}}
                  onClick={() => armazenarVoto(counter,counter1,counter2,counter3,counter4,counter5)}>Resultado</Link>
                
                <button className="btn-aux-clean"
                style={{backgroundColor:"rgba(223, 18, 18, 0.794)"}}
                onClick={() => limparVotos(counter,counter1,counter2,counter3,counter4,counter5)}>Limpar</button>
            </div>
        
       </div>

        
    );
};





