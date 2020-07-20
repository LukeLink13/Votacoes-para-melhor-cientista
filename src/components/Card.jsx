import React from 'react';

export default function Card(props){

  return(
      <div className="card" style={{backgroundColor: props.color}}>
          <div id= {props.id}>

            {props.children}
            


          </div>
          
          

      </div>
    



  );

}