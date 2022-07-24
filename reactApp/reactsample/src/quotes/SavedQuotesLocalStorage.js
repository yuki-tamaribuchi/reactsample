import { useCallback, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableCard from "./DraggableCard";


function SavedQuotesLocalStorage() {
	const localStorageJSONString=localStorage.getItem("dataList");
	let parsedCardDataList = null;
	if (localStorageJSONString!=null) {
		parsedCardDataList = JSON.parse(localStorageJSONString);
	}
	const [cardDataList, setCardDataList] = useState(parsedCardDataList);
	
	const moveCardListItem = useCallback(
		(dragIndex, hoverIndex) => {
			const dragItem = cardDataList[dragIndex]
			const hoverItem = cardDataList[hoverIndex]
			setCardDataList(cards=>{
				//three dots is used for deep copy(?)
				const updatedCards = [...cards]
				updatedCards[dragIndex] = hoverItem
				updatedCards[hoverIndex] = dragItem
				return updatedCards
			})
		},
		[cardDataList]
	)


	return (
		<DndProvider backend={HTML5Backend}>
			{cardDataList.map((cardData, index)=>(
				<DraggableCard
					key={index}
					index={index}
					data={cardData}
					moveListItem={moveCardListItem}
				/>
			))}
		</DndProvider>
	)
}

export default SavedQuotesLocalStorage;