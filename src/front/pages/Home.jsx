import React from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1 className="display-4">Autenticación JWT con Flask y React.js</h1>

			<p className="lead">
				<img
					src={rigoImageUrl}
					className="img-fluid rounded-circle mb-3"
					alt="Rigo Baby"
				/>
			</p>

		</div>
	);
};

 