import React from 'react'
import EachCard from '../card/EachCard'
import './EachSection.css'

const EachSection = ({ movies, titleNo }) => {
    return (
        <div className="eachSection">
            <h2>Genre {titleNo}</h2>
            <div className="cards">
                {movies?.movies && movies.movies.map(each => {
                    return (
                        <EachCard key={each?.backdrop} eachImage={each}/>
                    )
                })}
            </div>
        </div>
    )
}

export default EachSection