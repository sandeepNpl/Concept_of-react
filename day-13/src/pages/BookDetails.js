import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
    let {id,author}= useParams();
    
  return (
    <div>
      <b>Books Details </b>
      <br/>
      Book Id: {id}
      <br/>
      Book Author: {author}
    </div>
  )
}

export default BookDetails
