import React from 'react'
import Lightbox from '../component/Lightbox/Lightbox'
import Layoutlight from '../component/Layoutlight/Layoutlight'

const Gallery = () => {
  return (

    <Layoutlight>
            <Lightbox />
            </Layoutlight>
  )
}

export default Gallery

export const Head = () => <title>Gallery Page</title>  