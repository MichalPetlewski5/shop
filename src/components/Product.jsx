import React from 'react'

export default function Product({ list }) {
  return (
    <div>
      {list.map((e, i) => (
        <div key={i}>
            <h1>Name: {e.name}</h1>
            <p>Price: {e.price}</p>
        </div>
      ))}
    </div>
  )
}
