import { useState } from "react";

import React from "react";
import Card from "./Card";
import './Card.css';
import './Quotes.css';

function Quotes() {
	const [cardId, setCardId] = useState(0);
	const [cardList, setCardList] = useState([]);
	const [loading, setLoading] = useState(false);

	function call() {
		setLoading(true);
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_QUOTES_API_KEY,
				'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
			}
		};

		fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
			.then(response=>response.json())
			.then(response=>{
				if (response.id!=undefined) {
					const newCardList = cardList.reverse().concat(<Card data={response} key={cardId} id={cardId} deleteCard={deleteCard} />);
					setLoading(false);
					setCardList(newCardList);
					setCardId(prevCardId=>prevCardId+1);
				}
			})
			.catch(err => {
				setLoading(false);
				console.error(err)
			});
	}

	function deleteCard(id) {
		const newList = cardList.filter((item)=>item.props.id != id);
		setCardList(newList);
	}

	return (
		<div>
			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : (
				<div>
					<button onClick={call}>Call</button>
					<button onClick={()=>setCardList([])}>Clear</button>
					<div id="cards">
						{cardList.reverse()}
					</div>
				</div>
			)}
		</div>
	);
	
}

export default Quotes;