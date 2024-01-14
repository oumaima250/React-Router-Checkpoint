// src/App.js

import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/movieList";
import MovieDescription from "./components/movieDescription";
import moviesData from "./components/moviesData";

function App() {
	const [currentPage, setCurrentPage] = useState("list");
	const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

	const handleMovieClick = (index) => {
		setSelectedMovieIndex(index);
		setCurrentPage("description");
	};

	const handleBackClick = () => {
		setCurrentPage("list");
	};

	return (
		<div className="App">
			{currentPage === "list" ? (
				<MovieList movies={moviesData} onMovieClick={handleMovieClick} />
			) : (
				<MovieDescription
					movie={moviesData[selectedMovieIndex]}
					onBackClick={handleBackClick}
				/>
			)}
		</div>
	);
}

export default App;