import { useRef } from 'react';
import {
	useDrag,
	useDrop
} from 'react-dnd';

function DraggableCard({isDragging, data, id, index, moveListItem}) {
	const [{opacity}, dragRef] = useDrag(
		()=>({
			type: 'card',
			item: {data, id, index},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			})
		}),
	)

	const [spec, dropRef] = useDrop({
		accept: 'card',
		hover: (item, monitor) => {
			const dragIndex = item.index
			const hoverIndex = index
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

			if (dragIndex<hoverIndex && hoverActualY < hoverMiddleY) return
			if (dragIndex>hoverIndex && hoverActualY>hoverMiddleY) return

			moveListItem(dragIndex, hoverIndex)
			item.index = hoverIndex
		},
	})

	const ref = useRef(null)
	const dragDropRef = dragRef(dropRef(ref))

	return (
		<div ref={dragDropRef} style={{opacity}}>
			<div className="card">
				<p>{data.content}</p>
				<div className="originatorName">
					{data.originator.name}
				</div>
			</div>
		</div>
	)
}

export default DraggableCard;