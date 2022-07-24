function Card(props) {
	return (
		<div className="card">
			{props.saved ? (
				<div></div>
			):(
				<div className="buttons">
					<button onClick={()=>props.saveCard(props.id)}>Save</button>
					<button onClick={()=>props.deleteCard(props.id)}>Delete</button>
				</div>
			)}
			
			<p>{props.data.content}</p>
			<div className="originatorName">
				{props.data.originator.name}
			</div>
		</div>
	);
}

export default Card;