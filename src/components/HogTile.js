import React, { useState } from 'react'
import hogs from "../porkers_data";
import Details from './Details';

function HogTile({name, image, specialty, greased, medal, weight}) {
    const [value, setValue] = useState(false)
    console.log(value)
    return (
        <div className="pigTile" onClick={() => setValue(!value)}>
            <h1>{name}</h1>
            {value ? <Details specialty={specialty} greased={greased} medal={medal} weight={weight} /> : null}
            <img src={image}/>
        </div>
    )
}

export default HogTile
