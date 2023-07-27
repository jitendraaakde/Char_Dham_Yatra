import React from 'react'

export default function AboutDham(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.description}
    </>
  )
}
