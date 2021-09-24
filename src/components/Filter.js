import React from 'react'

function Filter() {
    return (
        <div>
            <select name='greased' >
                <option value='all'>All</option>
                <option value='Greased'>Greased</option>
                <option value='Not Greased'>Not Greased</option>
            </select> 
        </div>
    )
}

export default Filter
