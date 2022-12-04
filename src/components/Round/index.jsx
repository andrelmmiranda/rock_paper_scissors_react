const Round = ({ playerHand, computerHand })=>{
  
	const span1 = {
		margin: '10px'
	}

	return(
		<div>
			<div>
				<span style = { span1 }>Player: </span><span>{ playerHand }</span>
			</div>
			<div>
				<span style = { span1 }>Computer: </span><span>{ computerHand }</span>
			</div>
		</div>
	)
}

export default Round;