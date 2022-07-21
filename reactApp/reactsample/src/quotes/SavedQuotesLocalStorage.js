import { useCallback, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableCard from "./DraggableCard";

function SavedQuotesLocalStorage() {
	const [savedQuoteCardList, setSavedQuotesCardList] = useState([]);
	const moveQuoteCardListItem = useCallback((dragIndex, hoverIndex)=>{
		const dragItem = savedQuoteCardList[dragIndex]
		const hoverItem = savedQuoteCardList[hoverIndex]
		setSavedQuotesCardList(prevQuoteCardList=>{
			const updateSavedQuotesCardList = [...prevQuoteCardList]
			updateSavedQuotesCardList[dragIndex] = hoverItem
			updateSavedQuotesCardList[hoverIndex] = dragItem
			return updateSavedQuotesCardList
		})
	},[savedQuoteCardList])

	function createSavedQuoteCardList() {
		let cardId = 0;
		const cardList = [];
		const localStorageJSONString=localStorage.getItem("dataList");
		if (localStorageJSONString!=null) {
			JSON.parse(localStorageJSONString).forEach(item=>{
				cardList.push(<DraggableCard data={item} key={cardId} id={cardId} index={cardId} moveListItem={moveQuoteCardListItem} />)
				cardId+=1;
			})
		}
		
		return cardList;
	}

	useEffect(()=>{
		setSavedQuotesCardList(createSavedQuoteCardList())
	},[])

	return (
		<DndProvider backend={HTML5Backend}>
			{savedQuoteCardList}
		</DndProvider>
	)
}

export default SavedQuotesLocalStorage;