import React from 'react'

const Result = (props) => {
  return (
    <>
        <h1>Score: {props.score}</h1>
        <h1>Total: {props.total}</h1>
    </>
  )
}

export default Result