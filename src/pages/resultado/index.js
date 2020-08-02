import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css';
//import '../home/style.css'
import Card from '../../components/Card'
import { votos } from '../home/index'
import WinnerCard from '../../components/WinnerCard'

export default function Result(){

    
    
    let total = 0;
        for(let i=0;i<=3;i++){
            total += votos[i];
        }

    let porcents = Array();


   // let ordelyVotos = votos.sort((a,b) =>{
    //    return a-b
    //})

    votos.map((num)=>{

        porcents.push((num*100)/total);
    })

    console.log(votos,total,porcents)


    const clearArray = () =>{votos.splice(0,4)}

    function namedCardWinner(){
        
            if(votos[0]>votos[1] && votos[0]>votos[2] && votos[0]>votos[3])
            {return "card-albert"}
            if(votos[1]>votos[0] && votos[1]>votos[2] && votos[1]>votos[3])
            {return "card-marie"}

            if(votos[2]>votos[0] && votos[2]>votos[1] && votos[2]>votos[3])
            {return "card-newton"}

            if(votos[3]>votos[0] && votos[3]>votos[1] && votos[3]>votos[2])
            {return "card-copernico"}
    }

   
    return(
        <div className="body">  
            
        <Link id="back-to-home" onClick={clearArray()} to="/"> <FiArrowLeft/>  Voltar para o começo</Link>
            

            <div className='container-flex-result'>
                
                <WinnerCard id={namedCardWinner()} className="card-winner">

                    
                </WinnerCard>
                
                <div id="other-information">
                    <Card id="card-null">

                    </Card>

                    <Card id="card-white">

                    </Card>
                </div>    
            </div>
        </div>      
    );


}