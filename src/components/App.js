import React, { useState } from "react";
import Nav from "./Nav";
import HogTileContainer from "./HogTileContainer";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [category, setCategory] = useState("all")
	
	function filterGreased(e) {
		let option = e.target.value;
		setCategory(option)

	}
	
	function filterHogs() {
		if (category === 'all') {
			return hogs;
		} else if (category === 'Greased') {
			return hogs.filter(hog => hog.greased)
		} else {
			return hogs.filter(hog => !hog.greased)
		}
	}
	


	return (
		<div className="App">
			<Nav />
			<Filter filterGreased={filterGreased} />
			<HogTileContainer hogs={filterHogs()} />
			
		</div>
	);
}

export default App;
