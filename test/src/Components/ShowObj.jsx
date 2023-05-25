import React from 'react'

function ShowObj({name, body, id}) {
  return (
    <div>
        <h2>{name} {id}</h2>
        <p>{body}</p>
    </div>
  )
}

export default ShowObj