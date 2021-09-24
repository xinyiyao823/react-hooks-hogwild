import React, { useState } from "react";
import Nav from "./Nav";
import HogTileContainer from "./HogTileContainer";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [category, setCategory] = useState("all")
	console.log(category)

	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogTileContainer hogs={hogs} setCategory={setCategory}/>
			
		</div>
	);
}

export default App;
