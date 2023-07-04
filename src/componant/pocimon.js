import React from 'react'

const PocimonList = ({names}) => {
  return (
    <div>
    <ul>
    
    {names.map((p)=> <li key={p}>{p}</li>)}
    </ul>
    </div>
  )
}

export default PocimonList
