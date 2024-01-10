import React from 'react'

function Movie(props) {
  return (
    <div>
        <p>Name : {props.name} </p>
        <p>Actor : {props.actor} </p>
        <p>Actress : {props.actress} </p>
    </div>
  )
}

export default Movie