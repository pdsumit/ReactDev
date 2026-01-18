import React from 'react'

const Movie = (props) => {
  return (
    <figure>
          <img className='w-2xs rounded-lg' src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />
          <figcaption>
              <h3 className='font-bold'>{props.title}</h3>
              <h4>{ props.releaseDate }</h4>
          </figcaption>
    </figure>
  )
}

export default Movie