import React from 'react';

import { Li } from './styles'

function Item(props) {

	return (
		<Li className="item" >{props.children}</Li>
	);
};

export default Item;