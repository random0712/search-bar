import React from 'react';

function ItemsList(props) {

	return (
		<ul>
			{props.children}
		</ul>
	);
};

export default ItemsList;