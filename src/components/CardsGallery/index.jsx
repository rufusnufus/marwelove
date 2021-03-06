import React from 'react'
import Card from './components/Card'

import './index.css'

function CardsGallery({ data, type }) {
  return (
    <div className="cards-gallery">
      {data.length &&
        data.map((item, index) => {
          return <Card key={`${index}:${item.id}`} type={type} data={item} />
        })}
    </div>
  )
}

export default CardsGallery
