import React from 'react'
import './EachCard.css'

const EachCard = ({ eachImage }) => {
    return (
        <div className="eachCard">
            <img src={eachImage?.backdrop} alt="" />
        </div>
    )
}

export default EachCard