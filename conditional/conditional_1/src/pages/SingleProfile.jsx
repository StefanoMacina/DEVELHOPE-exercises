import React from 'react'
import {useParams} from 'react-router-dom'

function SingleProfile() {
    const {id} = useParams()
    console.log(id);
  return (
    <div>
        Sono un singolo profilo {id}
    </div>
  )
}

export default SingleProfile