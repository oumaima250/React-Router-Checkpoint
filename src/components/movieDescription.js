import React from "react";

function MovieDescription({ movie, onBackClick }) {
	return (
		<>
			<div className="mt-5">
				<button onClick={onBackClick}>Back to Home</button>
				<h2>{movie.title}</h2>
				<p>{movie.description}</p>
				<iframe
					title={movie.title}
					width="560"
					height="315"
					src={movie.trailerLink}
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
}

export default MovieDescription;