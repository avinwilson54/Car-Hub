import { CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '@/utils';
import Image from 'next/image';
// import { useEffect } from "react";

export default async function Home() {
	const allCars = await fetchCars();
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	// useEffect(() => {
	console.log(allCars, 'allCars');
	// });

	return (
		<main className="overflow-hidden">
			<Hero />

			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like.</p>
				</div>
				<div className="home__filter">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>

					{!isDataEmpty ? (
						<div>WE HAVE CARS</div>
					) : (
						<div className="home__error-container">
							<h2 className="text-black text-xl font-bold">Oops, no result</h2>
							<p>{allCars?.message}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
