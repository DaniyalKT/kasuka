import React from 'react'
import './Title.css'

export default function Title(props) {
  return (
    <div className="title-container">
    <h2>{props.title}</h2>
    <p>{props.description} </p>
  </div>
  )
}
