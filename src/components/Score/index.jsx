const Score = ({points, player})=>{

	const styleScore = {
		// border: '1px solid red',

		width: '75px'
	}


	return(
		<div style = {styleScore}>
			<h2>{points}</h2>
			<p>{player}</p>
		</div>
	);
}

export default Score;