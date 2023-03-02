import React, { useEffect, useState } from 'react'
import './Home.css'
import EachSection from '../../components/eachSection/EachSection'
import Header from '../../components/header/Header'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, {
          headers: { Authorization: `Bearer Wookie2021` }
        });
        const json = await response.text();
        setMovies(JSON.parse(json));
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData('https://wookie.codesubmit.io/movies')
  }, [])

  return (
    <>
      <Header />
      <hr />
      <section>
        <EachSection movies={movies} titleNo='1'/>
        <EachSection movies={movies} titleNo='2'/>
        <EachSection movies={movies} titleNo='3'/>
        <EachSection movies={movies} titleNo='4'/>
        <EachSection movies={movies} titleNo='5'/>
      </section>
    </>
  )
}

export default Home