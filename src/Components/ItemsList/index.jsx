import React from 'react';

import { Ul } from './styles';

function ItemsList(props) {

	return (
		<Ul>
			{props.children}
		</Ul>
	);
};

export default ItemsList;