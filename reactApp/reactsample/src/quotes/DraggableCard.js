import { useRef } from 'react';
import {
	useDrag,
	useDrop
} from 'react-dnd';

function DraggableCard({data, index, moveListItem}) {
	const [{isDragging}, dragRef] = useDrag({
		type: 'card',
		item: {index},
		collect: (monitor)=>({
			isDragging: monitor.isDragging(),
		})
	})

	const [spec, dropRef] = useDrop({
		accept: 'card',
		hover: (item, monitor) => {
			const dragIndex = item.index
			const hoverIndex = index
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return 
			if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

			moveListItem(dragIndex, hoverIndex)
			item.index = hoverIndex
		},
	})

	const ref = useRef(null);
	const dragDropRef = dragRef(dropRef(ref))

	const opacity = isDragging ? 0:1
	return (
		<div className='card' stype={{opacity}} ref={dragDropRef}>
			<p>{data.content}</p>
			<div className='originatorName'>
				{data.originator.name}
			</div>
		</div>
	)
}

export default DraggableCard;