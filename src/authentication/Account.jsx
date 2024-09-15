// import  from 'react'
import SavedShows from './SavedShows'
import SavedMovies from './SavedMovies'

const Account = () => {
  return (
    <section className='account'>
      
      <div><SavedShows/></div>
     <div> <SavedMovies/></div>
    </section>
  )
}

export default Account
