import React from 'react'
import HogTile from './HogTile'

function HogTileContainer({hogs}) {
    return (
        <div className="ui grid container">
        {hogs.map((hog) => { 
            return (<HogTile 
          name={hog.name} 
          specialty={hog.specialty}
          greased={hog.greased} 
          weight={hog.weight} 
          medal={hog["highest medal achieved"]} 
          image={hog.image}
          />) })}
           
        </div>
    )
}

export default HogTileContainer
