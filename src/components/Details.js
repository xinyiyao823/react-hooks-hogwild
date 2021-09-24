import React from 'react'

function Details({specialty, weight, greased, medal}) {
    return (
        <>
            <h3>{specialty}</h3>
            <h3>{weight}</h3>
            <h3>{greased}</h3>
            <h3>{medal}</h3>
        </>
    )
}

export default Details
