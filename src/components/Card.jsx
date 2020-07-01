import React from 'react';

export default function Card(props){

  return(
      <div className="card">
          <div id= {props.id}>

            {props.children}
            


          </div>
          
          

      </div>
    



  );

}