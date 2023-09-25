import React, { useState } from "react";
import Mealitem from "./Components/Mealitem";
const Meal = () => {
	const [search, setSearch] = useState("");
	const [Mymeal, setMeal] = useState();
	const searchMeal = (evt) => {
		if (evt.key === "Enter") {
			fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setMeal(data.meals);
				});
		}
	};
	return (
		<div className="main">
			<div className="heading">
				<h1>Search Your Food Recipe</h1>
				<h4>
					What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s
				</h4>
			</div>
			<div className="searchBox">
				<input
					type="search"
					className="search-bar"
					placeholder="Enter food name"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					onKeyPress={searchMeal}
				></input>
			</div>
			<div className="container">
				{Mymeal == null ? (
					<p className="notFound">Not Found</p>
				) : (
					Mymeal.map((res) => {
						return <Mealitem data={res} />;
					})
				)}
			</div>
		</div>
	);
};
export default Meal;
