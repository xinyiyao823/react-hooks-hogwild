import React from 'react'

function Filter({filterGreased}) {
    return (
        <div>
            <select name='greased' onChange={filterGreased}>
                <option value='all'>All</option>
                <option value='Greased'>Greased</option>
                <option value='Not Greased'>Not Greased</option>
            </select> 
        </div>
    )
}

export default Filter
