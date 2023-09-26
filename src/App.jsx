
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormMovie from './components/FormMovie'

function App() {
  
  const baseUrl = 'http://movies-crud-2.academlo.tech/'
  const [ movies, getMovies, createMovie, deleteMovie, updateMovie ] = useFetch(baseUrl)

  useEffect(() => {
   getMovies('/movies')
  }, [])

  console.log(movies)
  
  return (
   <div>
    <h1>CRUD</h1>
    <FormMovie />
   </div>
  )
}

export default App
