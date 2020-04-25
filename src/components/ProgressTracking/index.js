import React from 'react';

import { Container, DotSelected, DotNo } from './styles'

export default function ProgressTracking(props) {

	function renderDots(){
		let { amount, position } = props;

		var circles = []
		for (let i = 1; i <= amount; i++){
			if(i === position){
				circles.push(<DotSelected/>)
			} else{
				circles.push(<DotNo/>)
            }
		}
        return circles;
	}

  	return (
  		<Container>
  			{renderDots()}
  		</Container>
  	)
}
