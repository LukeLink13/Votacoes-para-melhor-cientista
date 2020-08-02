import React from 'react'


export default function WinnerCard(props){

  return(
    <>
      <div id={props.id} className={props.className}>
          {props.children}

      </div>
    </>
  )
}