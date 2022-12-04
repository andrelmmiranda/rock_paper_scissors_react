const Button = ({ clickEvent, nomeDoBotao, valorReferencia })=>{

	return(
		<button onClick = { clickEvent } id = { valorReferencia }>{ nomeDoBotao }</button>
	);
}


Button.defaultProps = {
	nomeDoBotao : 'Botão',
}

export default Button;