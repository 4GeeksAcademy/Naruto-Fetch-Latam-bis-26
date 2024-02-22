import React, { useState, useEffect } from "react";

//create your first component


const Home = () => {

	const [ charactersNumber, setCharacterNumber] = useState(0)
	const [page, setPage] = useState(85)

	// onLoad
	useEffect(()=>{

		// GET
		fetch(`https://narutodb.xyz/api/character?page=${page}&limit=5`)

			.then( resp => {
				return resp.json() // Response ->  Promise
			})
			
			.then( info  => {
				console.log(info) // Objeto JS
				setNarutoCharacters(info.characters)
				setCharacterNumber(info.totalCharacters)
			})

			.catch( error => {
				console.log(error)
			})

	},[page])


	const [ narutoCharacters, setNarutoCharacters] = useState([])

	return (
		<div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
			<h1>Characters {charactersNumber}!</h1>
			<button onClick={() => setPage(page + 1)}> Next </button>
			{
				narutoCharacters.map(( person )=> <div key={person.id}>
					<img src={person.images[0]} alt={person.name} style={{ width: '180px'}} />
					<p>
						{person.name}
					</p>
				</div>)
			}
		</div>
	);
};

export default Home;
