function Card(props) {
	return (
		<div className="card">
			<div className="buttons">
				<button onClick={()=>props.deleteCard(props.id)}>Delete</button>
			</div>
			<p>{props.data.content}</p>
			<div className="originatorName">
				{props.data.originator.name}
			</div>
		</div>
	);
}

export default Card;