import React from 'react'

const WatchListItem = (props) => {
  return (
    <figure className='flex border border-gray-200 rounded-lg w-[60vw] mx-auto mb-3'>
          <img className='w-30' src={`https://image.tmdb.org/t/p/w400/${props.movie.posterPath}`} alt="" />
          <figcaption className='p-3'>
              <h3 className='text-xl'>{props.movie.title}</h3>
              <h4>{ props.movie.releaseDate }</h4>
              <h4>{ props.movie.rating }</h4>
          </figcaption>
    </figure>
  )
}

export default WatchListItem