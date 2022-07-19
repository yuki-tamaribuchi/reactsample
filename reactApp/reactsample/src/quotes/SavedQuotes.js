import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';

import Card from './Card';

export const createQuoteAction = (data) => {
	return {
		type: 'quotes/save',
		data: data
	}
}

const initialState = {
	quotes: []
}

function quotesReducer(state=initialState, action) {
	if (typeof state === 'undefined') {
		return initialState
	}

	if (action.type === 'quotes/save') {
		return {
			quotes: state.quotes.concat(action.data)
		}
	}
	return state
}

export const store = configureStore({reducer: quotesReducer})


function SavedQuotes() {
	let cardId = 0;
	const [savedQuoteCardList, setSavedQuotesCardList] = useState(()=>{
		const cardList = [];
		store.getState().quotes.forEach(item=>{
			cardList.push(<Card data={item} key={cardId} id={cardId} saved={true} />);
			cardId+=1;
		})
		return cardList;
	});


	function saveToLocalStorage() {
		const dataList = [];
		savedQuoteCardList.forEach(card=>{
			dataList.push(card.props.data);
		})
		const localStorageDataString = localStorage.getItem("dataList");
		let localStorageDataList = []
		if (localStorageDataString!=null){
			localStorageDataList = JSON.parse(localStorageDataString);
		}
		localStorageDataList.push.apply(localStorageDataList, dataList)
		localStorage.setItem("dataList", JSON.stringify(localStorageDataList));
	}

	return (
		<div>
			<button onClick={saveToLocalStorage}>Save to local storage</button>
			{savedQuoteCardList}
		</div>
	)
}

export default SavedQuotes;